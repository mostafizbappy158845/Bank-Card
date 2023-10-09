import React from 'react';

const Card = ({allCards}) => {
    const uniqueCards = [...new Set(allCards.map(item => item.cardtype))];
    return (
        <div className=' bg-[#eeeded] pt-4'>
            <div className="wrapper">
                <div className="card-grp flex items-center justify-center  font-medium ">
                    {uniqueCards.map( (card,i) =>(
                             <button key={i} 
                             className='border-2  rounded-md p-4 bg-[#9EDDFF] hover:bg-[#6499E9]'>{card}</button>
                             ))}
                   
                    {/* <button className='mx-4 border-2 rounded-md p-4  bg-[#9EDDFF] hover:bg-[#6499E9]'>Credit Cards</button>
                    <button className='border-2 rounded-md p-4  bg-[#9EDDFF] hover:bg-[#6499E9]'>ATM Cards</button> */}
                </div>
            </div>
        </div>
    );
};

export default Card;