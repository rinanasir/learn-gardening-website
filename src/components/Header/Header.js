import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1 className="text-center font-bold text-6xl bg-green-400 h-32 pt-6">Gardening, learn how</h1>
            <nav className="text-center font-bold text-2xl bg-green-500 h-16 py-4">
                <NavLink to='/home' activeStyle={{ fontWeight: "bold", color: "red" }} className="px-8">Home</NavLink>
                <NavLink to='/about' activeStyle={{ fontWeight: "bold", color: "red" }} className="px-8">About</NavLink>
                <NavLink to='/services' activeStyle={{ fontWeight: "bold", color: "red" }} className="px-8">Service</NavLink>
                <NavLink to='/learn' activeStyle={{ fontWeight: "bold", color: "red" }} className="px-8">Learn</NavLink>
            </nav>
        </div>
    );
};

export default Header;