import React from 'react';
import './Service.css'

const Service = (props) => {

    const { name, img, activity, cost } = props.serve;

    return (
        <div className="service-style">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="service-info">
                <h3>Service: {name}</h3>
                <p>Price: ${cost}</p>
                <p>{activity}</p>
            </div>
        </div>
    );
};

export default Service;