import React from 'react';
import HomeBanner from './HomeBanner';
import Navbar from './Shared/Navbar';

const Home = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <HomeBanner></HomeBanner>
        </div>
    );
};

export default Home;