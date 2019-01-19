import React from 'react';

import { Link } from 'react-router-dom';

const Header = props => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className={`${props.landing} item`}>Minstrel</Link>
            <div className="right menu">
                <Link to="/map" className="item">Map</Link>
                <Link to="/performers" className="item">Performance</Link>
                <Link to="/signin" className={`${props.signin} item`}>Sign In</Link>
                <Link to="/register" className={`${props.register} item`}>Register</Link>
            </div>
        </div>
        );
}

export default Header;
