import React, { useState } from 'react';
import AppointBanner from './AppointBanner';
import Calender from './Calender';
import SearchTutor from './SearchTutor';
import TutorsServices from './TutorsServices';
import 'react-day-picker/dist/style.css';

const AppointTutor = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div>
            <AppointBanner></AppointBanner>
            <div>
                <h1 className='text-3xl text-center font-bold text-primary mt-3'>Choose A Date To Start</h1>
                <Calender date={date} setDate={setDate}></Calender>
            </div>
            <SearchTutor></SearchTutor>
            <TutorsServices date={date}></TutorsServices>
        </div>
    );
};

export default AppointTutor;