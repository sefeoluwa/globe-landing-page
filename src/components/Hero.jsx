import React from 'react'
import { SectionWrapper } from "../hoc"
import { FaArrowDown } from "react-icons/fa";

function Hero() {
  return (
    <>
   <div className="hero mt-20">
      <div className="hero-left w-[459px] h-[461px]">

        <h1 className='text-[80px] w-[12.2cm] h-[231px] leading-[77px] pl-[2.5vw] font-bold'>Grow your subscription business</h1>
        <p className='pl-[2.5vw] text-[#696871] text-[20px] leading-[30px] tracking-[-0.63px] mt-10'>Outcome centered products that reduce churn, optimize pricing, and grow subscription business end-to-end.</p>

        <div className="start pl-[2.5vw] mt-10">
          <button>Get Started</button>
          <FaArrowDown className='rounded-full border-solid border-grey border-2'/>
        </div>

      </div>
   </div>
    </>
  )
}

export default SectionWrapper(Hero, 'hero')