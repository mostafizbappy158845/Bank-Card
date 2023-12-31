import React from 'react';
import vertical_banner2 from '../../assets/images/vertical_banner.svg'
const BankComponent = ({ allInfos, selected, filterCards,cardSelected }) => {

  // ....//
  const filteredInfos = allInfos.filter((singleInfo) => singleInfo.bankfullname === selected);
  const doubleFiltered = allInfos.filter((singleInfo)=> singleInfo.bankfullname === selected && singleInfo.cardtype===cardSelected)
  const mainFiltered = cardSelected ? doubleFiltered: filteredInfos
  //....//
  return (
    <div className='bg-gray-100 py-4'>
      <div className=' mx-4 flex flex-row justify-between items-center'>
        <div>
          <p data-aos="flip-down" data-aos-duration="2000" className=' texl-xl md:text-2xl lg:text-4xl font-mono md:font-semibold flex    capitalize gap-4'><span className='text-rose-500'>{selected} </span></p>
          <hr data-aos="flip-left" data-aos-duration="2000" className='my-4 w-32 h-1 bg-gray-500 ' />
        </div>
        <div className='text-xl font-mono md:font-semibold p-2  bg-[#c5cbf6] hover:bg-[#dfe1f1] rounded-md'>Apply for card</div>

      </div>
      
      <div className='main-part flex flex-col  lg:flex-row '>
        <div className="left-seection h-fit w-full md:w-4/5 grid grid-cols-1 md:grid-cols-2  gap-4 px-4">
          {/* Create a 3x3 grid of information */}
          {/*  singleinfo.filter( singleinfo.category===selected) */}
          {/* allInfos.filter((singleInfo) => singleInfo.bankfullname === selected) */}
          {
            mainFiltered.length > 0 ? (
            mainFiltered.map((singleInfo, i) => (
              // bg-[#9EDDFF] hover:bg-[#6499E9]
              // <div key={i} className="info-item bg-white py-8 flex flex-col lg:flex-row  border border-solid rounded-md px-3
              // shadow-lg transform hover:scale-105 duration-300 delay-150  transition">
              //   <div className='text-lg md:text-xl lg:text-2xl font-serif font-semibold md:font-bold lg:tracking-wide  mr-2 md:mr-4 lg:mr-8 uppercase  text-center'>{singleInfo.name}</div>
              //   <div className='font-medium text-center lg:text-justify'>Enjoy <span className='font-bold text-red-500 text-lg md:text-2xl'>{singleInfo.discountdetail}</span> <br /><span className=''>& Exciting Deals</span> <br /> with your<span className=''> {singleInfo.bankshortname} {singleInfo.cardtype}</span></div>
              //   <div className='font-medium  lg:ml-8 text-center lg:text-end'> <span className='text-red-500 font-bold uppercase text-xl'>{singleInfo.bankshortname}</span> & <span className='text-blue-800 font-bold uppercase text-xl'>{singleInfo.cardcategory}</span></div>
              // </div>
              <div key={i} className="info-item md:h-fit bg-white py-8 flex flex-col lg:flex-row  border rounded-md 
                       shadow-lg transform hover:scale-105 duration-300 delay-150  transition  text-center lg:text-left pr-8 pl-2"
                       data-aos="zoom-in" data-aos-duration="2000"
                       >
                      <div className='md:w-2/6 flex  items-center  text-lg  md:text-xl lg:text-2xl font-serif font-normal md:font-semibold  mr-2 md:mr-4  '>{singleInfo.name}
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

          {/*  */}

        </div>
        <div className="right-section px-4 mt-4 lg:mt-0  md:w-1/4 w-1/2 lg:w-1/5 flex items-center justify-center"
        data-aos="zoom-in" data-aos-duration="2000"
        >

          {/* Display your image here */}
          <img className='w-full h-full object-cover' src={vertical_banner2} alt="vertical-banner" />
        </div>

      </div>
    </div>
  );
};

export default BankComponent;