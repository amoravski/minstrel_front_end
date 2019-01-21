import React from 'react';

import Sidebar from '../Sidebar';
import PerformersList from '../PerformersList';

const PerformersListPage = () => {
    return (
        <div>
            <PerformersList />
            <Sidebar performers="active" />
        </div>
    );
}

export default PerformersListPage;
