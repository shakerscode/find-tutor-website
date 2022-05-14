import React from 'react';
import education from '../../images/teacher icons/certificate.png';
import uni from '../../images/teacher icons/school.png';
import Subject from '../../images/teacher icons/books.png';
import sealery from '../../images/teacher icons/hourly-rate.png';
import star from '../../images/teacher icons/stars.png';
import TeachersInfo from './TeachersInfo';
import TeacherRating from './TeacherRating';
import { useNavigate } from 'react-router-dom';

const OurTutor = ({ teacher }) => {
    const navigate = useNavigate();
    const { name, qualification, university, topper, subject, hourlyRate, rating, desc, img } = teacher;
    return (
        <div className="card max-w-sm shadow-xl">
            <figure className="px-10 pt-10">
                <div className="avatar online">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img} alt="" />
                    </div>
                </div>
            </figure>
            <div className="card-body items-center text-center text-secondary">
                <h2 className="text-xl font-bold">{name} <sup className="badge text-primary  text-xs p-1">{topper}</sup></h2>
                <p>{desc}</p>
                <div className="card-actions justify-between items-center ml-3">
                    <div className='mt-1 p-2 text-center'>
                        <TeachersInfo tittle={qualification} img={education}></TeachersInfo>
                        <TeachersInfo tittle={university} img={uni}></TeachersInfo>
                        <TeachersInfo tittle={subject} img={Subject}></TeachersInfo>
                        <TeachersInfo tittle={`${hourlyRate} $ hr`} img={sealery}></TeachersInfo>
                        <TeacherRating tittle={rating} img={star}></TeacherRating>
                    </div>
                </div>
                <div className="card-actions mt-2">
                    <button className="btn btn-primary text-white bg-gradient-to-r from-purple-400 to-primary-800">Details</button>
                    <button className="btn btn-outline btn-secondary " onClick={()=> navigate('/appoint-tutor')}>Appoint</button>
                </div>
            </div>
        </div>
    );
};

export default OurTutor;