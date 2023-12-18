import React from 'react';
import vertical_banner2 from '../../assets/images/vertical_banner.svg'
import vertical_banner from '../../assets/images/upay250x250.jpg'

const BestDeal = () => {
  return (
    <div>
      <div className='mt-14 mx-4'>
        <p data-aos="flip-down" data-aos-duration="2000" className='text-xl md:text-2xl lg:text-3xl font-mono font-semibold flex flex-start px-4 mt-4'>Best Deals</p>
        <hr data-aos="flip-left" data-aos-duration="2000" className='my-4 w-32 h-1 bg-gray-500 mx-4' />
      </div>
      <div className='main-part flex flex-col lg:flex-row min-h-[500px]'>
        <div className="left-seection w-full md:w-4/5 grid grid-cols-1 md:grid-cols-2 gap-4 px-4"
        data-aos="zoom-in" data-aos-duration="2000"
        >
          {/* Create a 3x3 grid of information */}
          <div className="info-item flex flex-col md:flex-row  border border-solid border-amber-500 rounded-md px-3
                      bg-violet-100">
            <div className='text-lg md:text-xl lg:text-3xl font-serif font-semibold md:font-bold lg:tracking-wide  lg:pt-4 mr-2 md:mr-4 lg:mr-8 uppercase'>pearl <br /> Hotel</div>
            <div className='font-medium pt-4'>Enjoy <span className='font-bold'>Discount</span> & <br /> <span className='font-bold'>Exciting Deals</span> <br /><span className=''>with your MTB Credit Card</span> <p></p> </div>
            <div className='font-medium lg:ml-8 pt-4'> <span className='text-red-500 font-bold uppercase text-xl'>MTB</span> & <span className='text-blue-800 font-bold uppercase text-xl'>visa</span> only</div>
          </div>
          <div className="info-item flex flex-col md:flex-row  border border-solid border-amber-500 rounded-md px-3
                      bg-violet-100">
            <div className='text-lg md:text-xl lg:text-3xl font-serif font-semibold md:font-bold lg:tracking-wide  lg:pt-4 mr-2 md:mr-4 lg:mr-8 uppercase'>pearl <br /> Hotel</div>
            <div className='font-medium pt-4'>Enjoy <span className='font-bold'>Discount</span> & <br /> <span className='font-bold'>Exciting Deals</span> <br /><span className=''>with your MTB Credit Card</span> <p></p> </div>
            <div className='font-medium lg:ml-8 pt-4'> <span className='text-red-500 font-bold uppercase text-xl'>MTB</span> & <span className='text-blue-800 font-bold uppercase text-xl'>visa</span> only</div>
          </div>
          <div className="info-item flex flex-col md:flex-row  border border-solid border-amber-500 rounded-md px-3
                      bg-violet-100">
            <div className='text-lg md:text-xl lg:text-3xl font-serif font-semibold md:font-bold lg:tracking-wide  lg:pt-4 mr-2 md:mr-4 lg:mr-8 uppercase'>pearl <br /> Hotel</div>
            <div className='font-medium pt-4'>Enjoy <span className='font-bold'>Discount</span> & <br /> <span className='font-bold'>Exciting Deals</span> <br /><span className=''>with your MTB Credit Card</span> <p></p> </div>
            <div className='font-medium lg:ml-8 pt-4'> <span className='text-red-500 font-bold uppercase text-xl'>MTB</span> & <span className='text-blue-800 font-bold uppercase text-xl'>visa</span> only</div>
          </div>
          <div className="info-item flex flex-col md:flex-row  border border-solid border-amber-500 rounded-md px-3
                      bg-violet-100">
            <div className='text-lg md:text-xl lg:text-3xl font-serif font-semibold md:font-bold lg:tracking-wide  lg:pt-4 mr-2 md:mr-4 lg:mr-8 uppercase'>pearl <br /> Hotel</div>
            <div className='font-medium pt-4'>Enjoy <span className='font-bold'>Discount</span> & <br /> <span className='font-bold'>Exciting Deals</span> <br /><span className=''>with your MTB Credit Card</span> <p></p> </div>
            <div className='font-medium lg:ml-8 pt-4'> <span className='text-red-500 font-bold uppercase text-xl'>MTB</span> & <span className='text-blue-800 font-bold uppercase text-xl'>visa</span> only</div>
          </div>
          <div className="info-item flex flex-col md:flex-row  border border-solid border-amber-500 rounded-md px-3 
                      bg-violet-100">
            <div className='text-lg md:text-xl lg:text-3xl font-serif font-semibold md:font-bold lg:tracking-wide  lg:pt-4 mr-2 md:mr-4 lg:mr-8 uppercase'>pearl <br /> Hotel</div>
            <div className='font-medium pt-4'>Enjoy <span className='font-bold'>Discount</span> & <br /> <span className='font-bold'>Exciting Deals</span> <br /><span className=''>with your MTB Credit Card</span> <p></p> </div>
            <div className='font-medium lg:ml-8 pt-4'> <span className='text-red-500 font-bold uppercase text-xl'>MTB</span> & <span className='text-blue-800 font-bold uppercase text-xl'>visa</span> only</div>
          </div>
          <div className="info-item flex flex-col md:flex-row  border border-solid border-amber-500 rounded-md px-3
                      bg-violet-100">
            <div className='text-lg md:text-xl lg:text-3xl font-serif font-semibold md:font-bold lg:tracking-wide  lg:pt-4 mr-2 md:mr-4 lg:mr-8 uppercase'>pearl <br /> Hotel</div>
            <div className='font-medium pt-4'>Enjoy <span className='font-bold'>Discount</span> & <br /> <span className='font-bold'>Exciting Deals</span> <br /><span className=''>with your MTB Credit Card</span> <p></p> </div>
            <div className='font-medium lg:ml-8 pt-4'> <span className='text-red-500 font-bold uppercase text-xl'>MTB</span> & <span className='text-blue-800 font-bold uppercase text-xl'>visa</span> only</div>
          </div>
        </div>
        <div className="right-section px-4 mt-4 md:mt-0 w-full md:w-1/5 min-h-full flex items-center justify-center "
        data-aos="zoom-in" data-aos-duration="2000">

          {/* Display your image here */}
          <img className='w-full h-full hidden md:block' src={vertical_banner2} alt="vertical-banner" />
          <img className='w-full h-full block md:hidden' src={vertical_banner} alt="vertical-banner" />
        </div>

      </div>
    </div>
  );
};

export default BestDeal;