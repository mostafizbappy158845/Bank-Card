import React from 'react';
import vertical_banner2 from '../../assets/images/vertical_banner.svg'


const SearchComponent = ({ allInfos, searchInput, selected, filterCards, cardSelected }) => {

  // ....//
  //   const filteredInfos = allInfos.filter((singleInfo) => singleInfo.bankfullname === selected);
  //   const doubleFiltered = allInfos.filter((singleInfo)=> singleInfo.bankfullname === selected && singleInfo.cardtype===cardSelected)
  //   const mainFiltered = cardSelected ? doubleFiltered: filteredInfos
  // ||singleInfo.category.toLowerCase().includes(searchInput)
  //...//

  const filteredInfos = allInfos.filter((singleInfo) => singleInfo.name.toLowerCase().includes(searchInput.toLowerCase()) || singleInfo.location.toLowerCase().includes(searchInput.toLowerCase()));
  const doubleFiltered = allInfos.filter((singleInfo) => (singleInfo.name.toLowerCase().includes(searchInput.toLowerCase()) || singleInfo.location.toLowerCase().includes(searchInput.toLowerCase())) && singleInfo.cardtype === cardSelected);

  const mainFiltered = cardSelected ? doubleFiltered : filteredInfos

  return (
    <div className='bg-gray-100 py-4'>
      <div className='mt-0 mx-4 '>
        <p data-aos="flip-down" data-aos-duration="2000" className=' texl-xl md:text-2xl lg:text-4xl font-mono md:font-semibold flex   mt-0 capitalize gap-4'><span className='text-rose-500 font-semibold'>Search items</span></p>
      </div>
      <hr data-aos="flip-left" data-aos-duration="2000" className='m-4 w-32 h-1 bg-gray-500 ' />
      <div className='main-part flex flex-col md:flex-row '>
      {/* <div className='main-part grid grid-cols-1 lg:grid-cols-2 '> */}
        <div className="left-seection  h-fit w-full md:w-3/4 lg:w-5/6 grid grid-cols-1 md:grid-cols-2 gap-6 px-4">

          {
            mainFiltered.length > 0 ? (
              mainFiltered.map((singleInfo, i) => (
                // <Link to={`/singleData/${singleInfo.id}`} >
                <div key={i} className="info-item bg-white py-4  border rounded-md px-3 
                     shadow-lg transform hover:scale-105 duration-300 delay-150  transition overflow-hidden  text-center lg:text-left"
                     data-aos="zoom-in" data-aos-duration="2000">
                  {/* <div className='flex '> */}
                  <div className='mb-4 text-lg text-center  md:text-xl lg:text-2xl font-serif font-medium  mr-2 md:mr-4 lg:mr-8 uppercase'>{singleInfo.name} </div>
                  <div className=' flex justify-between'>
                    <div className='font-medium  text-left'>Enjoy <span className='font-bold text-red-500 text-lg md:text-2xl lg:text-left'>{singleInfo.discountdetail}</span><span className=''> & Exciting Deals</span> <br /> with your<span className='font-bold'> {singleInfo.bankshortname} {singleInfo.cardtype}  </span><span className='block my-2 '>{singleInfo.location}</span> </div>
                    <div className='font-medium text-left uppercase text-xl'> <span className='text-red-500'>{singleInfo.bankshortname}</span> <span className='text-blue-800 '>{singleInfo.cardcategory}</span></div>
                  </div>

                  {/* </div> */}

                </div>
                /* </Link> */

              ))
            ) : (
              <p className='text-right font-semibold text-2xl text-black'>No {cardSelected} available !!!</p>
            )
          }



        </div>
        <div className="right-section px-4 mt-4 md:mt-0   w-full  md:w-1/4 lg:w-1/6"
        data-aos="zoom-in" data-aos-duration="2000"
        >

          {/* Display your image here */}
          <img className='w-full ' src={vertical_banner2} alt="vertical-banner" />
        </div>

      </div>
    </div>
  );
};

export default SearchComponent;