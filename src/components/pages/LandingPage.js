import React from 'react';
import { Link } from 'react-router-dom';
import Leaflet from 'leaflet'

import Header from '../Header';
import Footer from '../Footer';
import LandingFirst from '../landing/LandingFirst';
import LandingSecond from '../landing/LandingSecond';
import LandingThird from '../landing/LandingThird';
import LandingFourth from '../landing/LandingFourth';
import DisplayMap from '../map/DisplayMap';
import './LandingPage.css';

Leaflet.Icon.Default.imagePath =
    '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/'

class LandingPage extends React.Component {
    render() {
        return (
            <div>
                <div className="ui fluid container">
                    <Header landing="active" />
                    <div className="landing">
                        <div className="ui computer only grid">
                            <LandingFirst />
                            <LandingSecond />
                            <LandingThird />
                            <LandingFourth />
                        </div>
                    </div>
                    <div>
                        <div className="ui mobile only grid">
                            <LandingFirst />
                            <LandingSecond />
                            <LandingThird />
                            <LandingFourth />
                        </div>
                    </div>
                    <div className="landing-map">
                        <div className="circular ui button">
                            <Link to="/map">
                                Check our map
                            </Link>
                        </div>
                        <DisplayMap interact={false} height="80vh" />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default LandingPage;
