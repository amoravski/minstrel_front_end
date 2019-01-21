import React from 'react';

import Header from '../Header';
import LogInForm from '../forms/LogInForm';
import './LogIn.css';

const LogInPage = () => {
    return (
        <div className="log-in-page">
            <Header login="active" />
            <div className="log-in-form" >
                <LogInForm  />
            </div>
        </div>
    );
}

export default LogInPage;
