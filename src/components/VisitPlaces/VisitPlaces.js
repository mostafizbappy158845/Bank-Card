import React from 'react';
import vertical_banner2 from '../../assets/images/vertical_banner.svg'

const VisitPlaces = () => {
    return (
        <div>
            <div className='mt-14 mx-4'>
                <p className=' texl-xl md:text-2xl lg:text-4xl font-mono md:font-semibold flex flex-start  mt-4 capitalize'>places you should visit</p>
                <hr className='my-4 w-32 h-1 bg-gray-500 ' />
            </div>
            <div className='main-part flex flex-col lg:flex-row min-h-[500px]'>
                <div className="left-seection w-4/5 grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
                    {/* Create a 3x3 grid of information */}
                    
                    <div className="info-item flex flex-col lg:flex-row  border border-solid border-amber-500 rounded-md px-3
                      bg-red-100">
                        <div className='text-xl md:text-2xl lg:text-4xl font-serif font-semibold md:font-bold lg:tracking-wide pt-14 mr-2 md:mr-4 lg:mr-8 uppercase'>pearl <br /> Hotel</div>
                        <div className='font-medium pt-10 text-justify'>Enjoy <span className='font-bold'>Discount</span> & <br /> <span className='font-bold'>Exciting Deals</span> <br /><span className='flex flex-wrap'>with your MTB Credit Card</span> <p></p> </div>
                        <div className='font-medium  lg:ml-8 pt-10'> <span className='text-red-500 font-bold uppercase text-xl'>MTB</span> & <span className='text-blue-800 font-bold uppercase text-xl'>visa</span> only</div>
                    </div>

                    <div className="info-item flex flex-col lg:flex-row  border border-solid border-amber-500 rounded-md px-3
                      bg-red-100">
                        <div className='text-xl md:text-2xl lg:text-4xl font-serif font-semibold md:font-bold lg:tracking-wide pt-14 mr-2 md:mr-4 lg:mr-8 uppercase'>pearl <br /> Hotel</div>
                        <div className='font-medium pt-10 text-justify'>Enjoy <span className='font-bold'>Discount</span> & <br /> <span className='font-bold'>Exciting Deals</span> <br /><span className='flex flex-wrap'>with your MTB Credit Card</span> <p></p> </div>
                        <div className='font-medium  lg:ml-8 pt-10'> <span className='text-red-500 font-bold uppercase text-xl'>MTB</span> & <span className='text-blue-800 font-bold uppercase text-xl'>visa</span> only</div>
                    </div>

                    <div className="info-item flex flex-col lg:flex-row  border border-solid border-amber-500 rounded-md px-3
                      bg-red-100">
                        <div className='text-xl md:text-2xl lg:text-4xl font-serif font-semibold md:font-bold lg:tracking-wide pt-14 mr-2 md:mr-4 lg:mr-8 uppercase'>pearl <br /> Hotel</div>
                        <div className='font-medium pt-10 text-justify'>Enjoy <span className='font-bold'>Discount</span> & <br /> <span className='font-bold'>Exciting Deals</span> <br /><span className='flex flex-wrap'>with your MTB Credit Card</span> <p></p> </div>
                        <div className='font-medium  lg:ml-8 pt-10'> <span className='text-red-500 font-bold uppercase text-xl'>MTB</span> & <span className='text-blue-800 font-bold uppercase text-xl'>visa</span> only</div>
                    </div>

                    <div className="info-item flex flex-col lg:flex-row  border border-solid border-amber-500 rounded-md px-3
                      bg-red-100">
                        <div className='text-xl md:text-2xl lg:text-4xl font-serif font-semibold md:font-bold lg:tracking-wide pt-14 mr-2 md:mr-4 lg:mr-8 uppercase'>pearl <br /> Hotel</div>
                        <div className='font-medium pt-10 text-justify'>Enjoy <span className='font-bold'>Discount</span> & <br /> <span className='font-bold'>Exciting Deals</span> <br /><span className='flex flex-wrap'>with your MTB Credit Card</span> <p></p> </div>
                        <div className='font-medium  lg:ml-8 pt-10'> <span className='text-red-500 font-bold uppercase text-xl'>MTB</span> & <span className='text-blue-800 font-bold uppercase text-xl'>visa</span> only</div>
                    </div>

                    <div className="info-item flex flex-col lg:flex-row  border border-solid border-amber-500 rounded-md px-3
                      bg-red-100">
                        <div className='text-xl md:text-2xl lg:text-4xl font-serif font-semibold md:font-bold lg:tracking-wide pt-14 mr-2 md:mr-4 lg:mr-8 uppercase'>pearl <br /> Hotel</div>
                        <div className='font-medium pt-10 text-justify'>Enjoy <span className='font-bold'>Discount</span> & <br /> <span className='font-bold'>Exciting Deals</span> <br /><span className='flex flex-wrap'>with your MTB Credit Card</span> <p></p> </div>
                        <div className='font-medium  lg:ml-8 pt-10'> <span className='text-red-500 font-bold uppercase text-xl'>MTB</span> & <span className='text-blue-800 font-bold uppercase text-xl'>visa</span> only</div>
                    </div>
                  
                   
                </div>
                <div className="right-section w-full lg:w-1/5 min-h-full flex items-center justify-center border border-amber-500 rounded-xl">

                    {/* Display your image here */}
                    <img className='w-full h-full object-cover' src={vertical_banner2} alt="vertical-banner" />
                </div>

            </div>
        </div>
    );
};

export default VisitPlaces;