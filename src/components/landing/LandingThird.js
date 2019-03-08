import React from 'react';

import MapImage from '../../assets/landing-icons/4-map.svg';
import OffersImage from '../../assets/landing-icons/5-dollar.svg';
import PerformacesImage from '../../assets/landing-icons/6-star.svg';
import CollabImage from '../../assets/landing-icons/7-collab.svg';
import './LandingThird.css';

const Card = props => {
    return (
        <div className="third-card ui card">
            <div className="ui third-card-image-container">
                <img className={props.imageClass} alt={props.header} src={props.image} />
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
            <div className="landing-third-header ui center aligned content">
                Our services
            </div>
            <div className="landing-third-content computer only ui center aligned centered grid container">
                <div className="row">
                    <div className="four wide column">
                        <Card
                            header="Map"
                            text="We provide a free map of all performers"
                            image={MapImage}
                            imageClass="third-alternative-image"
                        />
                    </div>
                    <div className="four wide column">
                        <Card
                            header="Offers"
                            text="Reach out and invite your favorite performers"
                            image={OffersImage}
                            imageClass="third-card-image"
                        />
                    </div>
                    <div className="four wide column">
                        <Card
                            header="Performances"
                            text="Publish your events for all of your fans to see"
                            image={PerformacesImage}
                            imageClass="third-card-image"
                        />
                    </div>
                    <div className="four wide column">
                        <Card
                            header="Collaborations"
                            text="Invite other performers to collab with you"
                            image={CollabImage}
                            imageClass="third-card-image"
                        />
                    </div>
                </div>
            </div>
        </div>);
};

export default LandingThird;
