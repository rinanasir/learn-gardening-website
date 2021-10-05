import React from 'react';
import './Service.css';

const Service = (props) => {

    const { name, img, activity, cost } = props.serviceItem;

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
        </div>
    );
};

export default Service;