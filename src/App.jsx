import React from 'react'

import {
    About,
    Footer,
    Hero,
    Navbar,
    Property,
    Qualities,
    CustomerTestimony,
} from "./components"

const App = () => {
  return (
    <div className='w-full bg-primary overflow-hidden '>
      <div className='bg-secondary px-[82px]' >
        <Navbar />
        <Hero />
      </div>

      <div className='px-[82px] py-[80px]'>
        <Property />
      </div>

      <div className='bg-secondary px-[82px] mb-[80px]' >
        <Qualities />
      </div>
      <div className='px-[82px] pt-[80px]'>
        <About />

      </div>

      <div className='px-[82px] py-[80px]'> 

      {/* B5B5B5 */}
        <CustomerTestimony />
      </div>

      <div className='bg-secondary px-[82px]' >
        <Footer />
      </div>
    

    </div>
  )
}

export default App