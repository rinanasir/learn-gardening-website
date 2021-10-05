import { faBook, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Courses.css'

const Courses = (props) => {

    const { name, img, viewedBy, cost } = props.course;
    const humanIcon = <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
    const enroll = <FontAwesomeIcon icon={faBook}></FontAwesomeIcon>

    return (
        <div className="course-img border border-pink-500 rounded-md service-hover pb-8">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="px-10 pt-4">
                <h1 className="font-bold">Learn: {name}</h1>
                <h1>Enrollment: {cost}</h1>
                <h1>{humanIcon} {viewedBy}</h1>
                <button className="bg-green-400 border rounded-md mt-3 py-2 px-3">{enroll} Enroll</button>
            </div>
        </div>
    );
};

export default Courses;