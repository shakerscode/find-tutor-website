import React from 'react';
import OurTutor from '../Home/OurTutor';
import useTutors from '../hooks/useTutors';

const Tutors = () => {
    const [teachers] = useTutors()
    return (
     <div className=''>
            <h1 className='text-center font-bold text-3xl text-secondary my-10'>Our Extraordinary tutors</h1>
            <div className='w-5/6 mx-auto grid grid-cols-1 md:grid-cols-3 gap-10'>
                {
                    teachers.map(teacher => <OurTutor
                        key={teacher._id}
                        teacher={teacher}
                    ></OurTutor>)
                }
            </div>
        </div>
    );
};

export default Tutors;