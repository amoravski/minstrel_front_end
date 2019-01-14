import React from 'react';

import './LandingThird.css';

const LandingThird = () => {
    return (
        <div className="landing-third">
            <h1>How does it work?</h1>
            <div className="landing-third-content ui centered grid">
                <div className="three column row">
                    <div className="column">
                        <p>Performer account</p>
                                                    <img alt="" src="https://i.ytimg.com/vi/m5d1FlSeF-M/maxresdefault.jpg" className="ui large bordered rounded image" />
                    </div>
                    <div className="column">
                        <div className="ui list">
                            <div className="item">Feature 1</div>
                            <div className="item">Feature 2</div>
                            <div className="item">Feature 3</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingThird;
