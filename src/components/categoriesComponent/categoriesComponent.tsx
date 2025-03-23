"use client"

import axios from "../../lib/axios"

// Hooks
import { useEffect, useState } from "react"

// Components
import Select from "react-select"

// Types
import { Category, Subcategory } from "@/utils/types"

const CategoriesComponent: React.FC = (): JSX.Element => {
  const [categories, setCategories] = useState<Category[]>([])
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)
  const [selectedSubcategory, setSelectedSubcategory] = useState<Subcategory | null>(null)
  const [selectedProperties, setSelectedProperties] = useState<Record<string, { name: string; value: string }>>({})
  const [isClient, setIsClient] = useState(false)
  const [subcategories, setSubcategories] = useState<Subcategory[]>([])
  const [subcategoryProperties, setSubcategoryProperties] = useState<any[]>([])
  const [showTable, setShowTable] = useState(false) // To control table visibility

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleCategoryChange = (selectedOption: any) => {
    setSelectedCategory(selectedOption)
    setSelectedSubcategory(null)
    setSelectedProperties({})
    setSubcategoryProperties([])
    setShowTable(false) // Hide table when category changes

    if (selectedOption) {
      axios
        .get(`https://stagingapi.mazaady.com/api/v1/properties/${selectedOption.id}`)
        .then(({ data }) => {
          setSubcategories(data.data)
        })
        .catch((err) => console.error("Error fetching subcategories:", err))
    } else {
      setSubcategories([])
    }
  }

  const handleSubcategoryChange = (selectedOption: any) => {
    setSelectedSubcategory(selectedOption)
    setSelectedProperties({})
    setShowTable(false) // Hide table when subcategory changes

    if (selectedOption) {
      axios
        .get(`https://stagingapi.mazaady.com/api/v1/option-properties/${selectedOption.id}`)
        .then(({ data }) => {
          setSubcategoryProperties(data.data)
        })
        .catch((err) => console.error("Error fetching subcategory properties:", err))
    } else {
      setSubcategoryProperties([])
    }
  }

  const handlePropertyChange = (propertyId: string, propertyName: string, value: string) => {
    setSelectedProperties((prev) => ({
      ...prev,
      [propertyId]: { name: propertyName, value }, // Store both property name and value
    }))
  }

  const handleSubmit = () => {
    setShowTable(true) // Show table on submit
    console.log("Selected Properties:", selectedProperties)
  }

  useEffect(() => {
    axios
      .get("/all-categories/web")
      .then(({ data }) => setCategories(data.data.categories))
      .catch((err) => console.error("Error fetching categories:", err))
  }, [])

  if (!isClient) return <div>Loading...</div>

  return (
    <main className="p-4">
      <div className="containerMain">
        <div className="mb-4">
          <label>Main Category</label>
          <Select
            options={categories}
            getOptionLabel={(option) => option.name}
            getOptionValue={(option) => option.id}
            onChange={handleCategoryChange}
          />
        </div>

        {selectedCategory && (
          <div className="mb-4">
            <label>Subcategory</label>
            <Select
              options={subcategories}
              getOptionLabel={(option) => option.name}
              getOptionValue={(option) => option.id}
              onChange={handleSubcategoryChange}
            />
          </div>
        )}

        {selectedSubcategory && (
          <div className="mb-4">
            {subcategoryProperties.map((property) => (
              <div key={property.id} className="mb-2">
                <label>{property.name}</label>
                <Select
                  options={[...(property.options || []), { id: "other", name: "Other" }]}
                  getOptionLabel={(option) => option.name}
                  getOptionValue={(option) => option.id}
                  onChange={(selectedOption) =>
                    handlePropertyChange(property.id, property.name, selectedOption?.name || "")
                  }
                />
                {selectedProperties[property.id]?.value === "Other" && (
                  <input
                    type="text"
                    className="mt-2 p-2 border rounded"
                    placeholder="Enter custom value"
                    onChange={(e) => handlePropertyChange(property.id, property.name, e.target.value)}
                  />
                )}
              </div>
            ))}
          </div>
        )}

        <button onClick={handleSubmit} className="bg-blue-500 text-white p-2 rounded">
          Submit
        </button>

        {showTable && Object.keys(selectedProperties).length > 0 && (
          <table className="mt-4 w-full border-collapse border">
            <thead>
              <tr>
                <th className="border p-2">Property</th>
                <th className="border p-2">Value</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(selectedProperties).map(([key, { name, value }]) => (
                <tr key={key}>
                  <td className="border p-2">{name}</td>
                  <td className="border p-2">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </main>
  )
}

export default CategoriesComponent
