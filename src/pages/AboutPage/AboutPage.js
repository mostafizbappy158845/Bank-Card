import React from 'react';
import Header from '../../components/Navbar/Header';
import MainFooter from '../../components/Footer/MainFooter';

const AboutPage = () => {
    return (
        <div>
            <Header></Header>
            <h1 className='text-4xl my-8 text-center'>This is about page</h1>
            <MainFooter></MainFooter>
        </div>
    );
};

export default AboutPage;