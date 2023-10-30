import React from 'react';
import Selections from '../../components/Selections/Selections';
// import Card from '../../components/Card/Card';
import BestDeal from '../../components/BestDeal/BestDeal';
import ImageBanner from '../../components/ImageBanner/ImageBanner';
import Review from '../../components/Review/Review';
import VisitPlaces from '../../components/VisitPlaces/VisitPlaces';
// import Footer from '../../components/Footer/Footer';
import MainFooter from '../../components/Footer/MainFooter';
import Header from '../../components/Navbar/Header';
import SlidePage from '../SlidePage/SlidePage';

const HomePage = () => {
    return (
        
           <div>
           <Header></Header>
           {/* <ImageBanner></ImageBanner> */}
           <SlidePage></SlidePage>
           <Selections></Selections>
           <BestDeal></BestDeal>
           <Review></Review>
           <VisitPlaces></VisitPlaces>
           <MainFooter></MainFooter>
           </div>
        
    );
};

export default HomePage;