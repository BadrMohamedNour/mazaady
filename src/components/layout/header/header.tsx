"use client"

// Components
import Link from "next/link"
import Image from "next/image"

// Images & Icons
import logo from "../../../../public/images/logo.svg"
import addIcon from "../../../../public/icons/addIcon.svg"
import langIcon from "../../../../public/icons/langIcon.svg"
import menuIcon from "../../../../public/icons/menuIcon.svg"
import searchIcon from "../../../../public/icons/searchIcon.svg"
import notificationsIcon from "../../../../public/icons/notificationIcon.svg"
import Menu from "./sections/menu"

const Header: React.FC = (): JSX.Element => {
  return (
    <header className="bg-white">
      <div className="containerMain">
        <div className="h-[68px] flex items-center justify-between">
          <div className="flex gap-8 items-center">
            <div className="flex items-center gap-2">
              <button className="block lg:hidden">
                <Image src={menuIcon} alt="menu" />
              </button>
              <Link href="/">
                <Image src={logo} alt="Mazaady" />
              </Link>
            </div>
            <Menu />
          </div>
          <div className="flex items-center space-x-4">
            <ul className="flex gap-6 items-center">
              <li>
                <Link href="">
                  <Image src={searchIcon} alt="Search" />
                </Link>
              </li>
              <li className="flex items-center gap-4 md:gap-6 before:hidden md:before:block before:content-[''] before:h-[38px] before:w-[1px] before:bg-[#FFEAD2] after:hidden md:after:block  after:content-[''] after:h-[38px] after:w-[1px] after:bg-[#FFEAD2]">
                <Link href="">
                  <Image src={notificationsIcon} alt="Notifications" />
                </Link>
              </li>
              <li>
                <Link href="">
                  <Image src="/photos/user.png" alt="User" width={24} height={24} />
                </Link>
              </li>
            </ul>

            <Link
              href=""
              className=" hidden lg:flex items-center gap-1 h-[40px] px-4 py-2 font-bold text-white bg-gradient-to-r from-[#D20653] to-[#FF951D] rounded-[10px]"
            >
              <Image src={addIcon} alt="add" />
              <span> Add New Product</span>
            </Link>

            <div className="hidden lg:flex items-center gap-2">
              <Image src={langIcon} alt="lang" />
              <hr className="h-[22px] w-[1px] bg-[#E0E0E0]" />
              <button>EN</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
