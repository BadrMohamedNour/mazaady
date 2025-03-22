import CategoriesComponent from "@/components/categoriesComponent/categoriesComponent"
import { Metadata } from "next"

const CategoriesPage: React.FC = (): JSX.Element => {
  return <CategoriesComponent />
}

export default CategoriesPage

export const metadata: Metadata = {
  title: "Categories",
  description: "Categories",
}
