import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Courses = (props) => {

    const { name, img, viewedBy, cost } = props.course;
    const humanIcon = <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>

    return (
        <div className="service-img border border-pink-500 rounded-md service-hover">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="px-10 pt-4">
                <h1 className="font-bold">Learn: {name}</h1>
                <h1>Enrollment: {cost}</h1>
                <h1>{humanIcon} {viewedBy}</h1>
            </div>
        </div>
    );
};

export default Courses;