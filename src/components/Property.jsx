import React from 'react'
import MainContent from './MainContent'
import Inquiries from './Inquiries'
import {houses} from "../constants"



const Property = () => {
  return (
    <section>
      <div className=""> 
        <MainContent 
        text_tag={"DISCOVER"} 
        text_h={"Best recomendation"} 
        text_p={"Discover our exclusive selection of the finest one-of-a-kind luxury properties architectural masterpieces."}
        learn={true}
        />
        
      </div>

      <div className='flex justify-between'> 
        {houses.map((house) => (
          <Inquiries key={house.id} name={house.name} location={house.location} price={house.price} img={house.img} area={house.area}/>
        ))}
        
      </div>
    </section>

  )
}

export default Property