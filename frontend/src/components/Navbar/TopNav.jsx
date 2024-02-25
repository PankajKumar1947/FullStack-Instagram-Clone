import React from 'react'
import logo from "../assests/text_logo.png"
import { GoPlusCircle } from "react-icons/go";
import { FaFacebookMessenger } from "react-icons/fa";

const TopNav = () => {
  return (
    <>
        <div className='flex justify-between items-center  py-1 border-b-[1px] border-gray-500 sticky top-0 bg-white'>
            {/* logo */}
            <div className='w-[50%] overflow-hidden'>
                <img src={logo} alt="" className='w-[80%]' />
            </div>
            {/* create + notification */}
            <div className='text-3xl flex gap-2'>
                <GoPlusCircle/>
                <FaFacebookMessenger/>
            </div>
        </div>
    </>
  )
}

export default TopNav