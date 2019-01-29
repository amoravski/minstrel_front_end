import React from 'react';

import Sidebar from '../Sidebar';
import PerformersList from '../performer_list/PerformersList';

const PerformersListPage = () => {
    return (
        <div>
            <PerformersList />
            <Sidebar performers="active" />
        </div>
    );
}

export default PerformersListPage;
