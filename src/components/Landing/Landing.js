import React from 'react';
import Leaflet from 'leaflet'

import Map from '../Map';
import Header from '../Header';
import './Landing.css';
import LandingFirst from './LandingFirst';
import LandingSecond from './LandingSecond';
import LandingThird from './LandingThird';

Leaflet.Icon.Default.imagePath =
'//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/'

class Landing extends React.Component {
    render () {
        return (
            <div className="landing ui">
                <Header />
                <div className="ui fluid container">
                    <LandingFirst />
                    <LandingSecond />
                    <LandingThird />
                    <LandingThird />
                </div>
                <div style={{ marginBottom: "20vh"}}>
                    <Map height="80vh" />
                </div>
            </div>
        );
    }
}

export default Landing;
