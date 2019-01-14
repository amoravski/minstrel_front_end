import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="active item header">Minstrel</Link>
            <div className="right menu">
                <Link to="/map" className="item">Map</Link>
                <Link to="/performers" className="item">Performance</Link>
                <Link to="/signin" className="item">Sign In</Link>
                <Link to="/register" className="item">Register</Link>
            </div>
        </div>
        );
}

export default Header;
