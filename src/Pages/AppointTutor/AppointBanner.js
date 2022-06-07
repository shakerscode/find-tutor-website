import React, { useState } from 'react';
import appointBanner from '../../images/appoint-banner.png'


const AppointBanner = () => {
    return (
        <div  className="hero min-h-screen">
            <div  className="hero-content flex-col flex-col-reverse lg:flex-row-reverse">
                <img src={appointBanner}  className="lg:max-w-sm max-w-xs rounded-lg shadow-2xl " alt='' />
                <div   className='text-secondary px-12 mt-8'>
                    <h1  className="text-3xl  font-bold">Appoint A Best Tutor For You!</h1>
                    <p  className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda <br /> excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button  className="btn btn-primary text-white bg-gradient-to-r from-purple-400 to-primary-800">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default AppointBanner;