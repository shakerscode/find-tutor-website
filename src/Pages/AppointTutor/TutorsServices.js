import React, { useState } from 'react';
import useTutors from '../hooks/useTutors'
import AppointModal from './AppointModal';
import TutorsService from './TutorsService';

const TutorsServices = ({date}) => {
    const [teachers] = useTutors()
    const [tutorService, setTutorService] = useState(null)
    return (
        <div className='mt-10'>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-5 w-5/6 mx-auto'>
                {
                    teachers.map((teacher) => 
                    <TutorsService 
                    key={teacher._id} 
                    teacher={teacher}
                    setTutorService={setTutorService}
                    ></TutorsService>)
                }
            </div>
            {
                tutorService && <AppointModal date={date} tutorService={tutorService}></AppointModal>
            }
        </div>
    );
};

export default TutorsServices;