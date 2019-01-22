import React from 'react';

import Header from '../Header';
import LogInForm from '../forms/LogInForm';
import './LogIn.css';

const LogInPage = () => {
    return (
        <div className="log-in-page">
            <Header login="active" />
            <div className="log-in-form ui computer only centered grid" >
                <LogInForm  />
            </div>
            <div className="log-in-form ui mobile only centered grid" >
                <LogInForm  />
            </div>

        </div>
    );
}

export default LogInPage;
