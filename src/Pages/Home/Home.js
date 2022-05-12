import React from 'react';
import HomeBanner from './HomeBanner';
import OurCorValue from './OurCorValue';
import Navbar from './Shared/Navbar';

const Home = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <HomeBanner></HomeBanner>
            <OurCorValue></OurCorValue>
        </div>
    );
};

export default Home;