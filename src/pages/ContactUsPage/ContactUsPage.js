import React from 'react';
import Header from '../../components/Navbar/Header';
import MainFooter from '../../components/Footer/MainFooter';

const ContactUsPage = () => {
    return (
        <div>
            <Header></Header>
            <div>
            <h1 className='text-4xl my-32 text-center'>This is ContactUs page</h1>
            </div>
            <MainFooter></MainFooter>
        </div>
    );
};

export default ContactUsPage;