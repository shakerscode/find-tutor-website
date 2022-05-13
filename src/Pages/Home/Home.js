import React from 'react';
import HomeAbout from './HomeAbout';
import HomeBanner from './HomeBanner';
import OurCorValue from './OurCorValue';
import OurSubjects from './OurSubjects';
import OurTutors from './OurTutors';
import Navbar from './Shared/Navbar';

const Home = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <HomeBanner></HomeBanner>
            <OurCorValue></OurCorValue>
            <HomeAbout></HomeAbout>
            <OurSubjects></OurSubjects>
            <OurTutors></OurTutors>
        </div>
    );
};

export default Home;