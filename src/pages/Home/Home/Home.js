import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Products from '../Products/Products/Products';
import ShowReviews from '../ShowReviews/ShowReviews/ShowReviews';

import UpcomingCars from '../UpcomingCar/UpcomingCars/UpcomingCars';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <ShowReviews></ShowReviews>
            <UpcomingCars></UpcomingCars>
            <Footer></Footer>
        </div>
    );
};

export default Home;