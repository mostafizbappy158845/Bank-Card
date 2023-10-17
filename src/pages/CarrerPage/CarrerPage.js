import React from 'react';
import Header from '../../components/Navbar/Header';
import MainFooter from '../../components/Footer/MainFooter';
import ImageBanner from '../../components/ImageBanner/ImageBanner';

const CarrerPage = () => {
    return (
        <div>
             <Header></Header>
            <div>
            <h1 className='text-4xl my-32 text-center'>This is Carrer page</h1>
            </div>
            <ImageBanner></ImageBanner>
            <MainFooter></MainFooter>
        </div>
    );
};

export default CarrerPage;