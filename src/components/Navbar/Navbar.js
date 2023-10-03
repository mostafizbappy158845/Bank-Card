import React from 'react';

const Navbar = () => {
  return (
    <div className='mx-auto w-full  px-10 py-5 bg-[#F2EAD3]'>
      <div className='wrapper flex justify-between '>
        <div className='text-3xl font-bold'>Logo</div>
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