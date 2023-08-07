/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unescaped-entities */
import { earth_dark } from "../assets"
import { SectionWrapper } from "../hoc"

function SubIndex() {
  return (
    <div className="flex justify-center items-center w-full ml-[-4vw]">
      <img src={earth_dark} alt= "Dark colored globe image" />

      <div className="">
        <h2 className="text-[50px] font-bold leading-[57px] tracking-[-1.56px] mb-[30px] w-[14.7cm]">Subscription Index</h2>
        <p className=" text-[20px] leading-[30px] text-[#696871] tracking-[-0.63px] font-['Mulish'] w-[82%]">A daily dataset to keep you up to date on subscription market trends and what's happening in your vertical.</p>
        <p className="font-bold text-[17px] text-[#5454d4] cursor-pointer pt-[30px]">Learn more</p>
      </div>
    </div>
  )
}

export default SectionWrapper(SubIndex, '')