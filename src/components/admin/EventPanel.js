import React from 'react';

import Sidebar from '../Sidebar';
import PerformancesList from '../performances_list/PerformancesList';
import OffersList from '../offers_list/OffersList.js';

class EventPanel extends React.Component {
    render () {
        return (
            <div>
                <div className="ui grid">
                    <PerformancesList admin="true" />
                    <OffersList admin="true" />
                </div>
                <Sidebar />
            </div>
        );
    }
}

export default EventPanel;
