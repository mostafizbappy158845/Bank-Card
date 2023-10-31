import React from 'react';
import advertise from '../../assets/images/advertise.jpg'
const TopBanner = () => {
    return (
        // <div className='h-20 flex justify-center items-center bg-[#eeeded]'>
        <div className='w-full h-[160px] px-8 mt-4'>
           {/* <marquee behavior="" direction="" className="text-2xl font-mono font-semibold">Top Banner Ads</marquee> */}
           <img className='w-full h-full' src={advertise} alt="" />
        </div>
    );
};

export default TopBanner;