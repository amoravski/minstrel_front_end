import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
        <div className="ui left aligned centered grid container">
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
                            <p className="item">Map</p>
                            <p className="item">Performers</p>
                            <p className="item">Log in</p>
                            <p className="item">Sign up</p>
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
                    <div className="ui secondary menu">
                        <h5>Partners</h5>
                        <div className="ui secondary menu">
                            <p className="item">BASA</p>
                            <p className="item">Globira</p>
                            <p className="item">Zithor</p>
                            <p className="item">Vzaaaz</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        );
}

export default Footer;
