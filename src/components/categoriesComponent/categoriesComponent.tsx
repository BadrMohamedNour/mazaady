"use client"

import axios from "@/lib/axios"

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
  const [selectedProperties, setSelectedProperties] = useState<Record<string, string>>({})

  const handleCategoryChange = (selectedOption: any) => {
    setSelectedCategory(selectedOption)
    setSelectedSubcategory(null)
  }

  const handleSubcategoryChange = (selectedOption: any) => {
    setSelectedSubcategory(selectedOption)
  }

  const handlePropertyChange = (propertyId: string, value: string) => {
    setSelectedProperties((prev) => ({ ...prev, [propertyId]: value }))
  }

  const handleSubmit = () => {
    console.log("Selected Properties:", selectedProperties)
  }

  useEffect(() => {
    axios
      .get("/all-categories/web")
      .then((res) => setCategories(res.data.categories))
      .catch((err) => console.error("Error fetching categories:", err))
  }, [])

  return (
    <div className="p-4">
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
            options={selectedCategory.children}
            getOptionLabel={(option) => option.name}
            getOptionValue={(option) => option.id}
            onChange={handleSubcategoryChange}
          />
        </div>
      )}

      {selectedSubcategory && (
        <div className="mb-4">
          {selectedSubcategory.properties?.map((property) => (
            <div key={property.id} className="mb-2">
              <label>{property.name}</label>
              <Select
                options={[...(property.children || []), { id: "other", name: "Other" }]}
                getOptionLabel={(option) => option.name}
                getOptionValue={(option) => option.id}
                onChange={(selectedOption) => handlePropertyChange(property.id, selectedOption?.name || "")}
              />
              {selectedProperties[property.id] === "Other" && (
                <input
                  type="text"
                  className="mt-2 p-2 border rounded"
                  placeholder="Enter custom value"
                  onChange={(e) => handlePropertyChange(property.id, e.target.value)}
                />
              )}
            </div>
          ))}
        </div>
      )}

      <button onClick={handleSubmit} className="bg-blue-500 text-white p-2 rounded">
        Submit
      </button>

      {Object.keys(selectedProperties).length > 0 && (
        <table className="mt-4 w-full border-collapse border">
          <thead>
            <tr>
              <th className="border p-2">Property</th>
              <th className="border p-2">Value</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(selectedProperties).map(([key, value]) => (
              <tr key={key}>
                <td className="border p-2">{key}</td>
                <td className="border p-2">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default CategoriesComponent
