import React from 'react';
import './Providing.css';

const Providing = (props) => {

    const { name, img, activity, cost } = props.offer;

    return (
        <div>
            <div className="pro-item">
                <div className="pro-img">
                    <img src={img} alt="" />
                </div>
                <div className="pro-info">
                    <h3>Name: {name}</h3>
                    <h4>Price: {cost}</h4>
                    <p><span className="bold">Work type: </span>{activity}</p>
                </div>
            </div>
        </div>
    );
};

export default Providing;