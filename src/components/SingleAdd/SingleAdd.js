import React, { useEffect, useState } from 'react';

const SingleAdd = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch(``)
            //https://restcountries.com/v2/all?fields=name
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                // setItems(data);
            });
    }, []);

    return (
        // <div>
        //      mainFiltered.map((singleInfo, i) => (
        //     <div key={i} className="info-item py-8 flex flex-col lg:flex-row  border rounded-md px-3
        //         shadow-lg transform hover:scale-105 duration-300 delay-150  transition overflow-hidden  text-center lg:text-left">
        //         <div className='text-lg  md:text-xl lg:text-2xl font-serif font-medium  lg:tracking-wide  mr-2 md:mr-4 lg:mr-8 uppercase'>{singleInfo.name} <br />{singleInfo.category}</div>
        //         <div className='font-medium  '>Enjoy <span className='font-bold text-red-500 text-lg md:text-2xl'>{singleInfo.discountdetail}</span><br /><span className=''>& Exciting Deals</span> <br /> with your<span className='font-bold'> {singleInfo.bankshortname} {singleInfo.cardtype}</span></div>
        //         <div className='font-medium lg:ml-8 text-left uppercase text-xl'> <span className='text-red-500'>{singleInfo.bankshortname}</span> <span className='text-blue-800 '>{singleInfo.cardcategory}</span>
        //             {/* <Link to={`/singleData/${singleInfo.id}`} className='p-2 border border-emerald-400'>Details</Link> */}</div>
        //         </div>

        //     ))
        // </div>
        <div className="info-item flex flex-col lg:flex-row justify-around  border border-solid border-amber-500 rounded-md px-3 py-24
                      bg-red-100">
            <div className='text-xl md:text-2xl lg:text-4xl font-serif font-semibold md:font-bold lg:tracking-wide  lg:pt-4 mr-2 md:mr-4 lg:mr-8 uppercase'>pearl <br /> Hotel</div>
            <div className='font-medium pt-4'>Enjoy <span className='font-bold'>Discount</span> & <br /> <span className='font-bold'>Exciting Deals</span> <br /><span className=''>with your MTB Credit Card</span> <p></p> </div>
            <div className='font-medium  lg:ml-8 pt-4'> <span className='text-red-500 font-bold uppercase text-xl'>MTB</span> & <span className='text-blue-800 font-bold uppercase text-xl'>visa</span> only</div>
        </div>
    );
};

export default SingleAdd;