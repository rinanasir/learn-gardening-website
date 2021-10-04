import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="error">
            <h1 className="text-7xl text-red-600">404</h1>
            <h1 className="text-7xl text-red-600">Page Not Found</h1>
        </div>
    );
};

export default NotFound;