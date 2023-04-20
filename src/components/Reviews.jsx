import React from 'react'
import quotaion from "../assets/quotationMark.svg"

const Reviews = ({boldText,lightText,profile,name,profession}) => {
  return (
    <div className='flex flex-col flex-1 justify-between items-start p-[16px] border-border_color border-[2px] border-solid gap-[20px] h-[270px] min-w-[240px]'>
        <img src={quotaion} alt="" className='w-[28px] h-[28px]' />
        <div>
            <h5 className='text-main_title_color font-poppins font-semibold text-[16px] leading-[19px] py-[7px]'>{boldText}</h5>
            <p className='text-main_title_color font-poppins font-medium text-[14px] leading-[16px]'>{lightText}</p>
        </div>
        <div className='flex flex-row gap-[9px] justify-center items-center '>
            <img src={profile} alt="" className='h-[35px] w-[35px] rounded-[50%]'/>
            <div className='flex flex-col justify-center items-start gap-[3px] ml-[12px]'>
                <h5 className='text-name_color font-nunito font-semibold text-[12px] leading-[12px] '>{name}</h5>
                <p className='text-prof_color font-nunito font-regular text-[10px] leading-[14px] '>{profession}</p>
            </div>
        </div>

    </div>
  )
}

export default Reviews