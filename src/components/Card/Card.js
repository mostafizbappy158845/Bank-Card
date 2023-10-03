import React from 'react';

const Card = () => {
    return (
        <div className=' bg-[#eeeded] pt-4'>
            <div className="wrapper">
                <div className="card-grp flex items-center justify-center  font-medium ">
                    <button className='border-2 rounded-md p-4 bg-[#9EDDFF] hover:bg-[#6499E9]'>Debit Cards</button>
                    <button className='mx-4 border-2 rounded-md p-4  bg-[#9EDDFF] hover:bg-[#6499E9]'>Credit Cards</button>
                    <button className='border-2 rounded-md p-4  bg-[#9EDDFF] hover:bg-[#6499E9]'>ATM Cards</button>
                </div>
            </div>
        </div>
    );
};

export default Card;