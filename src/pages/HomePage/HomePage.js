import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Selections from '../../components/Selections/Selections';
import TopBanner from '../../components/TopBanner/TopBanner';
import Card from '../../components/Card/Card';
import BestDeal from '../../components/BestDeal/BestDeal';
import ImageBanner from '../../components/ImageBanner/ImageBanner';
import Review from '../../components/Review/Review';
import VisitPlaces from '../../components/VisitPlaces/VisitPlaces';

const HomePage = () => {
    return (
        
           <div>
            <Navbar></Navbar>
           <Selections></Selections>
           <ImageBanner></ImageBanner>
           <Card></Card>
           <TopBanner></TopBanner>
           <BestDeal></BestDeal>
           <Review></Review>
           <VisitPlaces></VisitPlaces>
           </div>
        
    );
};

export default HomePage;