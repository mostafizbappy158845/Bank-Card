import React from 'react';
import vertical_banner2 from '../../assets/images/vertical_banner.svg'
const BankComponent = ({ allInfos, selected, filterCards }) => {
  return (
    <div>
      <div className='mt-14 mx-4 flex flex-col md:flex-row justify-between'>
        <div>
          <p className=' texl-xl md:text-2xl lg:text-4xl font-mono md:font-semibold flex   mt-4 capitalize gap-4'><span className='text-rose-500'>{selected} </span></p>

        </div>
        <div className='text-xl font-mono md:font-semibold border  bg-[#9EDDFF] hover:bg-[#6499E9] p-1 lg:p-2 rounded-md   '>Apply for card</div>

      </div>
      <hr className='m-4 w-32 h-1 bg-gray-500 ' />
      <div className='main-part flex flex-col lg:flex-row '>
        <div className="left-seection w-4/5 grid grid-cols-1 h-52 md:grid-cols-2 gap-4 px-4">
          {/* Create a 3x3 grid of information */}
          {/*  singleinfo.filter( singleinfo.category===selected) */}
          {allInfos.filter((singleInfo) => singleInfo.bankfullname === selected)
            .map((singleInfo, i) => (

              <div key={i} className="info-item py-8 flex flex-col lg:flex-row  border border-solid border-amber-500 rounded-md px-3
              bg-[#9EDDFF]">
                <div className='text-lg md:text-xl lg:text-2xl font-serif font-semibold md:font-bold lg:tracking-wide  mr-2 md:mr-4 lg:mr-8 uppercase'>{singleInfo.bankshortname} <br />OFFER!!</div>
                <div className='font-medium  text-justify'>Enjoy <span className='font-bold text-red-500 text-lg'>{singleInfo.discountdetail}</span> &<br /><span className=''>Exciting Deals</span> <br /> with your<span className=''> {singleInfo.bankshortname} {singleInfo.cardtype}</span> <p></p></div>
                <div className='font-medium  lg:ml-8 '> <span className='text-red-500 font-bold uppercase text-xl'>{singleInfo.bankshortname}</span> & <span className='text-blue-800 font-bold uppercase text-xl'>{singleInfo.cardcategory}</span></div>
              </div>


            ))}

          {/*  */}

        </div>
        <div className="right-section min-h-[500px] w-full lg:w-1/5 flex items-center justify-center border border-amber-500 rounded-xl">

          {/* Display your image here */}
          <img className='w-full h-full object-cover' src={vertical_banner2} alt="vertical-banner" />
        </div>

      </div>
    </div>
  );
};

export default BankComponent;