import React from 'react'
import FlavorTitle from '../FlavorTitle'
import FlavorSlider from '../FlavorSlider'


const FlavourSection = () => {
  return (
    <>
    <section className='flavor-section'>
        <div className='h-full flex flex-col lg:flex-row items-center relative'>
            <div className='lg:w-[57%] flex-none h-80 lg:h-full md:mt-20 2xl:mt-0'>
                <FlavorTitle/>
            </div>
             <div className='h-full'>
                <FlavorSlider/>
             </div>
        </div>
    </section>

    </>
  )
}

export default FlavourSection