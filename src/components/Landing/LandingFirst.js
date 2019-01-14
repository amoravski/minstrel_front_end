import React from 'react';

import './LandingFirst.css';

const LandingFirst = () => {
    return(
            <div className="landing-first ui">
                <div className="ui grid" >
                    <div className="row">
                        <div className="landing-content eight wide column">
                            <h1 className="ui header">Excepteur sint occaecat</h1>
                            <h2 className="ui left aligned text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</h2>
                        </div>
                        <div className="landing-image computer only eight wide column">
                            <img alt="" src="https://i.ytimg.com/vi/m5d1FlSeF-M/maxresdefault.jpg" className="ui large bordered rounded image" />
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default LandingFirst;
