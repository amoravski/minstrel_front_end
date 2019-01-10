import React from 'react';
import Leaflet from 'leaflet'
import Map from '../../Map';
import LandingFirst from './LandingFirst';
import LandingSecond from './LandingSecond';

Leaflet.Icon.Default.imagePath =
'//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/'

class Landing extends React.Component {
    render () {
        return (
            <div className="ui container">
                <LandingFirst />
                <LandingSecond />
                <Map   />
            </div>
        );
    }
}

export default Landing;
