import React from 'react';
import Leaflet from 'leaflet'

import Map from '../Map';
import Header from '../Header';
import Footer from '../Footer';
import './LandingPage.css';
import LandingFirst from '../landing/LandingFirst';
import LandingSecond from '../landing/LandingSecond';
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
                        <LandingThird />
                        <LandingThird />
                    </div>
                </div>
                <div>
                    <div className="ui mobile only grid">
                        <LandingFirst />
                        <LandingSecond />
                        <LandingThird />
                        <LandingThird />
                    </div>
                </div>
                <div style={{ marginBottom: "20vh"}}>
                        <Map height="80vh" />
                </div>
            </div>
                <Footer />
            </div>
        );
    }
}

export default Landing;
