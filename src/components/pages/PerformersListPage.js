import React from 'react';

import Sidebar from '../Sidebar';
import PerformersList from '../PerformersList';

const PerformersListPage = () => {
    return (
        <div className="" style={{ height: "100vh", display: "flex" }}>
            <Sidebar />
            <PerformersList />
        </div>
    );
}

export default PerformersListPage;
