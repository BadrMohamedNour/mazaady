// Components
import Link from "next/link"

// Hooks
import { usePathname } from "next/navigation"

const Menu: React.FC = (): JSX.Element => {
  const pathName = usePathname()

  return (
    <nav className="hidden lg:flex items-center gap-10 ">
      <Link
        href="/"
        className={`text-lg text-[#828282] hover:text-[#D20653] relative ${
          pathName === "/"
            ? "text-[#D20653] font-bold after:content-[''] after:block after:h-[6px] after:w-[100%] after:bg-[#D20653] after:rounded-t-lg after:absolute after:left-0 after:bottom-[-20px]"
            : ""
        }`}
      >
        Home
      </Link>
      <Link
        href="/blog"
        className={`text-lg text-[#828282] hover:text-[#D20653] ${
          pathName === "/blog"
            ? "text-[#D20653] font-bold after:content-[''] after:block after:h-[6px] after:w-[100%] after:bg-[#D20653] after:rounded-t-lg after:absolute after:left-0 after:bottom-[-20px]"
            : ""
        }`}
      >
        Blog
      </Link>
      <Link
        href="/gifts"
        className={`text-lg text-[#828282] hover:text-[#D20653] ${
          pathName === "/gifts"
            ? "text-[#D20653] font-bold after:content-[''] after:block after:h-[6px] after:w-[100%] after:bg-[#D20653] after:rounded-t-lg after:absolute after:left-0 after:bottom-[-20px]"
            : ""
        }`}
      >
        Gifts
      </Link>
    </nav>
  )
}

export default Menu
