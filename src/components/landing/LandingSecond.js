import React from 'react';

import './LandingSecond.css';

const Card = props => {
    return (
        <div className="ui">
                    <div className="ui fluid image">
                        <img alt="" src="https://static1.squarespace.com/static/50e70b75e4b0d5ee8b74860b/t/515602bfe4b0fc0d94666eb5/1364591296832/profile+blank.jpg" />
                    </div>
                    <div className="ui basic center aligned segment">
                        <p className="ui center aligned header">{props.header}</p>
                        <div className="ui center aligned content"> 
                            {props.text}
                        </div>
                    </div>
        </div>
    );
};

const LandingSecond = () => {
    return (
        <div className="landing-second ui">
            <h1 className="ui center aligned header">What we do?</h1>
            <div className="landing-content computer only ui center aligned centered grid container">
                <div className="row">
                <div className="four wide column">
                    <Card 
                        header="Connect to performers"
                        text="Share your talents and upcoming performances for everybody to see."
                    />
                </div>
                <div className="four wide column">
                    <Card 
                        header="Grow your audience"
                        text="The street is your stage? We'd love to help you put yourself out there."
                    />
                </div>
                <div className="four wide column">
                    <Card 
                        header="Liven up your events"
                        text="Keep track of your favourite performers and send them event offers."
                    />
                </div>
            </div>
            </div>
        </div>);
};

export default LandingSecond;
