"use client"

// Components
import Image from "next/image"

// Hooks
import { useState } from "react"

// Icons
import followingIcon from "../../../../public/icons/followingIcon.svg"
import followersIcon from "../../../../public/icons/followersIcon.svg"
import ratingIcon from "../../../../public/icons/ratingIcon.svg"
import viewIcon from "../../../../public/icons/viewIcon.svg"
import shareIcon from "../../../../public/icons/shareIcon.svg"
import dowonloadIcon from "../../../../public/icons/dowonloadIcon.svg"
import arrowDownIcon from "../../../../public/icons/arrowDownIcon.svg"
import downloadIconS1 from "../../../../public/icons/downloadIconS1.svg"

const ProfileSection: React.FC = (): JSX.Element => {
  const [isQrCollapsed, setIsQrCollapsed] = useState(false)

  const toggleQrSection = () => {
    setIsQrCollapsed(!isQrCollapsed)
  }

  return (
    <div className="flex flex-col md:flex-row xl:flex-col gap-6">
      <div className="bg-white flex-1 p-6 rounded-[21px]">
        <div className="mb-6">
          <div className="mb-4">
            <Image src="/photos/profile.png" alt="Profile" width={100} height={100} />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-3">Hala Ahmed</h2>
            <p className="text-gray-600">
              I am Hala Ahmed, I am the owner of the local brand called Beauty which is for Makeup and Skin Care.
            </p>
          </div>
        </div>
        <ul className="flex justify-between gap-[6px] mt-4 mb-6">
          <li className="flex items-center rounded-[18px] bg-[#FFF5E9] px-2 py-3 gap-[6px]">
            <div className="shrink-0">
              <Image src={followingIcon} alt="following" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold">5</span>
              <span className="text-xs text-[#FF951D]">Following</span>
            </div>
          </li>
          <li className="flex items-center rounded-[18px] bg-[#FFF5E9] px-2 py-3 gap-[6px]">
            <div className="shrink-0">
              <Image src={followersIcon} alt="followers" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold">20</span>
              <span className="text-xs text-[#FF951D]">Followers</span>
            </div>
          </li>
          <li className="flex items-center rounded-[18px] bg-[#FFF5E9] px-2 py-3 gap-[6px]">
            <div className="shrink-0">
              <Image src={ratingIcon} alt="rating" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold">
                4.2 <small className="text-[10px] text-[#828282]">(15)</small>
              </span>
              <span className="text-xs text-[#FF951D]">Rate</span>
            </div>
          </li>
        </ul>
        <button className="h-12 w-full text-white bg-gradient-to-r from-[#D20653] to-[#FF951D] rounded-xl text-base font-bold">
          Follow
        </button>
      </div>

      <div className="bg-white flex-1 p-6 rounded-[21px]">
        <div className="flex justify-between ">
          <h2 className="text-lg font-bold">QR Code</h2>
          <ul className="flex items-center gap-6">
            <li className="flex items-center">
              <button>
                <Image src={viewIcon} alt="view" />
              </button>
            </li>
            <li className="flex items-center">
              <button>
                <Image src={shareIcon} alt="view" />
              </button>
            </li>
            <li className="flex items-center">
              <button>
                <Image src={dowonloadIcon} alt="view" />
              </button>
            </li>

            <li className="flex items-center md:hidden">
              <button
                className={`flex items-center justify-center h-6 w-6 ${
                  isQrCollapsed ? "bg-[#F6F4F5]" : "bg-[#FBE7EE]"
                }   rounded-full`}
                onClick={toggleQrSection}
              >
                <Image src={arrowDownIcon} alt="arrow" className={`${isQrCollapsed ? "" : "rotate-180"}`} />
              </button>
            </li>
          </ul>
        </div>

        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden 
            ${isQrCollapsed ? "max-h-0 mt-0" : "max-h-[500px] mt-[14px]"}`}
        >
          <div className="flex items-center justify-center gap-[10px] bg-[#FFF5E9] py-5 px-[14px] rounded-[18px] mb-4">
            <Image src={downloadIconS1} alt="download" />
            <span className="text-xs">Download the QR code or share it with your friends.</span>
          </div>
          <div>
            <Image className="w-full" src="/photos/qrcode.png" alt="qrcode" height={313} width={358} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileSection
