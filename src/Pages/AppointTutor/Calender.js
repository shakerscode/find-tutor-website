import React, { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calender = ({date, setDate}) => {
    // const [date, setDate] = useState(new Date());
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col-reverse lg:flex-row-reverse">
                <div class="text-center w-full lg:text-center text-secondary lg:px-10 lg:mx-10">
                    <h1 class="text-3xl font-bold text-center ">Get Your Date</h1>
                    <p class="py-6 px-12 mt-3 text-xl font-semibold text-center text-primary shadow w-full">Your Selected Date Is {format(date, 'PP')} </p>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 text-secondary mb-20">
                   <DayPicker
                   mode="single"
                   required
                   selected={date}
                   onSelect={setDate}
                   ></DayPicker>
                </div>
            </div>
        </div>
    );
};

export default Calender;