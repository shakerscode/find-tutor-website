import React from 'react';

const OurSubject = ({ img, name }) => {

    return (
        <div
            data-aos="flip-left"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1200"
            data-aos-easing="ease-in"
            className="card w-64 mx-auto shadow p-0 bg-accent cursor-pointer hover:bg-white hover:border-2 hover:border-purple-100">
            <div className="card-body">
                <div className='flex justify-between items-center'>
                    <img className='w-16 p-2 bg-white hover:bg-accent border-2 border-accent rounded-full' src={img} alt="" />
                    <h2 className="text-xl text-black">{name}</h2>
                </div>
            </div>
        </div>
    );
};

export default OurSubject;