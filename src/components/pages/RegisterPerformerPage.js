import React from 'react';

import Header from '../Header';
import RegisterPerformerForm from '../forms/RegisterPerformerForm';
import './Register.css';

const RegisterPerformerPage = () => {
    return (
        <div className="register ui">
            <Header register="active" />
            <div className="register-types ui computer only centered grid">
                <RegisterPerformerForm />
            </div>
            <div className="regiser-types ui mobile only centered grid">
                <RegisterPerformerForm />
            </div>
        </div>

    );
}

export default RegisterPerformerPage;
