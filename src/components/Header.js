import React from 'react';

import { Link } from 'react-router-dom';

const Header = props => {
    return (
        <div>
            <div className="ui secondary menu computer only grid" style={{marginLeft:"140px", marginRight:"140px"}}>
                <div className="row">
                <Link to="/" className={`${props.landing} item`}>Minstrel</Link>
                <div className="right menu">
                    <Link to="/map" className="item">Map</Link>
                    <Link to="/performers" className="item">Performers</Link>
                    <Link to="/login" className={`${props.login} item`}>Log In</Link>
                    <Link to="/register" className={`${props.register} item`}>Register</Link>
                </div>
                </div>
            </div>
            <div className="ui secondary mobile only centered grid">
                <div className="row">
                <Link to="/" className={`${props.landing} item`}>Minstrel</Link>
                <div className="twenty column">
                </div>
                <div className="ui right-aligned simple dropdown item">
                    <i className="bars icon"></i>
                    <div className="menu">
                        <Link to="/map" className="item">Map</Link>
                        <Link to="/performers" className="item">Performers</Link>
                        <Link to="/login" className={`${props.login} item`}>Log In</Link>
                        <Link to="/register" className={`${props.register} item`}>Register</Link>
                    </div>
                </div>
                </div>
            </div>
 
        </div>
        );
}

export default Header;
