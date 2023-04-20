import React from 'react'

const Advantages = ({icon,name,exp}) => {
  return (
    <div className='min-w-[250px] h-[180px]'>
        <img src={icon} alt="" className='w-[35px] h-[35px] py-[5px]'/>
        <h3 className='text-title_color font-poppins font-bold text-[24px] py-[5px]'>{name}</h3>
        <p className='text-paragraph font-poppins font-normal text-[11px] max-w-[280px] py-[5px]'>{exp}</p>
    </div>
  )
}

export default Advantages 