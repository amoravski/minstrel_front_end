import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <h3 className="active item">Minstrel</h3>
            <div className="right menu">
                <Link to="/map" className="item">MAP</Link>
                <Link to="/performers" className="item">PERFORMERS</Link>
                <Link to="/signin" className="item">SIGN IN</Link>
                <Link to="/register" className="item">REGISTER</Link>
            </div>
        </div>
        );
}

export default Header;
