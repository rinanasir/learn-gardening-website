import React, { useEffect, useState } from 'react';
import Providing from '../Providing/Providing';
import './Offers.css'

const Offers = () => {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        fetch('./services.JSON')
            .then(res => res.json())
            .then(data => setOffers(data));
    }, []);

    return (
        <div>
            <div className="offers-item">
                {
                    offers.map(offer => <Providing
                        key={offer.key}
                        offer={offer}
                    ></Providing>)
                }
            </div>
            <div className="more-service">
                <h1>More services are on the way.....</h1>
            </div>
        </div>
    )
};

export default Offers;