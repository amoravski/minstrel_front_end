import React from 'react';

import PerformancesCreateForm from '../forms/PerformancesCreateForm.js';
import Sidebar from '../Sidebar'

import './PerformancesCreatePage.css';

const PerformancesCreatePage = () => {
    return (
        <div>
            <div className="performances-create-page">
                <PerformancesCreateForm />
            </div>
            <Sidebar />
        </div>
    );
}

export default PerformancesCreatePage;
