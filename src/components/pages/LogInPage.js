import React from 'react';

import Header from '../Header';
import LogInForm from '../forms/LogInForm';
import BackgroundImage from '../../assets/register-bg.svg';
import './LogInPage.css';

const LogInPage = () => {
    return (
        <div className="log-in-page" style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: '100% auto', backgroundRepeat: 'no-repeat'}}>
            <Header login="active" />
            <div className="log-in-form ui computer only centered grid" >
                <LogInForm />
            </div>
            <div className="log-in-form ui mobile only centered grid" >
                <LogInForm />
            </div>

        </div>
    );
}

export default LogInPage;
