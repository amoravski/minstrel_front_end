import React from 'react';

import LandingFirst from './LandingFirst';

class Landing extends React.Component {
    render () {
        return (
            <div>
                <LandingFirst />
                <LandingFirst />
                <LandingFirst />
                <LandingFirst />
                <h3>after</h3>
            </div>
        );
    }
}

export default Landing;
