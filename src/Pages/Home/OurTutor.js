import React from 'react';
import education from '../../images/teacher icons/certificate.png';
import uni from '../../images/teacher icons/school.png';
import Subject from '../../images/teacher icons/books.png';
import sealery from '../../images/teacher icons/hourly-rate.png';
import star from '../../images/teacher icons/stars.png';
import TeachersInfo from './TeachersInfo';

const OurTutor = ({ teacher }) => {
    const { name, qualification, university, topper, subject, hourlyRate, rating, desc, img } = teacher;
    return (
        <div class="card md:w-96 shadow-xl">
            <figure class="px-10 pt-10">
                <div class="avatar online">
                    <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img} alt="" />
                    </div>
                </div>
            </figure>
            <div class="card-body items-center text-center text-secondary">
                <h2 class="text-xl font-bold">{name} <sup class="badge badge-primary text-white text-xs">{topper}</sup></h2>
                <p>{desc}</p>
                <div class="card-actions justify-between items-center ml-3">
                    <div className='mt-1 p-2 text-center'>
                        <div className='flex items-center mt-2' >
                            <div className=''>
                                <img className='w-6' src={education} alt="" />
                            </div>
                            <div className='ml-3'>
                                <h5>{qualification}</h5>
                            </div>
                        </div>
                        <div>
                            <div className='flex items-center mt-2'>
                                <div className=''>
                                    <img className='w-6' src={uni} alt="" />
                                </div>
                                <div className='ml-3'>
                                    <h5>{university}</h5>
                                </div>
                            </div>
                            <div className='flex items-center mt-2'>
                                <div className=''>
                                    <img className='w-6' src={Subject} alt="" />
                                </div>
                                <div className='ml-3'>
                                    <h5>{subject}</h5>
                                </div>
                            </div>
                            <div className='flex items-center mt-2'>
                                <div className=''>
                                    <img className='w-6' src={sealery} alt="" />
                                </div>
                                <div className='ml-3'>
                                    <h5>{hourlyRate} <sup>$</sup> hr</h5>
                                </div>
                            </div>
                            <div className='flex items-center mt-2'>
                                <div className=''>
                                    <img className='w-6' src={star} alt="" />
                                </div>
                                <div className='ml-3'>
                                    <h5>{rating}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-actions mt-2">
                    <button class="btn btn-primary text-white hover:bg-white hover:text-secondary">Details</button>
                    <button class="btn btn-outline btn-secondary ">Appoint</button>
                </div>
            </div>
        </div>
    );
};

export default OurTutor;