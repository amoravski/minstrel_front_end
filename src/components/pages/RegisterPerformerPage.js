import React from 'react';

import Header from '../Header';
import './Register.css';
import RegisterPerformerForm from '../register/RegisterPerformerForm';

const RegisterPerformerPage = () => {
    return (
        <div className="register ui">                                           
            <Header register="active" />
            <div className="register-types ui">
                <RegisterPerformerForm className="register-types" />
            </div>
        </div>

    );
}

export default RegisterPerformerPage;
