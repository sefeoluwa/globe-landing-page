/* eslint-disable react-refresh/only-export-components */
import { Icons } from "../constants"
import { SectionWrapper } from "../hoc"

function Logos() {
  return (
    <>
    <div className="flex justify-between">
    {Icons.map((icons) => (
      <img src={icons.icon} key={icons.name} alt="" />
    ))}
    </div>
    </>
  )
}

export default SectionWrapper(Logos, '')