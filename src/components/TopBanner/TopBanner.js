import React from 'react';
import advertise from '../../assets/images/advertise (1).jpg'
import img from '../../assets/images/bannersmallimg.png'
const TopBanner = () => {
    return (
        <>
            {/* // <div className='h-20 flex justify-center items-center bg-[#eeeded]'> */}
            <div className='hidden w-full h-[300px] px-8 mt-4 rounded-md'>
                {/* <marquee behavior="" direction="" className="text-2xl font-mono font-semibold">Top Banner Ads</marquee> */}
                <img className='w-full h-full' src={advertise} alt="" />
            </div>
            <div className=' bg-black h-fit md:h-[200px] m-8 text-white flex justify-between'>
                <div className='w-1/2 ml-8 mt-4 '>
                    <p className='texl-xl font-medium text-slate-400 uppercase'>Bank Services</p>
                    <p className='text-2xl uppercase font-semibold'>Mobile Banking</p>
                    <p className='text-left font-light text-lg text-slate-200'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.Temporibus laborum odit, quam error harum dolores repellat sed sequi dolore exercitationem.
                    </p>
                    <button className='uppercase bg-blue-500 rounded-3xl px-8 py-2 mt-2'>
                        www.website.com
                    </button>

                </div>
                <div className='w-1/2 mt-4 flex justify-center items-center'>
                    <img src={img} alt="" className='rounded-md ' />
                    
                </div>

            </div>
        </>
    );
};

export default TopBanner;