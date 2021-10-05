import React from 'react';
import './ServiceItem.css';

const ServiceItem = (props) => {

    const { name, img, activity, cost } = props.service;

    return (
        <div className="service-img border border-yellow-700 rounded-md service-hover">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="px-10 pt-4">
                <h1 className="font-bold">Service: {name}</h1>
                <p><span className="font-bold">Price:</span> ${cost}</p>
                <p><span className="font-bold">Activity:</span> {activity}</p>
            </div>
        </div>
    );
};

export default ServiceItem;