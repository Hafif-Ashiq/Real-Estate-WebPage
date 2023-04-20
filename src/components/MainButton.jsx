import React from 'react'

const MainButton = ({styles, text}) => {
  return (
    <div className={`flex justify-center items-center px-[32px] py-[12px] ${styles} cursor-pointer font-poppins font-semibold text-[11px] rounded-[5px]`}>
      {text}
    </div>
  )
}

export default MainButton