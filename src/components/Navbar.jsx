import { logo } from "../assets"
import { motion, useAnimation } from "framer-motion";


function Navbar() {

    const controls = useAnimation();
  
    const handleHover = () => {
      controls.start({ x: [0, -5, 5, -5, 0], transition: { duration: 0.7 } });
    };
  

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

    <motion.button 
    onHoverStart={handleHover}
    onHoverEnd={() => controls.start({ x: 0 })}
    animate={controls}
    className="w-[211px] h-[50px] bg-[#FF7143] text-white rounded-xl text-[17px]">Get Started</motion.button>
    </div>
   </nav>
   </>

  )
}

export default Navbar