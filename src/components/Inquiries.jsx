import React from 'react'


const Inquiries = ({img,name,location,price,area}) => {
  return (
    <div className='flex  flex-col p-[11px] border-border_color border-solid border-2 '>
        <img src={img} alt="" className='w-[224px] h-[155px]'/>
        <div className='my-[15px] flex flex-col justify-center items-start '>
            <h2 className='text-main_title_color font-poppins font-semibold text-[16px]'>{name}</h2>
            <p className='text-text_light font-normal text-[11px]'>{location}</p>
        </div>
        <div className='flex items-center '>
            <p className='text-text_primary font-semibold text-[16px]'>{price}</p>
            <p className='font-poppins text-text_title_color text-[11px] px-[6px] py-[3px] bg-secondary mx-[27px]'>{area} <span className='text-text_light'>Living area</span></p>
            
        </div>
        <button className='text-text_primary border-2 border-solid font-semibold hover:text-primary hover:bg-text_primary hover:border-text_primary mt-[16px] py-[8px]'>
                Send Inquiry
        </button>
    </div>
  )
}

export default Inquiries