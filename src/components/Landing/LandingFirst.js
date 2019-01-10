import React from 'react';

import './LandingFirst.css';

const LandingFirst = () => {
    return(
            <div className="landing-first ui">
                <div className="landing-content ui left aligned centered grid container" >
                    <div className="row">
                        <div className="eight wide column">
                            <h1 className="ui left aligned header">Excepteur sint occaecat</h1>
                            <h2 className="ui left aligned text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</h2>
                        </div>
                        <div className="eight wide column">
                            <img src="https://i.ytimg.com/vi/m5d1FlSeF-M/maxresdefault.jpg" className="ui large bordered rounded image" />
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default LandingFirst;
