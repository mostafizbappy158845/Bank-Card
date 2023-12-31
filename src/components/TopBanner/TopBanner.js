import React from 'react';
import advertise from '../../assets/images/advertise (1).jpg'
import img from '../../assets/images/bannerCard.png'
const TopBanner = () => {
    return (
        <>
            <div className='hidden w-full h-[300px] px-8 mt-4 rounded-md'>
                {/* <marquee behavior="" direction="" className="text-2xl font-mono font-semibold">Top Banner Ads</marquee> */}
                <img className='w-full h-full' src={advertise} alt="" />
            </div>
            
            <div className=' bg-gray-100  m-8  grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div className='sm:w-1/2 ml-8 mt-4 h-auto' data-aos="flip-up" data-aos-duration="2000" data-aos-mirror="false" data-aos-offset="200">
                    <p className='text-3xl font-medium text-slate-800 uppercase mb-2'>Bank Services</p>
                    <p className='text-xl uppercase font-semibold'>Online Banking</p>
                    <p className='text-left font-light text-lg text-slate-900'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.Temporibus laborum odit, quam error harum dolores repellat sed sequi dolore exercitationem.
                    </p>
                    <button className='uppercase bg-black text-white rounded-3xl px-8 py-2 my-6'>www.website.com</button>

                </div>
                {/* <div className='w-1/2 flex justify-end items-center ml-8'> */}
                <div className='sm:w-1/2 relative'  >
                    {/*  data-aos="fade-left" data-aos-duration="2000" data-aos-mirror="false" */}
                    <img src={img} alt="" className='md:absolute mb-8 md:mb-0  z-20' data-aos="flip-up" data-aos-duration="2000" data-aos-mirror="false"/>
                    <img src={img} alt="" className='md:absolute md:top-[18%] md:left-[60%] mb-0 z-10' data-aos="flip-down" data-aos-duration="2000" data-aos-mirror="false"/>
                    
                    
                </div>

            </div>
            {/* </div> */}
        </>
    );
};

export default TopBanner;