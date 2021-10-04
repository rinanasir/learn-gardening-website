import React from 'react';
import './Service.css'

const Service = (props) => {

    const { img, service, cost } = props.service;

    return (
        <div className="service-item">
            <img src={img} alt="" />
        </div>
    );
};

export default Service;