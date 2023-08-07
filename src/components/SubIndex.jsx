/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unescaped-entities */
import { earth_dark } from "../assets"
import { SectionWrapper } from "../hoc"

function SubIndex() {
  return (
    <div className="flex justify-center items-center w-full">
      <img src={earth_dark} alt= "Dark colored globe image" />

      <div className="">
        <h2>Subscription Index</h2>
        <p>A daily dataset to keep you up to date on subscription market trends and what's happening in your vertical.</p>
        <p>Learn more</p>
      </div>
    </div>
  )
}

export default SectionWrapper(SubIndex, '')