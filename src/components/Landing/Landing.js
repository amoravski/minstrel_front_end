import React from 'react';
import Leaflet from 'leaflet'

import Map from '../Map';
import Header from '../Header';
import './Landing.css';
import LandingFirst from './LandingFirst';
import LandingSecond from './LandingSecond';

Leaflet.Icon.Default.imagePath =
'//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/'

class Landing extends React.Component {
    render () {
        return (
            <div className="landing ui">
                <Header />
                <div className="">
                    <LandingFirst />
                    <LandingSecond />
                </div>
                <div style={{ marginBottom: "20vh", height: "80vh"}}>
                    <h3 style={{height: "10%"}}>Map of performers </h3>
                    <Map  />
                </div>
            </div>
        );
    }
}

export default Landing;
