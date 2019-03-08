import React from 'react';
import { Link } from 'react-router-dom';

import './LandingFirst.css';
import strings from '../../strings';

const LandingFirst = () => {
    return (
        <div className="landing-first ui">
            <div className="ui grid" >
                <div className="row">
                    <div className="landing-content nine wide column">
                        <div className="first-header">{strings.landing_first_header}</div>
                        <div className="first-text ui left aligned text">Minstrel is a platform for street performers and their admirers, made for the purpose of growing and maintaing and active community. Here at Minstrel your passion for performance is our priority!</div>
                        <Link to="/register" className="ui join-now circular button">
                            Join now!
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingFirst;
