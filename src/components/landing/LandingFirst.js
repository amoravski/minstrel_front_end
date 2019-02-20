import React from 'react';

import './LandingFirst.css';

const LandingFirst = () => {
    return(
            <div className="landing-first ui">
                <div className="ui grid" >
                    <div className="row">
                        <div className="landing-content eight wide column">
                            <h1 className="first-header ui"><b>The new face of street performing</b></h1>
                            <p className="ui left aligned text">Minstrel is a platform for street performers and their admirers, made for the purpose of growing and maintaing and active community. Here at Minstrel your passion for performance is our priority!</p>
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
