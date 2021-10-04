import React, { useState, useEffect } from 'react';
import Plant from '../Plant/Plant';
import './Plants.css'

const Plants = () => {
    const [plants, setPlants] = useState([]);

    useEffect(() => {
        fetch('./plants.JSON')
            .then(res => res.json())
            .then(data => setPlants(data));
    }, []);

    return (
        <div>
            <div className="plants-item">
                {
                    plants.map(plant => <Plant
                        key={plant.key}
                        plant={plant}
                    ></Plant>)
                }
            </div>
            <div className="more-plants">
                <h1>More about plants coming soon.....</h1>
            </div>
        </div>
    );
};

export default Plants;