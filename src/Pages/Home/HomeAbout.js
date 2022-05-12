import React from 'react';
import teachers from '../../images/teacher-collection.png'

const HomeAbout = () => {
    return (
        <div class="hero min-h-screen w-5/6 mx-auto">
            <div class="hero-content flex-col lg:flex-row">
                <img src={teachers} class="md:max-w-lg rounded-lg shadow-xl" alt='' />
                <div className='md:p-6 mt-6 text-center md:text-left text-secondary md:ml-6'>
                    <h1 class="md:text-3xl text-2xl font-bold uppercase">Know about us!</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary text-white bg-gradient-to-r from-purple-400 to-primary-700">Explore More</button>
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;