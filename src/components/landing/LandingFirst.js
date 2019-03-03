import React from 'react';

import './LandingFirst.css';
import strings from '../../strings';

const LandingFirst = () => {
    return(
            <div className="landing-first ui">
                <div className="ui grid" >
                    <div className="row">
                        <div className="landing-content ten wide column">
                            <div className="first-header">{strings.landing_first_header}</div>
                            <div className="first-text ui left aligned text">Minstrel is a platform for street performers and their admirers, made for the purpose of growing and maintaing and active community. Here at Minstrel your passion for performance is our priority!</div>
                        </div>
                        <div className="landing-image computer only six wide column">
                            <img alt="" src="https://i.ytimg.com/vi/m5d1FlSeF-M/maxresdefault.jpg" className="ui large bordered rounded image" />
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default LandingFirst;
