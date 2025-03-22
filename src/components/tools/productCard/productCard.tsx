// Components
import Image from "next/image"

// Types
import { Product } from "@/utils/types"

// Icons
import favIcon from "../../../../public/icons/favIcon.svg"
import isFavIcon from "../../../../public/icons/isFavIcon.svg"

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="flex">
      <div className="h-32 w-36 relative shrink-0">
        <button className="block xl:hidden absolute top-2 left-2 bg-white z-10 rounded-full p-[6px]">
          {product.isFav ? (
            <Image src={isFavIcon} alt="add to favourite" />
          ) : (
            <Image src={favIcon} alt="add to favourite" />
          )}
        </button>

        <Image src={product.image} alt={product.title} layout="fill" className="rounded-lg" />

        <span
          className={`inline-flex items-center justify-center h-9 px-4 py-1 text-white text-[8px] md:text-xs rounded-tl-[34px] rounded-br-[34px] absolute end-0 bottom-0 ${
            product.status === "LIVE AUCTION" ? "bg-[#D20653]" : "bg-orange-500"
          }`}
        >
          {product.status}
        </span>
      </div>

      <div className="flex-1 flex justify-between items-start px-4">
        <div>
          <h3 className="text-xs md:text-lg font-normal mb-2">{product.title}</h3>
          <div>
            <span className="text-xs md:text-lg text-[#828282]">Starting Price</span>
            <span className="text-xs md:text-2xl font-bold">{product.price}</span>
          </div>
          <div className="flex xl:items-center gap-2 mt-2 flex-col xl:flex-row">
            <span className="text-xs md:text-lg text-[#828282]">Lot starts in</span>
            <div className="flex items-center gap-[6px] xl:gap-4">
              <div className="h-7 md:h-10 md:w-[105px] flex-1  flex gap-1 items-center justify-center rounded-3xl bg-[#FFF5E9] text-[#FF951D] font-bold">
                <span className="text-xs md:text-xl">{product.timeLeft.days}</span>
                <span className="text-[8px] md:text-sm ">Days</span>
              </div>

              <div className="h-7 md:h-10 md:w-[105px] flex-1  flex gap-1 items-center justify-center rounded-3xl bg-[#FFF5E9] text-[#FF951D] font-bold">
                <span className="text-xs md:text-xl">{product.timeLeft.hours}</span>
                <span className="text-[8px] md:text-sm">Hours</span>
              </div>

              <div className="h-7 md:h-10 md:w-[105px] flex-1 flex gap-1 items-center justify-center rounded-3xl bg-[#FFF5E9] text-[#FF951D] font-bold">
                <span className="text-xs md:text-xl">{product.timeLeft.mins}</span>
                <span className="text-[8px] md:text-sm">Minutes</span>
              </div>
            </div>
          </div>
        </div>
        <button className="mt-4 hidden xl:block">
          {product.isFav ? (
            <Image src={isFavIcon} alt="add to favourite" />
          ) : (
            <Image src={favIcon} alt="add to favourite" />
          )}
        </button>
      </div>
    </div>
  )
}

export default ProductCard
