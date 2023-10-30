
import React, { useRef, useState } from 'react';

import banner from '../../assets/images/credit_card_banner.jpg'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Header from '../../components/Navbar/Header';
import MainFooter from '../../components/Footer/MainFooter';

const SlidePage = () => {
    return (
        <div>
            <Swiper
                cssMode={true}
                navigation={true}
                // pagination={true}
                mousewheel={true}
                keyboard={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
             >
                <SwiperSlide> <div className="banner ">
                    <img className='max-h-[430px] w-full' src={banner} alt="" />
                </div></SwiperSlide>

                <SwiperSlide> <div className="banner p-4 md:p-8 lg:p-12">
                    <img className='max-h-[430px] w-full' src={banner} alt="" />
                </div></SwiperSlide>

                <SwiperSlide> <div className="banner p-4 md:p-8 lg:p-12">
                    <img className='max-h-[430px] w-full' src={banner} alt="" />
                </div></SwiperSlide>
                <SwiperSlide><div className="banner p-4 md:p-8 lg:p-12">
                    <img className='max-h-[430px] w-full' src={banner} alt="" />
                </div></SwiperSlide>
            
                <SwiperSlide><div className="banner p-4 md:p-8 lg:p-12">
                    <img className='max-h-[430px] w-full' src={banner} alt="" />
                </div></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SlidePage;