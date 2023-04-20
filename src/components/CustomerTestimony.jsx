import React from 'react'
import MainContent from './MainContent'
import Reviews from './Reviews'
import { reviews } from '../constants'

const CustomerTestimony = () => {
  return (
    <section>
      <MainContent 
      text_tag={"CUSTOMER TESTIMONIAL"} 
      text_h={"People say about us?"} 
      learn={true}
      />

      <div className='flex flex-wrap justify-between items-center gap-[21px]'>
        {reviews.map(
          (review) => (
            <Reviews key={review.name} name={review.name} boldText={review.bold} profession={review.prof} lightText={review.para} profile={review.img}/>
          )
        )}
      </div>
    </section>
  )
}

export default CustomerTestimony