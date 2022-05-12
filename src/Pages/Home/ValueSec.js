import React from 'react';
import Care from '../../images/Icons/care-icon.png'
import Graduate from '../../images/Icons/graduate.png'
import Learning from '../../images/Icons/study.png'
import Support from '../../images/Icons/technical-support.png'

const ValueSec = () => {
    return (
        <div className='md:flex lg:flex justify-center items-center lg:w-5/6 md:w-4/6 w-20 lg:mx-auto md:mx-auto lg:my-4'>
            <div class="card w-96 bg-neutral text-neutral-content lg:w-58 w-80 lg:m-3 mx-10 my-6 shadow-md cursor-pointer hover:shadow-2xl ">
                <div class="card-body items-center text-center text-secondary">
                    <img className='w-18 bg-purple-50 p-4 rounded-full' src={Learning} alt="" />
                    <h2 class="card-title">Learning & Fun</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, esse?.</p>
                </div>
            </div>
            <div class="card w-96 bg-neutral text-neutral-content lg:w-58 w-80 lg:m-3 mx-10 my-6 shadow-2xl cursor-pointer border-t-4 border-t-primary hover:shadow-2xl">
                <div class="card-body items-center text-center text-secondary">
                    <img className='w-18 bg-indigo-50 p-3 rounded-full' src={Graduate} alt="" />
                    <h2 class="card-title">Great Teacher</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, esse?.</p>
                </div>
            </div>
            <div class="card w-96 bg-neutral text-neutral-content lg:w-58 w-80 lg:m-3 mx-10 my-6 shadow-md cursor-pointer hover:shadow-2xl">
                <div class="card-body items-center text-center text-secondary">
                    <img className='w-18 bg-green-50 p-3 rounded-full' src={Care} alt="" />
                    <h2 class="card-title">High Quality Care</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, esse?.</p>
                </div>
            </div>
            <div class="card w-96 bg-neutral text-neutral-content lg:w-58 w-80 lg:m-3 mx-10 my-6 shadow-md cursor-pointer hover:shadow-2xl">
                <div class="card-body items-center text-center text-secondary">
                    <img className='w-18 bg-blue-50 p-3 rounded-full' src={Support} alt="" />
                    <h2 class="card-title">Fast Support</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, esse?.</p>
                </div>
            </div>
        </div>
    );
};

export default ValueSec;