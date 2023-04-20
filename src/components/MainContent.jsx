import React from 'react'
import arrow from "../assets/arrow.svg"

const MainContent = ({text_tag,text_h,text_p,style_h,style_p, learn}) => {
  return (
    
    <div className={`${learn === true ? "flex flex-row justify-between items-end" : ""}`}>
      <div className={`flex justify-center items-start font-poppins font-medium text-[12px]  py-11 flex-col`}>
        <p className='bg-tagline_color text-text_primary py-[8px] px-[16px]'>{text_tag}</p>
        <h1 className={`text-title_color font-rubik font-semibold text-[42px] max-w-[420px] leading-[48px] pt-5 ${style_h}`}>{text_h}</h1>
        <p className={`text-paragraph font-poppins font-normal text-[13px] text-xs max-w-[380px] leading-[16px] pt-3 ${style_p}`}>{text_p}</p>
      </div>
      {
      learn && (
        <div className='flex flex-row justify-center items-center mx-[16px] my-[40px] cursor-pointer'>
          <p className='text-text_primary font-semibold text-[12px] py-[8px]'>Learn More</p>
          <img src={arrow} alt="" className='w-[20px] h-[20px] pl-[6px]'/>
        </div>
      )
    }
      
    </div>
  )
}

export default MainContent