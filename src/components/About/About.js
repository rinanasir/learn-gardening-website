import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className="about">
            <div className="about-style">
                <h1>Are you passionate about gardening too?</h1>
                <h2>Then you’ve found your home.</h2>
            </div>
            <div className="about-info">
                <h4>
                    Here at Gardening Know How, whether you’re an apartment dweller with an affection for houseplants, a novice gardener putting in your first edible garden, or a master gardener looking to learn how to transform your harvest into delicious meals, everyone is welcome here.
                </h4>
                <h4>
                    We know how dirt feels between our fingers, how thrilling it can be to see your first seedling or blossom of the year appear and how good it tastes to bite into that fresh fruit you just picked from your very own garden. And because we’re gardeners too, our goal is simple:  we want to make sure you get to experience that too!
                </h4>
                <h4>
                    More than anything, gardening is fun, and we want to help you garden happier!
                </h4>
            </div>
            <div className="about-info">
                <h3>What you'll find here</h3>
                <h4>
                    Every year over 130 million gardening enthusiasts visit our site to find the information and inspiration they need to achieve the garden of their dreams. With over 14,000 articles and more being published every day, our main site is a virtual encyclopedia of gardening information.
                </h4>
                <h4>
                    On our <span className="text-color">Offers</span> site you’ll find the latest gardening hacks and DIY projects, garden tours and guest posts by gardening experts from around the world, along with weekly promotions, contests, and giveaways.
                </h4>
            </div>
        </div>
    );
};

export default About;