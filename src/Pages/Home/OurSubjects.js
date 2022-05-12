import React from 'react';
import OurSubject from './OurSubject';

const OurSubjects = () => {
    return (
        <div class="card w-5/6 mx-auto my-3">
            <div class="card-body">
                <h2 class="text-5xl text-center font-bold text-secondary">Our Subjects</h2>
                <p className='text-center text-primary font-bold text-sm p-3'>Our tutors are specialized with this subjects</p>
                 <div className=''>
                    <OurSubject></OurSubject>
                 </div>
            </div>
        </div>
    );
};

export default OurSubjects;