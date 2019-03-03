import React from 'react';

const OfferCard = ({ title, description, owner, location, date, categories, size, type_of_event, requirements, compensation, status }) => {
    return (
        <div className="ui card">
            <div className="content">
                <div className="left aligned header">{title}</div>
                <div className="description">
                    {description}
                </div>
                <div className="meta extra content">
                    <span>
                        Location: {location}
                        <br />
                        Date: {new Date(date * 1000).toString().split(' ').slice(0, 5).join(' ')}
                        <br />
                        Owner: {owner}
                        <br />
                        Categories: {categories.toString()}
                        <br />
                        Size: {size}
                        <br />
                        Type of event: {type_of_event}
                        <br />
                        Requirements: {requirements}
                        <br />
                        Compensation: {compensation}
                        <br />
                        Status: {status}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default OfferCard;
