import React, { useEffect, useState } from 'react';
import ServiceItem from '../ServiceItem/ServiceItem';
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
            <div className="flex starting-garden mt-8 py-10">
                <div>
                    <img src="https://www.gardeningknowhow.com/wp-content/uploads/2020/08/fall-garden-guide-400x300.jpg" alt="garden" />
                </div>
                <div className="px-6 pt-6">
                    <h1 className="text-pink-500 font-bold text-4xl pb-8">Basic Gardening for Beginners</h1>
                    <p className="pr-10 font-medium">Autumn is a busy time in the garden. It’s a time of change and necessary preparations for winter. In many climates, it’s the last chance at harvest before the cold weather sets in. If you grow the right kind of plants, it can also be a time of unparalleled beauty and color. There’s a lot to be done in the fall garden, but here we’ve gathered many of the basics. From the best trees, flowers, and vegetables to grow, to the right steps to take to get ready for winter, this Beginner’s Guide to Fall Gardening should help you get the most out of your fall garden, even if it’s your very first one.</p>
                </div>
            </div>
            <div className="mb-10 pb-10 mx-20">
                <h1 className=" text-center text-pink-500 font-bold text-4xl pt-8 pb-8">Our Services for you</h1>
                <div className="grid grid-cols-4 gap-4 px-6">
                    {
                        services.map(service => <ServiceItem
                            key={service.key}
                            service={service}
                        ></ServiceItem>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;