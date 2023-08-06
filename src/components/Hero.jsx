import React from 'react'
import { SectionWrapper } from "../hoc"
import { downArrow, earth_light }from "../assets"



function Hero() {
  return (
    <>
   <div className="hero mt-20 flex w-[80vw] pl-[3vw]">
      <div className="hero-left w-[459px] h-[461px] mt-5 ml-[-4vw]">

        <h1 className='text-[80px] w-[12.2cm] h-[231px] leading-[77px] pl-[2.5vw] font-bold'>Grow your subscription business</h1>
        <p className='pl-[2.5vw] text-[#696871] text-[20px] leading-[30px] tracking-[-0.63px] mt-10'>Outcome centered products that reduce churn, optimize pricing, and grow subscription business end-to-end.</p>

        <div className="start pl-[2.5vw] mt-10 flex">
          <button className='w-[211px] h-[50px] bg-[#5454D4] text-white rounded-xl text-[17px]'>Get Started</button>

          <img src={downArrow} alt="navigate to buttom" className='ml-[35px] pb-3 cursor-pointer w-[50px] h-[60px]'/>
          
        </div>

      </div>
      <div className="light-earth  w-[70vw] overflow-hidden">
      <img src={earth_light} alt="" className='w-[70vw] h-[70vh] mt-[-12vh]'/>
      </div>
     
   </div>
    </>
  )
}

export default SectionWrapper(Hero, 'hero')