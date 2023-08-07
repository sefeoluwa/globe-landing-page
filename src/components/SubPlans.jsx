import React from 'react'
import { SectionWrapper } from "../hoc"
import { plans } from "../constants"

function SubPlans() {
  return (
    <>
    <div className="top flex justify-between">
      <h2>Get the right plan for future product.</h2>
      <div className="buttons">
        <button>Yearly</button>
        <button>Monthly</button>
      </div>
    </div>

    <div className="bottom">
      <div className='flex justify-evenly'>
        {plans.map((plan) => (
          <div key={plan.title}>
            <p>{plan.title}</p>
            <h3>{plan.price}</h3>
            <ul className='flex flex-col'>
              <li className=''>{plan.specs}</li>
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