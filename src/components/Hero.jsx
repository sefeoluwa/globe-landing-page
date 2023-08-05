import React from 'react'
import { SectionWrapper } from "../hoc"
import { FaArrowDown } from "react-icons/fa";

function Hero() {
  return (
    <>
   <div className="hero">
      <div className="hero-left">

        <h1>Grow your subscription business</h1>
        <p>Outcome centered products that reduce churn, optimize pricing, and grow subscription business end-to-end.</p>

        <div className="start">
          <button>Get Started</button>
          <FaArrowDown className='rounded-full border-solid border-grey border-2'/>
        </div>

      </div>
   </div>
    </>
  )
}

export default SectionWrapper(Hero, 'hero')