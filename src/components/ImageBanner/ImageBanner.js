import React from 'react';
import banner from '../../assets/images/credit_card_banner.jpg'

const ImageBanner = () => {
    return (
        <div>
            <div className="banner p-4 md:p-8 lg:p-12">
                <img className='max-h-[430px] w-full object-fit' src={banner} alt="" />
            </div>
        </div>
    );
};

export default ImageBanner;