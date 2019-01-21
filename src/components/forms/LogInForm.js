import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { logIn } from '../../actions';

class LogInForm extends React.Component {
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
        this.props.logIn(formValues);
    }


    render () {
        return (
            <form
                onSubmit={this.props.handleSubmit(this.onSubmit)}
                className="ui form error"
            >
                <Field
                    name="email"
                    component={this.renderInput}
                    label="Enter email"
                />
                <Field
                    name="password"
                    component={this.renderInput}
                    label="Enter password"
                />
                <button className="ui button primary">Submit</button>
            </form>
        )
    };
}

const validate = formValues => {
    const errors ={};

    if(!formValues.email) {
        errors.email = "You must enter an email";
    }

    if(!formValues.password) {
        errors.password = "You must enter a password";
    }

    return errors;
}


const form = reduxForm({
    form: 'logInForm',
    validate
})(LogInForm);

export default connect(null, { logIn })(form);
