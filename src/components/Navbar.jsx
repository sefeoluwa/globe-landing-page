import { logo } from "../assets"

function Navbar() {
  return (
   <>
   <nav className="flex navbar w-[28.4cm]">
    <div className="">
      <img src={logo} alt="Logo for page" className=""/>
    </div>

    <ul className="flex justify-around w-[8.6cm]">
    <li>Home</li>
    <li>Features</li>
    <li>Pricing</li>
    <li>Blog</li>
    </ul>

    <button className="">Get Started</button>
   </nav>
   </>

  )
}

export default Navbar