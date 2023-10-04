import React from 'react';
import aamra from '../../assets/images/aamra2-removebg-preview.png'

const Navbar = () => {
  return (
    <div className='mx-auto w-full  px-10 py-5 bg-[#BEFFF7]'>
      <div className='wrapper flex justify-between '>
        <div className='h-12'><img src={aamra} alt="" className='object-fit h-full w-full' /></div>
        <div className='flex'>
          <ul className='flex font-bold'>
            <li className='mr-10'>About Us</li>
            <li className='mr-10'>Carrer</li>
            <li className='mr-10'>Contact Us</li>
          </ul>
          
          <ul className='flex font-bold'>
            <li className='mr-10'>Login</li>
            <li className=''>SignUp</li>
          </ul>
        
        </div>
        

      </div>

    </div>
  );
};

export default Navbar;