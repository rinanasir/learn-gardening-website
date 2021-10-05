import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [serviceList, setServiceList] = useState([]);
    useEffect(() => {
        fetch('./serviceList.JSON')
            .then(res => res.json())
            .then(dara => setServiceList(dara));
    }, []);

    return (
        <div className="mb-20">
            <h1 className="text-center text-4xl font-bold text-pink-500 mt-4 pb-6">Services we provide</h1>
            <div className="grid grid-cols-4 gap-4 px-6">
                {
                    serviceList.map(serviceItem => <Service
                        key={serviceItem.key}
                        serviceItem={serviceItem}
                    ></Service>)
                }
                <h1 className="text-center text-4xl font-bold text-pink-500 mt-20">More services are comming soon...</h1>
            </div>
        </div>
    );
};

export default Services;