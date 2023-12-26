import React, { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import aamra from '../../assets/images/aamra2-removebg-preview.png'
// import aamra from '../../assets/images/WhatsApp_Image-removebg-preview.png'

import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 150) {
        setScrolled(true);
    } else {
        setScrolled(false);
    }
};

useEffect(() => {
    window.addEventListener("scroll", handleScroll);
}, []);

  return (
    <div className={`w-full shadow-md transition duration-700 ${scrolled ? "sticky shadow-md z-50 top-0 bg-white transition duration-600 ease-in-out" : ""}`}>
    
      <div className="max-w-[1400px] mx-auto p-4 flex items-center justify-between">
      {/* left */}
      <div>
        <NavLink to='/'>
        <div className='h-12'><img src={aamra} alt="" className=' h-full w-full' /></div>
        </NavLink>
      </div>
      <div className="cursor-pointer md:hidden" onClick={() => setOpen(!open)}>
        
        {open ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      {/* right */}

      {/* desktop menu */}
      <div className=" items-center mb-2  space-x-10 hidden md:flex">
        <NavLink to="/" className='p-2 rounded-md hover:bg-blue-400 hover:text-white '>Home</NavLink>
        <NavLink to="/carrer"  className='p-2 rounded-md hover:bg-blue-400 hover:text-white '>Career</NavLink>
        
        
        <NavLink to="/contactus" className='p-2 rounded-md hover:bg-blue-400 hover:text-white'>
       
        ContactUs</NavLink> 
        {/* <NavLink to="/about"  className='p-2 rounded-md hover:bg-blue-400 hover:text-white '>About </NavLink> */}
    
        
       
        <NavLink to="/login" className='p-2 rounded-md hover:bg-blue-400 hover:text-white'>Login
        </NavLink>
      </div>

      {/* mobile menu */}
      <div
        className={`z-20  items-center space-y-10 flex md:hidden flex-col absolute left-0 top-20 h-screen w-screen bg-white
          shadow-lg pt-4  ${open ? "flex" : "hidden"}
        `}
      >
        <NavLink to="/" onClick={() =>setOpen(false)}>Home</NavLink>
        
        <NavLink to="/carrer" onClick={() =>setOpen(false)}>Career</NavLink>
        <NavLink to="/contactus" onClick={() =>setOpen(false)}>ContactUs</NavLink>
        {/* <NavLink to="/about" onClick={() =>setOpen(false)}>About </NavLink> */}
        <NavLink to="/login" onClick={() =>setOpen(false)}>Login</NavLink>
      </div>
    </div>
    </div>
  );
}

export default Header;