import React from 'react';

const TeachersInfo = ({ tittle, img }) => {
    return (
        <div   className='flex items-center mt-2' >
            <div   className=''>
                <img   className='w-6' src={img} alt="" />
            </div>
            <div   className='ml-3'>
                <h5>{tittle}</h5>
            </div>
        </div>
    );
};

export default TeachersInfo;