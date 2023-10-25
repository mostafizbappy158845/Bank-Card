
import React from 'react';
import vertical_banner2 from '../../assets/images/vertical_banner.svg'
const SearchComponent = ({ allInfos,searchInput, selected, filterCards,cardSelected }) => {

  // ....//
//   const filteredInfos = allInfos.filter((singleInfo) => singleInfo.bankfullname === selected);
//   const doubleFiltered = allInfos.filter((singleInfo)=> singleInfo.bankfullname === selected && singleInfo.cardtype===cardSelected)
//   const mainFiltered = cardSelected ? doubleFiltered: filteredInfos
const mainFiltered = allInfos.filter((singleInfo) => singleInfo.location.toLowerCase().includes(searchInput)||
singleInfo.category.toLowerCase().includes(searchInput)
);
  //....//
  return (
    <div>
    <div className='mt-14 mx-4 flex flex-col md:flex-row justify-between'>
      <div>
        <p className=' texl-xl md:text-2xl lg:text-4xl font-mono md:font-semibold flex   mt-4 capitalize gap-4'><span className='text-rose-500 font-semibold'>Search items</span></p>

      </div>
      

    </div>
    <hr className='m-4 w-32 h-1 bg-gray-500 ' />
    <div className='main-part flex flex-col md:flex-row '>
      <div className="left-seection h-fit w-full md:w-2/3 lg:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        
        {
          mainFiltered
            .map((singleInfo, i) => (
              <div key={i} className="info-item py-8 flex flex-col lg:flex-row  border rounded-md px-3
              shadow-lg transform hover:scale-105 duration-300 delay-150  transition  text-center lg:text-left">
                <div className='text-lg  md:text-xl lg:text-2xl font-serif font-medium  lg:tracking-wide  mr-2 md:mr-4 lg:mr-8 uppercase'>{singleInfo.name} <br />{singleInfo.location}</div>
                <div className='font-medium  '>Enjoy <span className='font-bold text-red-500 text-lg md:text-2xl'>{singleInfo.discountdetail}</span><br /><span className=''>& Exciting Deals</span> <br /> with your<span className='font-bold'> {singleInfo.bankshortname} {singleInfo.cardtype}</span></div>
                <div className='font-medium lg:ml-8 text-right uppercase text-xl'> <span className='text-red-500'>{singleInfo.bankshortname}</span> <span className='text-blue-800 '>{singleInfo.cardcategory}</span></div>
              </div>


            ))
        }

        

      </div>
      <div className="right-section px-4 mt-4 md:mt-0   w-full md:w-1/3 lg:w-1/4 flex  justify-center ">

        {/* Display your image here */}
        <img className='w-full   object-contain' src={vertical_banner2} alt="vertical-banner" />
      </div>

    </div>
  </div>
  );
};

export default SearchComponent;