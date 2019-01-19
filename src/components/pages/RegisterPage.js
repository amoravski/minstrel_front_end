import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../Header';
import './Register.css';

const RegisterPage = () => {
    return (
        <div className="register ui">
            <Header register="active" />
            <div className="register-types ui centered grid">
                <div className="row">
                    Sign up as
                </div>
                <div className="row">
                    <Link className="ui button" to="/register/performer">Performer</Link>
                    <Link className="ui button" to="/register/admirer">Admirer</Link>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;
