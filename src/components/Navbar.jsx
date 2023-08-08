import { useState } from "react";
import { logo, menu, close } from "../assets";
import { motion, useAnimation } from "framer-motion";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const controls = useAnimation();

  const handleHover = () => {
    controls.start({ x: [0, -5, 5, -5, 0], transition: { duration: 0.7 } });
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className=" nav-full md:flex justify-center pt-5 fixed z-10">
        <div className="nav-container flex justify-between w-[75%]">
          <div className="">
            <img src={logo} alt="Logo for page" className="" />
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
            className="w-[211px] h-[50px] bg-[#FF7143] text-white rounded-xl text-[17px]"
          >
            Get Started
          </motion.button>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden flex justify-center pt-5 fixed z-10 w-[90vw] ">
        <div className="nav-container flex justify-between w-[75%]">
          <div className="">
            <img src={logo} alt="Logo for page" className="" />
          </div>

          {/* Mobile menu button (hamburger) */}
          <button
            onClick={handleMobileMenuToggle}
            className="w-[32px] h-[32px] p-2"
          >
            {isMobileMenuOpen ? (
              <img src={close} alt="Close" />
            ) : (
              <img src={menu} alt="Menu" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col fixed bg-[#5454D4] text-white w-[55vw] ml-[35vw] mt-[10vh] h-[350px] items-end pr-[18vw] z-10 rounded-2xl pt-4">
          <ul className="text-[20px] mr-[-25px] p-5">
            <li className="mb-6">Home</li>
            <li className="mb-6">Features</li>
            <li className="mb-6">Pricing</li>
            <li className="mb-6">Blog</li>
          </ul>
          <motion.button
            onHoverStart={handleHover}
            onHoverEnd={() => controls.start({ x: 0 })}
            animate={controls}
            className="w-[150px] h-[48px] bg-[#FF7143] text-white rounded-xl text-[14px] mt-4 mr-[-2.8em]"
          >
            Get Started
          </motion.button>
        </div>
      )}
    </>
  );
}

export default Navbar;
