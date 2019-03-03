import React from 'react';

const PerformanceCard = ({ title, description, performer, location, date, categories }) => {
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
                        Performer: {performer}
                        <br />
                        Categories: {categories.toString()}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default PerformanceCard;
