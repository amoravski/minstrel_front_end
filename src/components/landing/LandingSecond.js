import React from 'react';

import './LandingSecond.css';
import ConnectPerformers from '../../assets/landing-icons/1-puzzle.svg';
import GrowAudience from '../../assets/landing-icons/2-arrow.svg';
import LivenEvents from '../../assets/landing-icons/3-callendar.svg';

const Card = props => {
    return (
        <div className="ui">
            <div className="card-image-container ui image">
                <img alt={props.header} className={`ui ${props.imageClass}`} src={props.image} />
            </div>
            <div className="ui basic center aligned segment">
                <div className="card-header ui center aligned">{props.header}</div>
                <div className="card-text ui center aligned content">
                    {props.text}
                </div>
            </div>
        </div>
    );
};

const LandingSecond = () => {
    return (
        <div className="landing-second ui">
            <div className="landing-second-header ui center aligned content">What we do?</div>
            <div className="landing-content computer only ui center aligned centered relaxed grid container">
                <div className="three column row">
                    <div className="column">
                        <Card
                            header="Connect to performers"
                            text="Share your talents and upcoming performances for everybody to see."
                            image={ConnectPerformers}
                            imageClass="card-image"
                        />
                    </div>
                    <div className="column">
                        <Card
                            header="Grow your audience"
                            text="The street is your stage? We'd love to help you put yourself out there."
                            image={GrowAudience}
                            imageClass="alternative-image"
                        />
                    </div>
                    <div className="column">
                        <Card
                            header="Liven up your events"
                            text="Keep track of your favourite performers and send them event offers."
                            image={LivenEvents}
                            imageClass="card-image"
                        />
                    </div>
                </div>
            </div>
        </div>);
};

export default LandingSecond;
