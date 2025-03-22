// Types
import { Metadata } from "next"

// Components
import { IndexComponent } from "@/components/indexComponent/indexComponent"

const HomePage: React.FC = (): JSX.Element => {
  return <IndexComponent />
}

export default HomePage

export const metadata: Metadata = {
  title: "Mazaady",
  description: "Mazaady",
  icons: {
    icon: "/icons/favicon.ico",
  },
  openGraph: {
    title: "Mazaady",
    description: "Mazaady",
    images: ["/images/logo.png"],
  },
}
