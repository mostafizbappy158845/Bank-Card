
import React from 'react';

import banner from '../../assets/images/credit_card_banner.jpg'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Header from '../../components/Navbar/Header';
import MainFooter from '../../components/Footer/MainFooter';

const SlidePage = () => {
    return (
        <>
            <Swiper
                // cssMode={true}
                // navigation={true}
                // pagination={true}
                // mousewheel={true}
                // keyboard={true}
                // modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                // className="mySwiper "
                spaceBetween={30}
                
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper bg-slate-200"

                

            >
                <SwiperSlide> 
                    <div className="banner p-4 md:px-8 lg:px-12 md:py-6 lg:py-10" data-aos="zoom-in" data-aos-duration="2000">
                        <img className='max-h-[430px] w-full ' src={banner} alt="" />
                        <h2 className="slide-title absolute top-1/3 left-1/2 text-md md:text-4xl font-bold text-[#0C356A] ">Card Rewards Await You</h2>
                        <h3 className="slide-text absolute top-1/2 left-1/2 text-sm md:text-lg text-white font-thin text-left">Earn exciting rewards and benefits with our credit and debit card offerings.Earn exciting<br /> rewards and benefits with our credit and debit card offerings.</h3>
                    </div>
                </SwiperSlide>

                <SwiperSlide> 
                    <div className="banner p-4 md:px-8 lg:px-12 md:py-6 lg:py-10">
                        <img className='max-h-[430px] w-full' src={banner} alt="" />
                        <h2 className="slide-title absolute top-1/3 left-1/2 text-4xl font-bold text-[#0C356A]">Your Financial Journey Starts Here</h2>
                        <h3 className="slide-text absolute top-1/2 left-1/2 text-lg font-thin text-white text-left">Begin your path to financial success with our trusted bank and <br /> card services.</h3>
                    </div>
                </SwiperSlide>

                <SwiperSlide> 
                    <div className="banner p-4 md:px-8 lg:px-12 md:py-6 lg:py-10">
                        <img className='max-h-[430px] w-full' src={banner} alt="" />
                        <h2 className="slide-title absolute top-1/3 left-1/2 text-4xl font-bold text-[#0C356A]">Savings, Investments, and More</h2>
                        <h3 className="slide-text absolute top-1/2 left-1/2 text-lg text-white font-thin text-left">Explore a wide range of financial services, from savings accounts to investment <br /> opportunities.</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="banner p-4 md:px-8 lg:px-12 md:py-6 lg:py-10">
                        <img className='max-h-[430px] w-full' src={banner} alt="" />
                        <h2 className="slide-title absolute top-1/3 left-1/2 text-4xl font-bold text-[#0C356A]">Safe and Secure Card Transactions</h2>
                        <h3 className="slide-text absolute top-1/2 left-1/2 text-lg text-white font-thin text-left">Protecting your finances with state-of-the-art security for all your <br /> card transactions.</h3>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="banner p-4 md:px-8 lg:px-12 md:py-6 lg:py-10">
                        <img className='max-h-[430px] w-full' src={banner} alt="" />
                        <h2 className="slide-title absolute top-1/3 left-1/2 text-4xl font-bold text-[#0C356A]">Banking That Puts You First</h2>
                        <h3 className="slide-text absolute top-1/2 left-1/2 text-lg text-white font-thin text-left">Experience customer-centric banking with personalized solutions for your <br /> unique needs.</h3>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default SlidePage;