import React from 'react'
import { SectionWrapper } from "../hoc"
import { plans } from "../constants"

function SubPlans() {
  return (
    <>
    <div className="top flex justify-between items-end mb-[7vh] mt-[4vh]">
      <h2 className='w-[523px] h-[140px] font-bold text-[60px] leading-[70px] tracking-[-1.88px]'>Get the right plan for future product.</h2>
      <div className="buttons pb-[14px]">
        <button className='text-center bg-[#5454D4] w-[160px] h-[55px] text-white'>Yearly</button>
        <button className='text-center w-[160px] h-[55px] bg-[#F7F7FB]'>Monthly</button>
      </div>
    </div>

    <div className="bottom">
      <div className='flex justify-evenly'>
        {plans.map((plan) => (
          <div key={plan.title}>
            <p>{plan.title}</p>
            <h3>{plan.price}</h3>
            <ul className='flex flex-col'>
            {plan.specs.map((spec) => ( 
            <li key={spec}>{spec}</li>
          ))}
            </ul>
            <button>{plan.button}</button>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default SectionWrapper(SubPlans, '')