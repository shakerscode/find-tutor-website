import React from 'react';
import banner from '../../images/home-image-one.png'

const HomeBanner = () => {
    return (
        <div class="hero flex justify-center items-center min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} class="lg:max-w-lg max-w-xm rounded-lg ml-3" alt=''/>
                <div className='text-secondary px-4'>
                    <h1 class="lg:text-4xl text-3xl font-bold  uppercase">Find the best tutors!</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda <br /> excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary text-white bg-gradient-to-r from-purple-400 to-primary-700">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;