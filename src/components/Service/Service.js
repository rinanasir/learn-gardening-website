import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Service.css';

const Service = (props) => {

    const { name, img, activity, cost } = props.serviceItem;
    const details = <FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon>

    return (
        <div className="service-img border border-pink-500 rounded-md pb-6 service-hover">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="px-10 pt-4">
                <h1 className="font-bold">Service: {name}</h1>
                <p><span className="font-bold">Price:</span> ${cost}</p>
                <p><span className="font-bold">Activity:</span> {activity}</p>
            </div>
            <button className="bg-green-400 border rounded-md mt-3 py-2 px-3 ml-10">{details} Details</button>
        </div>
    );
};

export default Service;