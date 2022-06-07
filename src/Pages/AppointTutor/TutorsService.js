import React from 'react';

const TutorsService = ({ teacher, setTutorService }) => {
    const { name, img, subject, qualification, slots } = teacher;
    return (
        <div  className="card text-secondary bg-base-100 shadow-xl">
            <div   className='flex justify-between items-center px-12 py-5 bg-accent'>
                <div  className="avatar online">
                    <div  className="w-16 rounded-full border-2 border-secondary">
                        <img src={img} alt='' />
                    </div>
                </div>
                <div>
                    <h1   className='p-10 font-semibold'>{name}</h1>
                </div>
            </div>

            <div  className="card-body items-center text-center">
                <h5>Subject: {subject}</h5>
                <p>Qualification: {qualification}</p>
                <div   className='p-5'>
                    <p>
                        {
                            slots.length > 0
                                ? <span>{slots[0]}</span>
                                : <span> All slots are booked</span>
                        }
                    </p>
                    <p   className='pt-6'>{slots.length} {slots.length > 1 ? 'Spaces are' : 'Space is'} available</p>
                </div>
                <div  className="card-actions">
                    <label
                        disabled={slots.length === 0}
                        onClick={() => setTutorService(teacher)}
                        for="appoint-modal"
                         className={slots.length === 0 ? "btn border-2 border-secondary text-bold" : "btn btn-primary modal-button text-white bg-gradient-to-r from-purple-400 to-primary-800"}>
                            {slots.length === 0 ? 'Not Available' : 'Appoint Now'}
                        </label> 
                </div>
            </div>
        </div>
    );
};

export default TutorsService;