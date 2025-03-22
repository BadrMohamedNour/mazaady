// Components
import ProfileSection from "./sections/profileSection"
import ProductsSection from "./sections/productsSection"

export const IndexComponent: React.FC = (): JSX.Element => {
  return (
    <main className="pt-12">
      <div className="containerMain mx-auto p-4 flex gap-6 flex-col xl:flex-row">
        <div className="w-[100%] xl:w-1/3">
          <ProfileSection />
        </div>
        <div className="w-[100%] xl:w-2/3">
          <ProductsSection />
        </div>
      </div>
    </main>
  )
}
