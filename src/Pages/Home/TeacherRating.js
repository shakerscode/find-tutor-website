import React from 'react';
import yellowStar from '../../images/Icons/star.png'
import blankStar from '../../images/Icons/star-blank.png'


const TeacherRating = ({img, tittle}) => {
    return (
        <div   className='flex items-center mt-2' >
            <div   className=''>
                <img   className='w-6' src={img} alt="" />
            </div>
            <div   className='ml-3 flex'>
                <div   className='flex justify-center items-center mr-4'>
                    <img src={yellowStar} alt="" />
                    <img src={yellowStar} alt="" />
                    <img src={yellowStar} alt="" />
                    <img src={yellowStar} alt="" />
                    {
                        tittle === 5 ? <img src={yellowStar} alt="" /> : <img   className='w-2' src={blankStar} alt="" />

                    }
                    </div>
                
            </div>
        </div>
    );
};

export default TeacherRating;