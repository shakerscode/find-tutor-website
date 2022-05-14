import React, { useEffect, useState } from 'react';

const useTutors = () => {
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, [])
    return [teachers]
};

export default useTutors;