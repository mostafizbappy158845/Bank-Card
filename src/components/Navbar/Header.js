import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import aamra from '../../assets/images/aamra2-removebg-preview.png'

import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineShoppingCart } from 'react-icons/ai';
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
    <div className={`w-full shadow-md ${scrolled ? "sticky shadow-md z-50 top-0 bg-white transition duration-200 ease-in-out" : ""}`}>
    
      <div className="max-w-[1400px] mx-auto p-4 flex items-center justify-between">
      {/* left */}
      <div>
        <Link to='/'>
        {/* <h1 className='text-3xl font-bold text-[#f8931f] uppercase cursor-pointer'>E-Commerce</h1> */}
        <div className='h-12'><img src={aamra} alt="" className='object-fit h-full w-full' /></div>
        </Link>
      </div>
      <div className="cursor-pointer md:hidden" onClick={() => setOpen(!open)}>
        
        {open ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      {/* right */}

      {/* desktop menu */}
      <div className=" items-center mb-2  space-x-10 hidden md:flex">
        <Link to="/" className='p-2 rounded-md hover:bg-orange-400 hover:text-white '>Home</Link>
        <Link to="/products"  className='p-2 rounded-md hover:bg-orange-400 hover:text-white '>Products</Link>
        
        
        <Link to="/singleProduct" className='p-2 rounded-md hover:bg-orange-400 hover:text-white'>
        {/* <AiOutlineSearch size={25} className="w-6 " />*/}
        SingleProduct</Link> 
        <Link to="/about"  className='p-2 rounded-md hover:bg-orange-400 hover:text-white '>About </Link>
    
        {/* dark mode toggle */}
       
        <Link to="/cart" className='p-2 rounded-md hover:bg-orange-400 hover:text-white'> <AiOutlineShoppingCart size={25} className="w-7 cursor-pointer" />
        </Link>
      </div>

      {/* mobile menu */}
      <div
        className={`z-10  items-center space-y-10 flex md:hidden flex-col absolute left-0 top-16 h-screen w-screen bg-white
          shadow-lg pt-4  ${open ? "flex" : "hidden"}
        `}
      >
        <Link to="/" onClick={() =>setOpen(false)}>Home</Link>
        
        <Link to="/products" onClick={() =>setOpen(false)}>Products</Link>
        <Link to="/singleProduct" onClick={() =>setOpen(false)}>
          {/* <AiOutlineSearch size={25} className="w-6" /> */}
        SingleProduct
        </Link>
        <Link to="/about" onClick={() =>setOpen(false)}>About </Link>
        {/* <SunIcon  className="w-7" /> */}
        <Link to="/cart" onClick={() =>setOpen(false)}><AiOutlineShoppingCart size={25} className="w-7" /></Link>
      </div>
    </div>
    </div>
  );
}

export default Header;