import React from 'react';
import banner from '../../images/home-image-one.png'

const HomeBanner = () => {
    return (
        <div className="hero flex justify-center items-center min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-delay="70"
                    data-aos-duration="1200"
                    data-aos-easing="ease-in"
                    src={banner}
                    className="lg:max-w-lg max-w-xm rounded-lg md:ml-3"
                    alt='' />
                <div 
                    className='text-secondary px-4'>
                    <h1 
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1200"
                    data-aos-easing="ease-in"
                    className="lg:text-4xl text-3xl font-bold  uppercase">Find the best tutors!</h1>
                    <p 
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1400"
                    data-aos-easing="ease-in"
                    className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda <br /> excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button 
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="900"
                    data-aos-once="true"
                    data-aos-easing="ease-in"
                    className="btn btn-primary text-white bg-gradient-to-r from-purple-400 to-primary-800">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;