import React from 'react';
import SingleAdd from '../../components/SingleAdd/SingleAdd';
import Header from '../../components/Navbar/Header';
import MainFooter from '../../components/Footer/MainFooter';

const SingleAddPage = () => {
    return (
        <div>
            {/* <Header></Header> */}
            <div className='m-28'>
                <SingleAdd></SingleAdd>
            </div>
            {/* <MainFooter></MainFooter> */}
        </div>
    );
};

export default SingleAddPage;