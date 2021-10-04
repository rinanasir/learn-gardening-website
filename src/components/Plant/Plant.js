import React from 'react';
import './Plant.css';

const Plant = (props) => {
    const { img, about, name } = props.plant;

    return (
        <div className="plant-item">
            <div className="plant-img">
                <img src={img} alt="" />
            </div>
            <div className="plant-info">
                <h3>Name: {name}</h3>
                <p><span className="text-bold">About:</span> {about}</p>
            </div>

        </div>
    );
};

export default Plant;