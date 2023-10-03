import React from 'react';

const Card = () => {
    return (
        <div className=' bg-[#eeeded] pt-4'>
            <div className="wrapper">
                <div className="card-grp flex items-center justify-center text-white font-medium ">
                    <button className='border-2 rounded-md p-4 bg-orange-400 hover:bg-orange-500'>Debit Cards</button>
                    <button className='mx-4 border-2 rounded-md p-4 bg-orange-400 hover:bg-orange-500'>Credit Cards</button>
                    <button className='border-2 rounded-md p-4 bg-orange-400 hover:bg-orange-500'>ATM Cards</button>
                </div>
            </div>
        </div>
    );
};

export default Card;