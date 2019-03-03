import React from 'react';

import './LandingThird.css';

const Card = props => {
    return (
        <div className="ui card">
            <div className="ui fluid image">
                <img alt="" src="https://static1.squarespace.com/static/50e70b75e4b0d5ee8b74860b/t/515602bfe4b0fc0d94666eb5/1364591296832/profile+blank.jpg" />
            </div>
            <div className="ui basic center aligned segment">
                <div className="third-card-header ui center aligned header">
                    {props.header}
                </div>
                <div className="third-card-text ui center aligned content">
                    {props.text}
                </div>
            </div>
        </div>
    );
};

const LandingThird = () => {
    return (
        <div className="landing-third ui">
            <div className="third-card-header ui center aligned content">
                Our services
            </div>
            <div className="landing-third-content computer only ui center aligned centered grid container">
                <div className="row">
                    <div className="four wide column">
                        <Card
                            header="Map"
                            text="We provide a free map of all performers"
                        />
                    </div>
                    <div className="four wide column">
                        <Card
                            header="Offers"
                            text="Reach out and invite your favorite performers"
                        />
                    </div>
                    <div className="four wide column">
                        <Card
                            header="Performances"
                            text="Publish your events for all of your fans to see"
                        />
                    </div>
                    <div className="four wide column">
                        <Card
                            header="Collaborations"
                            text="Invite other performers to collab with you"
                        />
                    </div>
                </div>
            </div>
        </div>);
};

export default LandingThird;
