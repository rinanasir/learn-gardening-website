import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h1>Gardening, know how</h1>
            <nav>
                <Link to="/home" className="nav">Home</Link>
                <Link to="/about" className="nav">About</Link>
                <Link to="/services" className="nav">Services</Link>
                <Link to="/plants" className="nav">Plants</Link>
            </nav>
        </div>
    );
};

export default Header;