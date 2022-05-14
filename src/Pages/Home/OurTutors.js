import { useNavigate } from 'react-router-dom';
import useTutors from '../hooks/useTutors';
import OurTutor from './OurTutor';

const OurTutors = () => {
    const navigate = useNavigate();

    const [teachers] = useTutors()
    return (
        <div className=''>
            <h1 className='text-center font-bold text-3xl text-secondary my-10'>Our Extraordinary tutors</h1>
            <div className='w-5/6 mx-auto grid grid-cols-1 md:grid-cols-3 gap-10'>
                {
                    teachers.slice(0, 6).map(teacher => <OurTutor
                        key={teacher._id}
                        teacher={teacher}
                    ></OurTutor>)
                }
            </div>
            <div className=' flex my-10 '>
                <button onClick={()=> navigate('/tutor')} className="btn btn-primary text-white mx-auto bg-gradient-to-r from-purple-400 to-primary-800">Explore More</button>
            </div>
        </div>
    );
};

export default OurTutors;