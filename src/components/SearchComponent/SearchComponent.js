
import React from 'react';
import vertical_banner2 from '../../assets/images/vertical_banner.svg'
import { Link } from 'react-router-dom';
const SearchComponent = ({ allInfos, searchInput, selected, filterCards, cardSelected }) => {

  // ....//
  //   const filteredInfos = allInfos.filter((singleInfo) => singleInfo.bankfullname === selected);
  //   const doubleFiltered = allInfos.filter((singleInfo)=> singleInfo.bankfullname === selected && singleInfo.cardtype===cardSelected)
  //   const mainFiltered = cardSelected ? doubleFiltered: filteredInfos
  // ||singleInfo.category.toLowerCase().includes(searchInput)
  const filteredInfos = allInfos.filter((singleInfo) => singleInfo.name.toLowerCase().includes(searchInput));
  const doubleFiltered = allInfos.filter((singleInfo) => singleInfo.name.toLowerCase().includes(searchInput) && singleInfo.cardtype === cardSelected);
  const mainFiltered = cardSelected ? doubleFiltered : filteredInfos
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
            mainFiltered.length > 0 ? (
              mainFiltered.map((singleInfo, i) => (
                // <Link to={`/singleData/${singleInfo.id}`} >
                <div key={i} className="info-item py-8 flex flex-col lg:flex-row  border rounded-md px-3
                     shadow-lg transform hover:scale-105 duration-300 delay-150  transition overflow-hidden  text-center lg:text-left">
                  {/* <div className='flex '> */}
                    <div className='text-lg w-2/5  md:text-xl lg:text-2xl font-serif font-medium  lg:tracking-wide  mr-2 md:mr-4 lg:mr-8 uppercase'>{singleInfo.name} </div>
                    <div className=' flex w-3/5'>
                      <div className='font-medium  '>Enjoy <span className='font-bold text-red-500 text-lg md:text-2xl lg:text-left'>{singleInfo.discountdetail}</span><span className=''> & Exciting Deals</span> <br /> with your<span className='font-bold'> {singleInfo.bankshortname} {singleInfo.cardtype}</span></div>
                      <div className='font-medium lg:ml-8 text-left uppercase text-xl'> <span className='text-red-500'>{singleInfo.bankshortname}</span> <span className='text-blue-800 '>{singleInfo.cardcategory}</span></div>
                    </div>

                  {/* </div> */}

                </div>
                /* </Link> */

              ))
            ) : (
              <p className='text-right font-semibold text-2xl text-black'>No cards available !!!</p>
            )
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