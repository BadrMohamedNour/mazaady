"use client"

// Hooks
import { useState } from "react"

// components
import Link from "next/link"
import Image from "next/image"
import ProductCard from "@/components/tools/productCard/productCard"

// Icons
import addIcon from "../../../../public/icons/addIconS1.svg"

const products = [
  {
    image: "/photos/p1.png",
    title: "Six-piece clothing set (blouse - pants - hat and ...",
    price: "1000 EGP",
    status: "LIVE AUCTION",
    timeLeft: { days: 2, hours: 10, mins: 50 },
    isFav: false,
  },
  {
    image: "/photos/p1.png",
    title: "Six-piece clothing set (blouse - pants - hat and ...",
    price: "1000 EGP",
    status: "LIVE AUCTION",
    timeLeft: { days: 2, hours: 10, mins: 50 },
    isFav: true,
  },
  {
    image: "/photos/p1.png",
    title: "Six-piece clothing set (blouse - pants - hat and ...",
    price: "1000 EGP",
    status: "LIVE AUCTION",
    timeLeft: { days: 2, hours: 10, mins: 50 },
    isFav: true,
  },
  {
    image: "/photos/p1.png",
    title: "Six-piece clothing set (blouse - pants - hat and ...",
    price: "1000 EGP",
    status: "LIVE AUCTION",
    timeLeft: { days: 2, hours: 10, mins: 50 },
    isFav: true,
  },
]

const ProductsSection = () => {
  const [activeTab, setActiveTab] = useState("products")

  const tabs = [
    { id: "products", label: "Products" },
    { id: "articles", label: "Articles" },
    { id: "reviews", label: "Reviews" },
  ]

  return (
    <div className="bg-white py-4 px-2 md:p-6 rounded-[21px]">
      <div className="flex justify-between mb-4">
        <div className="flex space-x-2 px-2 md:px-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`h-9 md:w-[108px] flex-1 md:flex-grow-0 px-6 text-sm font-medium rounded-[14px] transition-all duration-200 border ${
                activeTab === tab.id
                  ? "border-[#FF951D] text-[#FF951D] bg-[#FFF5E9]"
                  : "border-[#E0E0E0] text-gray-600 hover:text-gray-800 hover:bg-gray-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <Link
          href=""
          className="fixed top-1/2 right-4 md:static flex items-center justify-center gap-1 h-10 w-[125px] px-2 py-2 bg-gradient-to-r from-[#D20653] to-[#FF951D] text-white rounded-[10px]"
        >
          <Image src={addIcon} alt="add review" />
          <span className="font-bold">Add Review</span>
        </Link>
      </div>

      <div>
        {activeTab === "products" && (
          <>
            <h1 className="flex items-center gap-2 text-2xl md:text-[32px] font-extrabold mb-3">
              Products <span className="text-sm font-normal text-[#828282]">(12)</span>
            </h1>
            <div className="grid grid-cols-1 gap-9">
              {products.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </>
        )}
        {activeTab === "articles" && (
          <div className="p-4">
            <h2 className="text-[32px] font-extrabold mb-3">Articles</h2>
            <p>Articles</p>
          </div>
        )}
        {activeTab === "reviews" && (
          <div className="p-4">
            <h2 className="text-[32px] font-extrabold mb-3">Reviews</h2>
            <p>Reviews</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductsSection
