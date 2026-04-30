import { useState } from "react";
import "../App.css";
import menuIcon from "../assets/imgs/menu_icon.png";
import { Link } from "react-router-dom";
import textLogo from '../assets/imgs/text_logo.png';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((previousState) => !previousState);
  };

  const handleNavItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div
        className="w-full bg-surface h-16 md:h-18 shadow-md px-6 md:px-25 
        flex items-center md:justify-start "
      >
        <div className='flex xl:basis-3/8 lg:basis-1/2 md:basis-5/10 items-center h-18 md:mr-auto'>
          <img src={textLogo} className='h-7/10 '/>

          <div className='flex  items-center justify-evenly w-full '>
            <Link   to='/'><h1 className='desktop-nav-item'>Theme Input</h1></Link>
            <Link to='/showcase'><h1 className='desktop-nav-item'>Showcase</h1></Link>           
            <h1 className='desktop-nav-item'>Other</h1>
          </div>
        </div>
        
        
        <button
          type="button"
          className="md:hidden ml-auto"
          onClick={handleMenuToggle}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav-menu"
          aria-label="Toggle navigation menu"
        >
          <img src={menuIcon} className="h-10"></img>
        </button>
      </div>
      <div
        id="mobile-nav-menu"
        className={` flex flex-col w-screen space-y-2 overflow-hidden shadow-md bg-surface
                    transition-all duration-500 ease-in-out ${
                      isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                    }`}
      >
        <Link
          className="mobile-nav-item"
          onClick={handleNavItemClick}
          to="/showcase"
        >
          Showcase
        </Link>
        <Link className="mobile-nav-item" onClick={handleNavItemClick} to="/">
          Theme Input
        </Link>
      </div>
    </>
  );
}

export default Navbar;
