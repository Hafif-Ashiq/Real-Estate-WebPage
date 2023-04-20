import React from 'react'

const BuySellButton = ({text, style}) => {
  return (
    <div>
        <button className={`flex justify-center items-center px-[21px] py-[8px] cursor-pointer font-poppins font-semibold text-[15px] ${style}`}>
            {text}
        </button>
    </div>
  )
}

export default BuySellButton