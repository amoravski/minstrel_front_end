import React from 'react';

import Header from '../Header';
import RegisterAdmirerForm from '../forms/RegisterAdmirerForm';
import './Register.css';

const RegisterAdmirerPage = () => {
    return (
        <div className="register ui">
            <Header register="active" />
            <div className="register-types ui computer only centered grid">
                <RegisterAdmirerForm />
            </div>
            <div className="register-types ui mobile only centered grid">
                <RegisterAdmirerForm />
            </div>

        </div>
    );
}

export default RegisterAdmirerPage;
