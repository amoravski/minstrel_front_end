import React from 'react';

import { Link } from 'react-router-dom';
import Logo from '../assets/logo&ico/logo.svg';
import './Header.css';

const Header = props => {
    return (
        <div className="main-header">
            <div className="main-header-computer ui secondary menu computer only grid">
                <div className="row">
                    <Link to="/" className={`header-logo`}>
                       <img alt="Minstrel" className="header-logo" src={Logo} /> 
                    </Link>
                    <div className="right menu">
                        <Link to="/map" className="item">
                            MAP
                        </Link>
                        <Link to="/performers" className="item">
                            PERFORMERS
                        </Link>
                        <Link to="/login" className={`${props.login} item`}>
                            LOG IN
                        </Link>
                            <div className="ui sign-up circular button">
                                <Link to="/register" className="sign-up-text">
                                    SIGN UP
                                </Link>
                            </div>
                    </div>
                </div>
            </div>
            <div className="ui secondary mobile only centered grid">
                <div className="row">
                    <Link to="/" className={`mobile-header ${props.landing} item`}>Minstrel</Link>
                    <div className="ui right-aligned simple compact dropdown item">
                        <i className="bars icon"></i>
                        <div className="mobile-dropdown menu">
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
