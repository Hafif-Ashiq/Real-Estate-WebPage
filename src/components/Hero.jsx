import React from 'react'
import BuySellButton from './BuySellButton'
import MainButton from './MainButton'
import { dropDowns } from '../constants'
import house from "../assets/house2.png"
import MainContent from './MainContent'

const Hero = () => {
  return (
    <section className='bg-secondary pb-[70px] overflow-hidden'>
      <MainContent 
      text_tag={"REAL ESTATE"} 
      text_h={"Let's hunt for your dream residence."} 
      style_h={"text-main_title_color"}
      text_p={"Explore our range of beautiful properties with the addition of separate accommodation suitable for you."}
      />
      <div className=''>
        <div className='flex flex-row z-1'>
          <BuySellButton text="Buy" style="text-text_primary bg-primary  "/>
          <BuySellButton text="Sell" style="text-text_secondary"/>
        </div>
        <div className='flex flex-row flex-1 shadow-md text-opacity-16 text-gray-500 justify-start items-center bg-primary w-[570px] p-[22px] z-10 relative'>
          {dropDowns.map((drop) =>(
            <div key={drop.title} className="flex flex-col pr-[26px]">
              <h3 className='text-main_title_color mb-[5px] ml-[2px]'>{drop.title}</h3>
              <select name={drop.title} id={drop.title} className='bg-primary text-text_light '>
                {drop.list.map((element) => (
                  <option key={element} value={element} >{element}</option>
                ))}
              </select>
            </div>
          ))}
          <div className='shadow-lg text-opacity-32 text-green-500'>

          <MainButton text={"Search"} styles={"bg-text_primary text-primary "}/>
          </div>
        </div>

        <img src={house} alt="" className='absolute top-[74px] right-[0px] z-0'/>
      </div>


    </section>
  )
}

export default Hero