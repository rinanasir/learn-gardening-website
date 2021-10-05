import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import Courses from '../Courses/Courses';

const Learn = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./courses.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []);

    return (
        <div>
            <h1 className="text-center text-4xl font-bold text-pink-500 mt-4 pb-6">What you can Learn</h1>
            <div className="grid grid-cols-4 gap-4 px-6">
                {
                    courses.map(course => <Courses
                        key={course.key}
                        course={course}
                    ></Courses>)
                }
            </div>
            <h1 className="text-center text-4xl font-bold text-pink-500 pt-6">More courses are comming soon...</h1>
        </div>
    );
};

export default Learn;