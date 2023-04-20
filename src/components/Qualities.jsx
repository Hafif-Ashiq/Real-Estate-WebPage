import React from 'react'
import MainContent from './MainContent'
import Advantages from './Advantages'
import { qualities } from '../constants'

const Qualities = () => {
  return (
    <section>
      <MainContent 
        text_tag={"OUR ADVANTE"} 
        text_h={"Giving you peace of mind"} 
        text_p={""}
        />

        <div className='flex flex-1 flex-wrap justify-between items-center'>
          {qualities.map((quality) => (
            <Advantages key={quality.heading} icon={quality.icon} name={quality.heading} exp={quality.para} />
          ))}
        </div>
    </section>
  )
}

export default Qualities