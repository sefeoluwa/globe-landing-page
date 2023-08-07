/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import { services } from "../constants"
import { SectionWrapper } from "../hoc"

function Services() {
  return (
    <div>
      {services.map((service) => (
        <div className="" key={service.name}>
          <img src={service.icon} alt="" key={service.name} />
          <h1>{service.header}</h1>
          <p>{service.para}</p>
        </div>
))}
    </div>
  )
}

export default SectionWrapper(Services, '')