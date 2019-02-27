import React from 'react';

import './LandingThird.css';

const PerformerCard = () => {
    return ( 
        <div className="landing-third-card">
            <div className="landing-third-content ui centered grid">
                <div className="three column row">
                    <div className="column">
                        <div className="third-card-header">Performer account</div>
                        <img alt="" src="https://i.ytimg.com/vi/m5d1FlSeF-M/maxresdefault.jpg" className="ui large bordered rounded image" />
                    </div>
                    <div className="column">
                        <div className="ui list">
                            <div className="third-card-text item">Performer categoires</div>
                            <div className="third-card-text item">Targeted performances</div>
                            <div className="third-card-text item">List of highlights</div>
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
                            <div className="third-card-text left aligned item">Follow performers</div>
                            <div className="third-card-text item">See performers near</div>
                            <div className="third-card-text item">Send event offers</div>
                        </div>
                    </div>
                     <div className="column">
                        <div className="third-card-header">Admirer account</div>
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
