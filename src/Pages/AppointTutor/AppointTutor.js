import React from 'react';
import AppointBanner from './AppointBanner';
import Calender from './Calender';

const AppointTutor = () => {
    return (
        <div>
            <AppointBanner></AppointBanner>
            <div>
                <h1 className='text-3xl text-center font-bold text-primary mt-3'>Choose A Date To Start</h1>
                <Calender></Calender>
            </div>
        </div>
    );
};

export default AppointTutor;