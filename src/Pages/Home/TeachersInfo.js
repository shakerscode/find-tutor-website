import React from 'react';

const TeachersInfo = ({education, qualification}) => {
    return (
        <div className='flex justify-around  items-center text-center bg-purple-500'>
            <div className=''>
                <img src={education} alt="" />
            </div>
            <div className='ml-3'>
                <h5>{qualification}</h5>
            </div>
        </div>
    );
};

export default TeachersInfo;