import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Home.css'

const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./services.JSON')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div>
            <div className="starting-garden">
                <div>
                    <img src="https://www.gardeningknowhow.com/wp-content/uploads/2020/08/fall-garden-guide-400x300.jpg" alt="garden" />
                </div>
                <div className="garden-info">
                    <h2>Basic Gardening for Beginners</h2>
                    <p>Autumn is a busy time in the garden. It’s a time of change and necessary preparations for winter. In many climates, it’s the last chance at harvest before the cold weather sets in. If you grow the right kind of plants, it can also be a time of unparalleled beauty and color. There’s a lot to be done in the fall garden, but here we’ve gathered many of the basics. From the best trees, flowers, and vegetables to grow, to the right steps to take to get ready for winter, this Beginner’s Guide to Fall Gardening should help you get the most out of your fall garden, even if it’s your very first one.</p>
                </div>
            </div>
            <div className="service-section">
                <h2>Our Services</h2>
                <div className="service-item">
                    {
                        services.map(service => <Service
                            key={service.key}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;