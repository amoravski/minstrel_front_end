import React from 'react';

import AdmirerFeatures from '../../assets/landing/admirer-account.svg';
import PerformerFeatures from '../../assets/landing/performer-account.svg';
import './LandingFourth.css';

const PerformerCard = () => {
    return (
        <div className="landing-fourth-card">
            <div className="landing-fourth-content ui left aligned grid">
                <div className="fourth-card-header">Performer account</div>
                <div className="three column row">
                    <div className="twelve wide column" >
                        <img alt="performer-features" src={PerformerFeatures} className="features-image" />
                    </div>
                    <div className="four wide column" >
                        <div className="features-list ui list">
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
        <div className="landing-fourth-card" style={{marginTop: "50px"}}>
            <div className="landing-fourth-content ui right aligned grid">
                <div className="three column row">
                    <div className="four wide column">
                        <div className="features-list ui list">
                            <div className="fourth-card-text left aligned item">Follow performers</div>
                            <div className="fourth-card-text item">See performers near</div>
                            <div className="fourth-card-text item">Send event offers</div>
                        </div>
                    </div>
                    <div className="twelve wide column">
                        <div className="fourth-card-header left-header">Admirer account</div>
                        <img alt="" src={AdmirerFeatures} className="features-image" />
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
