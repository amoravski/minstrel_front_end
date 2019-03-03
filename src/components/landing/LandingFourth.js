import React from 'react';

import './LandingFourth.css';

const PerformerCard = () => {
    return ( 
        <div className="landing-fourth-card">
            <div className="landing-fourth-content ui centered grid">
                <div className="three column row">
                    <div className="column">
                        <div className="fourth-card-header">Performer account</div>
                        <img alt="" src="https://i.ytimg.com/vi/m5d1FlSeF-M/maxresdefault.jpg" className="ui large bordered rounded image" />
                    </div>
                    <div className="column">
                        <div className="ui list">
                            <div className="fourth-card-text item">Performer categoires</div>
                            <div className="fourth-card-text item">Targeted performances</div>
                            <div className="fourth-card-text item">List of highlights</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const AdmirerCard = () => {
    return (
        <div className="landing-fourth-card">
            <div className="landing-fourth-content ui centered grid">
                <div className="three column row">
                    <div className="column">
                        <div className="ui list">
                            <div className="fourth-card-text left aligned item">Follow performers</div>
                            <div className="fourth-card-text item">See performers near</div>
                            <div className="fourth-card-text item">Send event offers</div>
                        </div>
                    </div>
                     <div className="column">
                        <div className="fourth-card-header">Admirer account</div>
                        <img alt="" src="https://i.ytimg.com/vi/m5d1FlSeF-M/maxresdefault.jpg" className="ui large bordered rounded image" />
                    </div>
                </div>
            </div>
        </div>
    );
}

const LandingFourth = () => {
    return (
        <div className="landing-fourth">
            <PerformerCard />
            <AdmirerCard />
        </div>
    );
}

export default LandingFourth;
