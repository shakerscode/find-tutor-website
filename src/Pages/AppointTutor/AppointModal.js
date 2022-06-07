import { format } from 'date-fns';
import React from 'react';

const AppointModal = ({ tutorService, date }) => {
    const { name, subject, slots } = tutorService;
    return (
        <div>
            <input type="checkbox" id="appoint-modal"  className="modal-toggle" />
            <div  className="modal">
                <div  className="modal-box relative">
                    <label for="appoint-modal"  className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div   className='mt-7 p-5 text-center text-secondary'>
                        <h1   className='font-bold text-2xl'>Tutor: {name}</h1>
                        <input readOnly type="text" value={format(date, 'PP')}  className="input  input-primary w-full   mt-3" />
                        <input readOnly type="text" value={subject}  className="input input-bordered input-primary w-full  mt-3" />
                        <select  className="select select-primary w-full mt-3 border-2 border-primary">
                            {
                                slots.map(slot => <option>{slot}</option>)
                            }
                        </select>
                        <input  type="text" placeholder='Name'  className="input input-bordered input-primary w-full  mt-3" />
                        <input  type="text" placeholder='Email'  className="input input-bordered input-primary w-full  mt-3" />
                        <input  type="text" placeholder='Number'  className="input input-bordered input-primary w-full  mt-3" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointModal;