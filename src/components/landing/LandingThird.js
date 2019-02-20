import React from 'react';

import './LandingThird.css';

const PerformerCard = () => {
    return ( 
        <div className="landing-third-card">
            <div className="landing-third-content ui centered grid">
                <div className="three column row">
                    <div className="column">
                        <p>Performer account</p>
                        <img alt="" src="https://i.ytimg.com/vi/m5d1FlSeF-M/maxresdefault.jpg" className="ui large bordered rounded image" />
                    </div>
                    <div className="column">
                        <div className="ui list">
                            <div className="item">Performer categoires</div>
                            <div className="item">Targeted performances</div>
                            <div className="item">List of highlights</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const AdmirerCard = () => {
    return (
        <div className="landing-third-card">
            <div className="landing-third-content ui centered grid">
                <div className="three column row">
                    <div className="column">
                        <div className="ui list">
                            <div className="left aligned item">Follow performers</div>
                            <div className="item">See performers near</div>
                            <div className="item">Send event offers</div>
                        </div>
                    </div>
                     <div className="column">
                        <p>Admirer account</p>
                        <img alt="" src="https://i.ytimg.com/vi/m5d1FlSeF-M/maxresdefault.jpg" className="ui large bordered rounded image" />
                    </div>
                </div>
            </div>
        </div>
    );
}

const LandingThird = () => {
    return (
        <div className="landing-third">
            <PerformerCard />
            <AdmirerCard />
        </div>
    );
}

export default LandingThird;
