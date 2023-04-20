import React from 'react'
import logo from "../assets/logo.svg"
import menu from "../assets/menu.svg"
import MainButton from "./MainButton"
import {navLinks} from "../constants"

const Navbar = () => {

  

  return (

    <div className='flex flex-1 justify-between items-center py-[20px]'>

      {/* Left side of Navbar */}
      <div className='flex justify-center items-center'>
        <img src={logo} alt="M" />
        <h4 className='font-poppins font-semibold text-text_logo leading-[17px] tracking-[0.32px] text-[16px] pl-[6px]'>Mulih</h4>
      </div>
      {/* Right Side of Navbar */}
      <div className='sm:flex hidden justify-between items-center' >
        {/* NavLinks */}
        <div className='flex flex-1'>
          <ul className='list-none flex  flex-row '>
            {navLinks.map((navs, index) =>(
              <li key={navs} className={`text-medium font-poppins font-semibold text-[12px] ${index !== 0 ? "text-text_secondary" : "text-text_primary"} ${index !== navLinks.length - 1 ? "mr-[32px]" : "mr-[0px]" } cursor-pointer `}>{navs}</li>
            ))}
          </ul>
        </div>

        <div className='sm:flex hidden flex-1 ml-[15px]'>
              <MainButton text={"Sign up"} styles={"text-text_primary bg-primary ml-[6px]"}/>
              <MainButton text={"Login"} styles={"text-primary bg-text_primary ml-[6px]"}/>
        </div>
              
        {/* <div className='w-[28px] h-[28px] object-contain'>
          <img src={menu} alt="ehe" />
        </div> */}

      </div>
    </div>
  )
}

export default Navbar