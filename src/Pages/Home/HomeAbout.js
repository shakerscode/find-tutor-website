import React from 'react';
import teachers from '../../images/teacher-collection.png'

const HomeAbout = () => {
    return (
        <div className=''>
            <h1 className='text-center text-3xl lg:text-4xl text-secondary font-bold p-4'>About Us</h1>
            <div className="hero w-5/6 mx-auto">
                 
                <div className="hero-content flex-col lg:flex-row ">
                    <img
                        data-aos="zoom-in-up"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1300"
                        data-aos-easing="ease-in-out"
                        src={teachers}
                        className="md:max-w-lg rounded-lg shadow-xl" alt='' />
                    <div data-aos="zoom-in"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1300"
                        data-aos-easing="ease-in-out"
                        className='md:p-6 mt-3 text-center md:text-left text-secondary md:ml-6'>
                        <h1 className="md:text-3xl text-2xl font-bold uppercase">Know about us!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary text-white bg-gradient-to-r from-purple-400 to-primary-700">Explore More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;