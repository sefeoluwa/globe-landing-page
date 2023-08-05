import { logo } from "../assets"

function Navbar() {
  return (
   <>
   <nav className="flex justify-center pt-5" >
    <div className="nav-container flex justify-between w-[70%]">
    <div className="">
      <img src={logo} alt="Logo for page" className=""/>
    </div>

    <ul className="flex justify-around w-[8.6cm]">
    <li>Home</li>
    <li>Features</li>
    <li>Pricing</li>
    <li>Blog</li>
    </ul>

    <button className="ml-[200px]">Get Started</button>
    </div>
   </nav>
   </>

  )
}

export default Navbar