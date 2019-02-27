import React from 'react';
import { Link } from 'react-router-dom';
import Leaflet from 'leaflet'

import Map from '../map/Map';
import Header from '../Header';
import Footer from '../Footer';
import './LandingPage.css';
import LandingFirst from '../landing/LandingFirst';
import LandingSecond from '../landing/LandingSecond';
import LandingSecondServices from '../landing/LandingSecondServices';
import LandingThird from '../landing/LandingThird';

Leaflet.Icon.Default.imagePath =
'//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/'

class Landing extends React.Component {
    render () {
        return (
            <div>
            <div className="ui fluid container">
                <Header landing="active" />
                <div className="landing">
                    <div className="ui computer only grid">
                        <LandingFirst />
                        <LandingSecond />
                        <LandingSecondServices />
                        <LandingThird />
                    </div>
                </div>
                <div>
                    <div className="ui mobile only grid">
                        <LandingFirst />
                        <LandingSecond />
                        <LandingSecondServices />
                        <LandingThird />
                    </div>
                </div>
                <div style={{ marginBottom: "20vh", width: "80%", marginLeft: "auto", marginRight: "auto", position: "relative"}}>
                        <div className="circular ui button" style={{ marginBottom: "0vh", zIndex: "20"}}>
                            <Link to="/map">
                                    Check our map
                            </Link>
                        </div>
                        <Map interact={false} height="80vh" />
                        
                </div>
            </div>
                <Footer />
            </div>
        );
    }
}

export default Landing;
