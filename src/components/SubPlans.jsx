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
      <div className='flex justify-evenly plans flex-wrap'>
        {plans.map((plan) => (
          <div key={plan.title} className='w-[330px] h-[441px] bg-[#F7F7FB] p-[1vw]rounded-xl flex flex-col items-center pt-10'>
            <p className='text-[#696871] text[18px] leading-[28px] tracking-[-0.56px] pb-6'>{plan.title}</p>
            <h3 className='text-black text-[50px] leading-[56px] tracking-[-1.03px] pb-6'>{plan.price}</h3>
            <ul className='flex flex-col'>
            {plan.specs.map((spec) => ( 
            <li key={spec} className='text-[#696871] text[17px] leading-[50px] tracking-[-0.53px] text-center'>{spec}</li>
          ))}
            </ul>
            <button className='text-[#5454D4] bg-white w-[285px] h-[60px] text[18px] leading-[28px] tracking-[-0.56px] font-bold rounded-[12px] mt-6' >{plan.button}</button>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default SectionWrapper(SubPlans, '')