import React from 'react';

import PerformancesList from '../performances_list/PerformancesList';
import Sidebar from '../Sidebar';

const PerformancesPage = () => {
    return (
        <div>
            <PerformancesList />
            <Sidebar performances="active" />
        </div>
    );
}

export default PerformancesPage;
