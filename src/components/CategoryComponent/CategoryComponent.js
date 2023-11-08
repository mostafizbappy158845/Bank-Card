import { useEffect, useState } from 'react';
import vertical_banner2 from '../../assets/images/vertical_banner.svg'
import TopBanner from '../TopBanner/TopBanner';
const CategoryComponent = ({ allInfos, selected, filterCards, cardSelected }) => {

  // --Start For sticky and scroll ---
  // const [isScrolled, setIsScrolled] = useState(false);
  // useEffect(() => {
  //     // Add a scroll event listener to track the scroll position
  //     const handleScroll = () => {
  //       setIsScrolled(window.scrollY > -530 );
  //     };
  
  //     window.addEventListener('scroll', handleScroll);
  
  //     return () => {
  //       // Clean up the event listener when the component unmounts
  //       window.removeEventListener('scroll', handleScroll);
  //     };
  //   }, []);

  const filteredInfos = allInfos.filter((singleInfo) => singleInfo.category === selected);
  const doubleFiltered = allInfos.filter((singleInfo) => singleInfo.category === selected && singleInfo.cardtype === cardSelected)
  const mainFiltered = cardSelected ? doubleFiltered : filteredInfos

  return (
    <>
      {/* <div id="section1" className={`px-4 bg-red-100 ${isScrolled? 'pt-0' : 'pt-48' } `}> */}
      <div id="section1" className='px-4 bg-red-100 '>
        <div className='mt-4 mx-4 flex flex-col md:flex-row justify-between'>
          <div >
            <p className=' texl-xl md:text-2xl lg:text-4xl font-mono md:font-semibold flex   mt-4 capitalize gap-4'><span className='text-rose-500 font-semibold'>{selected} </span></p>

          </div>
          {/* <div className='text-xl font-mono md:font-semibold border  bg-[#9EDDFF] hover:bg-[#6499E9] p-1 lg:p-2 rounded-md   '>Apply for card</div> */}

        </div>
        <hr className='m-4 w-32 h-1 bg-gray-500 ' />
        <div className='main-part flex flex-col md:flex-row '>
          <div className="left-seection  h-fit w-full md:w-3/4 lg:w-5/6 grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
            {/* Create a 2xn grid of information */}
            {/*  singleinfo.filter( singleinfo.category===selected) */}
            {/* allInfos.filter((singleInfo) => singleInfo.category === selected) #6499E9*/}
            {
              mainFiltered.length > 0 ? (
                mainFiltered
                  .map((singleInfo, i) => (
                    <div key={i} className="info-item bg-white py-8 flex flex-col lg:flex-row  border rounded-md pr-8 pl-2
                       shadow-lg transform hover:scale-105 duration-300 delay-150  transition  text-center lg:text-left">
                      <div className='md:w-2/6 flex justify-center items-center  text-lg  md:text-xl lg:text-2xl font-serif font-normal md:font-semibold   mr-2 md:mr-4 '>{singleInfo.name}
                      </div>

                      <div className='flex flex-col sm:flex-row md:w-4/6'>
                        <div className='font-medium  w-2/3'>Enjoy <span className='font-bold text-red-500 text-lg md:text-xl'>{singleInfo.discountdetail}</span><br /><span className=''>& Exciting Deals</span> <br /> with your<span className='font-semibold'> {singleInfo.bankshortname} {singleInfo.cardtype}</span> <p></p></div>
                        <div className='font-medium w-1/3  text-left'> <span className='text-red-500 font-semibold uppercase text-xl'>{singleInfo.bankshortname}</span> & <span className='text-blue-800 font-semibold uppercase text-xl'>{singleInfo.cardcategory}</span></div>
                        {/* <Link to={`/singleData/${singleInfo.id}`} className='p-2 border border-emerald-400'>Details</Link> */}
                      </div>
                    </div>


                  ))
              ) : (
                <p className='text-right font-semibold text-2xl text-black'>No {cardSelected} Available !!!</p>
              )
            }



          </div>
          <div className="right-section px-4 mt-4 md:mt-0   w-full md:w-1/4 lg:w-1/6 flex  justify-center ">

            {/* Display your image here */}
            <img className='w-full   object-contain' src={vertical_banner2} alt="vertical-banner" />
          </div>

        </div>

      </div>
      <TopBanner></TopBanner>
    </>
  );
};

export default CategoryComponent;