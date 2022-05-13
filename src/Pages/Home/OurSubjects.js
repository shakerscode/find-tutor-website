import React from 'react';
import OurSubject from './OurSubject';
import English from '../../images/Subject-name/english.png'
import Chemistry from '../../images/Subject-name/chemistry.png'
import Math from '../../images/Subject-name/math.png'
import Physics from '../../images/Subject-name/physics.png'
import Biology from '../../images/Subject-name/biology.png'
import Music from '../../images/Subject-name/musical.png'

const OurSubjects = () => {
        
    return (
        <div className="card w-5/6 mx-auto mt-2">
            <div className="card-body">
                <h2 className="text-3xl text-center font-bold text-secondary">Our Subjects</h2>
                <p className='text-center text-primary font-bold text-sm p-3'>Our tutors are specialized with this subjects</p>
                 <div className='grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-4'>
                     <OurSubject name='English' img={English}></OurSubject>
                     <OurSubject name='Chemistry' img={Chemistry}></OurSubject>
                     <OurSubject name='Math' img={Math}></OurSubject>
                     <OurSubject name='Physics' img={Physics}></OurSubject>
                     <OurSubject name='Biology' img={Biology}></OurSubject>
                     <OurSubject name='Music' img={Music}></OurSubject>
                 </div>
            </div>
        </div>
    );
};

export default OurSubjects;