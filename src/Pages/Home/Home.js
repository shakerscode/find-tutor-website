import React from 'react';
import HomeAbout from './HomeAbout';
import HomeBanner from './HomeBanner';
import OurCorValue from './OurCorValue';
import OurSubjects from './OurSubjects';
import OurTutors from './OurTutors';

const Home = () => {
    return (
        <div   className=''>
            
            <HomeBanner></HomeBanner>
            <OurCorValue></OurCorValue>
            <HomeAbout></HomeAbout>
            <OurSubjects></OurSubjects>
            <OurTutors></OurTutors>
        </div>
    );
};

export default Home;