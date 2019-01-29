import React from 'react';

import './Footer.css'
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className="footer">
        <div className="ui left aligned centered computer only grid container">
            <div className="row">
                <div className="three wide column">
                    <div className="ui secondary vertical menu">
                        <h5 className="item">Minstrel</h5>
                        <p className="item">@ Minstrel 2019</p>
                    </div>
                </div>
                <div className="three wide column">
                    <div className="ui secondary vertical menu">
                        <div className="right menu">
                            <Link to="/map" className="item">Map</Link> 
                            <Link to="/performers" className="item">Performers</Link> 
                            <Link to="/signin" className="item">Sign in</Link> 
                            <Link to="/register" className="item">Register</Link> 
            
                        </div>
                    </div>
                </div>
                <div className="three wide column">
                    <div className="ui secondary vertical menu">
                        <div className="right menu">
                            <p className="item">Email</p>
                            <p className="item">Facebook</p>
                            <p className="item">Twitter</p>
                            <p className="item">Instagram</p>
                        </div>
                    </div>
                </div>
                <div className="three wide column">
                    <div className="ui secondary vertical menu">
                        <div className="right aligned content menu">
                            <p className="item">Credits</p>
                            <p className="item">Name Surname</p>
                            <p className="item">Name Surname</p>
                        </div>
                    </div>
                </div>
                <div className="three wide column">
                    <div className="ui secondary vertical menu">
                        <h6>Partners</h6>
                        <div className="right aligned content  menu">
                            <p className="item">Zithor</p>
                            <p className="item">Vzaaaz</p>
                        </div>
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
