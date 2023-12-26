import React, { useEffect, useState } from 'react'
import vertical_banner2 from '../../assets/images/vertical_banner.svg'

const NewCategory = ({ allInfos, selected, cardSelected,bankname,cardcategorySelected,typeofcardSelected }) => {

    const [list, setList] = useState(allInfos);
    const applyFilters = () => {
        let updatedList = allInfos;
    
        // category Filter
        if (selected) {
          updatedList = updatedList.filter(
            (item) => item.category === selected
          );
        }

        // bank Filter
    if (bankname) {
        updatedList = updatedList.filter(
          (item) => item.bankfullname === bankname
        );
      }
          // cardtype Filter
    if (cardSelected) {
        updatedList = updatedList.filter(
          (item) => item.cardtype === cardSelected
        );
      }
      // cardcategory Filter
    if (cardcategorySelected) {
        updatedList = updatedList.filter(
          (item) => item.cardcategory === cardcategorySelected
        );
      }
      //typeofcard Filter
      if(typeofcardSelected){
        updatedList = updatedList.filter(
          (item) => item.typeofcard === typeofcardSelected
        );
      }

        setList(updatedList);
    }
    useEffect(() => {
        applyFilters();
      }, [selected, cardSelected,bankname, cardcategorySelected,typeofcardSelected]);
    

  return (
    
    <>
      {/* <div id="section1" className={`px-4 bg-red-100 ${isScrolled? 'pt-0' : 'pt-48' } `}> */}
      <div id="section1" className='px-4 bg-gray-100 pb-4'>
        <div className='mt-4 mx-4 flex flex-col md:flex-row justify-between'>
          <div >
            <p data-aos="flip-down" data-aos-duration="2000" className='underline underline-offset-4 texl-xl md:text-2xl lg:text-4xl font-mono md:font-semibold flex   mt-4 mb-2 capitalize gap-4'><span className='text-rose-500 font-semibold'>{selected?selected: ""}</span><span> {bankname?bankname:""}</span></p>

          </div>
          {/* <div className='text-xl font-mono md:font-semibold border  bg-[#9EDDFF] hover:bg-[#6499E9] p-1 lg:p-2 rounded-md   '>Apply for card</div> */}

        </div>
        {/* <hr data-aos="flip-left" data-aos-duration="2000" className='m-4 w-32 h-1 bg-gray-500 ' /> */}
        {/* <div className='main-part flex flex-col md:flex-row'> */}
        <div className='main-part flex  flex-col md:flex-row '>
          <div className=" left-seection md:h-fit w-full md:w-3/4 lg:w-5/6 grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
            {/* Create a 2xn grid of information */}
            {
              // filteredData.length > 0 ?
              list.length ? (
                list
                  .map((singleInfo, i) => (
                    <div key={i} className="border-l-4 border border-l-black info-item md:h-fit bg-white py-8 flex flex-col lg:flex-row   rounded-md pr-8 pl-2
                       shadow-lg transform hover:scale-105 duration-300 delay-150  transition  text-center lg:text-left"
                       data-aos="zoom-in" data-aos-duration="2000"
                       >
                      <div className='md:w-2/6 flex  items-center  text-lg  md:text-xl lg:text-2xl font-serif font-normal md:font-semibold   mr-2 md:mr-4 '>{singleInfo.name}
                      </div>

                      <div className='flex flex-col sm:flex-row md:w-4/6'>
                        <div className='font-medium  w-2/3'>Enjoy <span className='font-bold text-red-500 text-lg md:text-xl'>{singleInfo.discountdetail}</span><br /><span className=''>& Exciting Deals</span> <br /> with your<span className='font-semibold'> {singleInfo.bankshortname} {singleInfo.cardtype}</span> <p>{singleInfo.typeofcard}</p></div>
                        <div className='font-medium w-1/3  text-left'> <span className='text-red-500 font-semibold uppercase text-xl'>{singleInfo.bankshortname}</span> & <span className='text-blue-800 font-semibold uppercase text-xl'>{singleInfo.cardcategory}</span></div>
                        {/* <Link to={`/singleData/${singleInfo.id}`} className='p-2 border border-emerald-400'>Details</Link> */}
                      </div>
                    </div>


                  ))
              ) : (
                <p className='text-right font-semibold text-2xl text-black' >Card Not Available !!!</p>
              )
            }



          </div>
          {/* items-start z-50 md:sticky md:top-[1020px] */}
          <div className="  right-section ml-4 mt-4 md:mt-0 w-full md:w-1/4 lg:w-1/6 self-start  md:sticky md:top-[260px]" data-aos="zoom-in" data-aos-duration="2000" >

            {/* Display your image here */}
            <img className='w-full ' src={vertical_banner2} alt="vertical-banner" />
          </div>

        </div>

      </div>
      {/* <TopBanner></TopBanner> */}
    </>

  )
        }

export default NewCategory