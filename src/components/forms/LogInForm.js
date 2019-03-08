import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { logIn } from '../../actions';
import './Form.css';

class LogInForm extends React.Component {
    state = { key: Math.random() }

    componentDidUpdate(prevProps) {
        if (prevProps.login.error !== this.props.login.error) {
            this.setState({ key: Math.random() })
        }
    }

    renderError({ error, touched }, apiError) {
        if (apiError) {
            return (
                <div className="ui error message">
                    <div className="header">{apiError}</div>
                </div>
            );
        }
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({ input, label, meta, type }) => {
        const className = `field ${(meta.error && meta.touched) || this.props.login.error ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} type={type} />
                {this.renderError(meta, this.props.login.error)}
            </div>
        );
    }

    onSubmit = formValues => {
        this.props.logIn(formValues);
    }


    render() {
        return (
            <form
                onSubmit={this.props.handleSubmit(this.onSubmit)}
                className="auth-form ui form error"
            >
                <Field
                    name="email"
                    component={this.renderInput}
                    label="Enter email"
                    key={this.state.key}
                />
                <Field
                    name="password"
                    component={this.renderInput}
                    label="Enter password"
                    key={this.state.key + 1}
                    type="password"
                />
                <button className="ui button primary">Submit</button>
            </form>
        )
    };
}

const validate = formValues => {
    const errors = {};

    if (!formValues.email) {
        errors.email = "You must enter an email";
    }

    if (!formValues.password) {
        errors.password = "You must enter a password";
    }

    return errors;
}


const form = reduxForm({
    form: 'logInForm',
    validate
})(LogInForm);

const mapStateToProps = state => {
    return { login: state.login };
}


export default connect(mapStateToProps, { logIn })(form);
