import React from 'react';

import './LandingSecond.css';

const Card = () => {
    return (
        <div className="ui">
                    <div className="ui fluid image">
                        <img src="https://static1.squarespace.com/static/50e70b75e4b0d5ee8b74860b/t/515602bfe4b0fc0d94666eb5/1364591296832/profile+blank.jpg" />
                    </div>
                    <div className="content">
                        <p className="ui center aligned header">Lorem ipsum dolor</p>
                        <div className="ui center aligned segment"> 
                            Lorem ipsum Dolor sit amet, consectetur adiplicing elit, sed do eiusmod
                        </div>
                    </div>
        </div>
    );
};

const LandingSecond = () => {
    return (
        <div className="landing-second ui">
            <h1 className="ui left aligned header">What we do?</h1>
            <div className="landing-content ui center aligned centered grid container">
                <div className="row">
                <div className="four wide column">
                    <Card />
                </div>
                <div className="four wide column">
                    <Card />
                </div>
                <div className="four wide column">
                    <Card />
                </div>
            </div>
            </div>
        </div>);
};

export default LandingSecond;
