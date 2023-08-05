import { logo } from "../assets"

function Navbar() {
  return (
   <>
   <nav className="flex justify-center pt-5 " >
    <div className="nav-container flex justify-between w-[75%]">
    <div className="">
      <img src={logo} alt="Logo for page" className=""/>
    </div>

    <ul className="flex justify-around w-[9cm] pt-2 text-[15px]">
    <li>Home</li>
    <li>Features</li>
    <li>Pricing</li>
    <li>Blog</li>
    </ul>

    <button className="">Get Started</button>
    </div>
   </nav>
   </>

  )
}

export default Navbar