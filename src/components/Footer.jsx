import React from 'react'
import logo from "../assets/logo.svg"
import MainButton from './MainButton'
import { footerLinks } from '../constants'
import instagram from "../assets/Instagram.svg"
import facebook from "../assets/Facebook.svg"
import youtube from "../assets/Youtube.svg"

const Footer = () => {
  return (
    <section className='flex flex-row flex-1 py-[50px] justify-between items-center gap-[138px]'>
      <div className='flex flex-col justify-center items-start gap-[12px]'>
        <div className='flex justify-center items-center'>
          <img src={logo} alt="M" />
          <h4 className='font-poppins font-semibold text-text_logo leading-[17px] tracking-[0.32px] text-[16px] pl-[6px]'>Mulih</h4>
        </div>
        <p className='text-main_title_color font-poppins font-normal max-w-[270px] leading-[17px] text-[13px]'>We have built our reputation as true local area experts.</p>
        <h3 className='text-name_color font-poppins font-[600]'>
        Newsletter
        </h3>
        <div className='flex flex-row'>
          <input type="text" placeholder='Input your Email' className='w-[170px] px-[12px] font-poppins font-light text-[12px]'  />
          <MainButton text={"Send"} styles={"text-primary bg-text_primary"}/>

        </div>
      </div>
      <div className='flex flex-row justify-between gap-14 items-start'>
        {footerLinks.map((el) => (
          <div className='flex flex-col justify-start items-start gap-[11px]'>
            <h2 className='text-name_color font-poppins font-medium leading-[18px]'>{el.title}</h2>
            {el.links.map((link) => (
              <p className='text-prof_color text-[12px] font-poppins font-normal cursor-pointer hover:text-name_color'>{link}</p>
            ))}
          </div>
          
        ))}

        <div className='flex flex-1 flex-col justify-between items-start gap-[11px]'>
          <h2 className='text-name_color font-poppins font-medium leading-[18px]'>Follow us on</h2>
          <div className='flex flex-row gap-[12px]'>
            <img src={instagram} alt="" className='h-[25px] w-[25px] cursor-pointer'/>
            <img src={youtube} alt="" className='h-[25px] w-[25px] cursor-pointer'/>
            <img src={facebook} alt="" className='h-[25px] w-[25px] cursor-pointer'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer