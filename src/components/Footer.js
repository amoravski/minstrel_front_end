import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css'
import LanguageButton from './LanguageButton';

const Footer = () => {
    return (
        <div className="footer">
            <div className="ui left aligned computer only grid container">
                <div className="row">
                    <div className="three wide column">
                        <div className="ui secondary horizontal menu">
                            <h5 className="item">Minstrel</h5>
                            <p className="item">@ Minstrel 2019</p>
                        </div>
                    </div>
                    <div className="three wide column">
                        <div className="ui right aligned secondary horizontal menu">
                            <div className="right menu">
                            </div>
                        </div>
                    </div>
                    <div className="three wide column">
                        <div className="ui secondary horizontal menu">
                            <LanguageButton />
                        </div>
                    </div>
                </div>
            </div>
            <div className="ui center aligned centered mobile only grid container">
                <div className="row">
                    <div className="ui secondary vertical menu">
                        <h5 className="item">Minstrel</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="ui secondary vertical menu">
                        <div className="right menu">
                            <Link to="/map" className="item">Map</Link>
                            <Link to="/performers" className="item">Performers</Link>
                            <Link to="/signin" className="item">Sign in</Link>
                            <Link to="/register" className="item">Register</Link>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="ui secondary vertical menu">
                        <p className="item">@ Minstrel 2019</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
