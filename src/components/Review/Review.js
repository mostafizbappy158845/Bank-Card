import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import avatar from "../../assets/images/avatar.png";
const Review = () => {
  return (
    <section id="rvw" className="text-center mt-8 mx-4">
      <p className="text-primary text-2xl text-rose-600 font-mono">Happy Clients</p>
      <h1 className="md:text-4xl text-2xl mt-1 font-semibold font-mono">
        Client's Say About Us
      </h1>
      <div className="my-6">
        <Swiper
          // loop={true}
          // grabCursor={true}
          // spaceBetween={30}
          // centeredSlides={true}
          slidesPerView={1}
        spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          className="mySwiper pt-20 px-4 py-20 "
        >
          <SwiperSlide>
            <div
              className="flex flex-col justify-center shadow-2xl rounded-lg
             p-8 mb-12 "
            >
              <img src={avatar} alt="avatar" className="w-20 mx-auto" />
              <h3 className="font-semibold">Omar Gouse</h3>
              <p className="text-rose-600 text-xs">Happy Client</p>
              <p className="text-gray-600 text-xs leading-normal my-2">
                “Everyone working in the office is very knowledgeable about all
                types of dental work and options for your individual needs.”
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="flex flex-col justify-center shadow-2xl rounded-lg
             p-8"
            >
              <img src={avatar} alt="avatar" className="w-20 mx-auto" />
              <h3 className="font-semibold">Omar Gouse</h3>
              <p className="text-rose-600 text-xs">Happy Client</p>
              <p className="text-gray-600 text-xs leading-normal my-2">
                “Everyone working in the office is very knowledgeable about all
                types of dental work and options for your individual needs.”
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          
            <div
              className="flex flex-col justify-center shadow-2xl rounded-lg
             p-8"
            >
              <img src={avatar} alt="avatar" className="w-20 mx-auto" />
              <h3 className="font-semibold">Omar Gouse</h3>
              <p className="text-rose-600 text-xs">Happy Client</p>
              <p className="text-gray-600 text-xs leading-normal my-2">
                “Everyone working in the office is very knowledgeable about all
                types of dental work and options for your individual needs.”
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="flex flex-col justify-center shadow-2xl rounded-lg
             p-8"
            >
              <img src={avatar} alt="avatar" className="w-20 mx-auto" />
              <h3 className="font-semibold">Omar Gouse</h3>
              <p className="text-rose-600 text-xs">Happy Client</p>
              <p className="text-gray-600 text-xs leading-normal my-2">
                “Everyone working in the office is very knowledgeable about all
                types of dental work and options for your individual needs.”
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="flex flex-col justify-center shadow-2xl rounded-lg
             p-8"
            >
              <img src={avatar} alt="avatar" className="w-20 mx-auto" />
              <h3 className="font-semibold">Omar Gouse</h3>
              <p className="text-rose-600 text-xs">Happy Client</p>
              <p className="text-gray-600 text-xs leading-normal my-2">
                “Everyone working in the office is very knowledgeable about all
                types of dental work and options for your individual needs.”
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center shadow-2xl rounded-lg p-8">
              <img src={avatar} alt="avatar" className="w-20 mx-auto" />
              <h3 className="font-semibold">Omar Gouse</h3>
              <p className="text-rose-600 text-xs">Happy Client</p>
              <p className="text-gray-600 text-xs leading-normal my-2">
                “Everyone working in the office is very knowledgeable about all
                types of dental work and options for your individual needs.”
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center shadow-2xl rounded-lg p-8">
              <img src={avatar} alt="avatar" className="w-20 mx-auto" />
              <h3 className="font-semibold">Omar Gouse</h3>
              <p className="text-rose-600 text-xs">Happy Client</p>
              <p className="text-gray-600 text-xs leading-normal my-2">
                “Everyone working in the office is very knowledgeable about all
                types of dental work and options for your individual needs.”
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Review;