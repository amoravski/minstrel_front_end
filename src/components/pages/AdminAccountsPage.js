import React from 'react';

import Sidebar from '../Sidebar';
import AccountPanel from '../admin/AccountPanel.js';

const AdminAccountsPage = () =>{
    return (
        <div>
            <AccountPanel /> 
            <Sidebar />
        </div>);
}

export default AdminAccountsPage;
