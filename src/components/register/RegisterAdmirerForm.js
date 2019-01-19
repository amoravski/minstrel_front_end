import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { registerAdmirer } from '../../actions';

class RegisterAdmirerForm extends React.Component {
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({ input, label, meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} />
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit = formValues => {
        this.props.registerAdmirer(formValues);
    }

    render () {
        return (
            <form
                onSubmit={this.props.handleSubmit(this.onSubmit)}
                className="ui form error"
            >
                <Field 
                    className="field"
                    name="username"
                    component={this.renderInput}
                    label="Enter name"
                />
                <Field 
                    className="field"
                    name="email"
                    component={this.renderInput}
                    label="Enter email"
                />
                <Field 
                    className="field"
                    name="password"
                    component={this.renderInput}
                    label="Enter password"
                />
                <Field 
                    className="field"
                    name="password_repeat"
                    component={this.renderInput}
                    label="Repeat password"
                    type="password"
                />
                <Field 
                    className="field"
                    name="preferred_categories"
                    component={this.renderInput}
                    label="Category placeholder"
                />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

const validate = formValues => {
    const errors ={};

    if(!formValues.username) {
        errors.username = "You must enter a username";
    }

    if(!formValues.email) {
        errors.email = "You must enter an email";
    }
    
    if(!formValues.password) {
        errors.password = "You must enter a password";
    }

    if(!formValues.password_repeat) {
        errors.password_repeat = "Please repeat password";
    }

    if(formValues.password_repeat !== formValues.password) {
        errors.password_repeat = "Passwords do not match";
    }

    return errors;
}

const form = reduxForm({
    form: 'registerAdmirerForm',
    validate
})(RegisterAdmirerForm);

export default connect(null, { registerAdmirer })(form);
