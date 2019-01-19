import React from 'react';

import Header from '../Header';
import './Register.css';
import RegisterAdmirerForm from '../register/RegisterAdmirerForm';

const RegisterAdmirerPage = () => {
    return (
        <div className="register ui">
            <Header register="active" />
            <div className="register-types ui">
                <RegisterAdmirerForm />
            </div>
        </div>
    );
}

export default RegisterAdmirerPage;
