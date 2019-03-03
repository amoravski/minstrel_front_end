import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { registerAdmirer } from '../../actions';

class RegisterAdmirerForm extends React.Component {
    state = { key: Math.random() }

    componentDidUpdate(prevProps) {
        if (prevProps.errors !== this.props.errors) {
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
        const className = `field ${(meta.error && meta.touched) || this.props.errors[input.name] ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} type={type} />
                {this.renderError(meta, this.props.errors[input.name])}
            </div>
        );
    }

    onSubmit = formValues => {
        this.props.registerAdmirer(formValues);
    }

    render() {
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
                    key={this.state.key}
                />
                <Field
                    className="field"
                    name="email"
                    component={this.renderInput}
                    label="Enter email"
                    key={this.state.key + 1}
                />
                <Field
                    className="field"
                    name="password"
                    component={this.renderInput}
                    label="Enter password"
                    type="password"
                    key={this.state.key + 2}
                />
                <Field
                    className="field"
                    name="password_repeat"
                    component={this.renderInput}
                    label="Repeat password"
                    type="password"
                    key={this.state.key + 3}
                />
                <Field
                    className="field"
                    name="categories"
                    component={this.renderInput}
                    label="Category placeholder"
                    key={this.state.key + 4}
                />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

const validate = formValues => {
    const errors = {};

    if (!formValues.username) {
        errors.username = "You must enter a username";
    }

    if (!formValues.email) {
        errors.email = "You must enter an email";
    }

    if (!formValues.password) {
        errors.password = "You must enter a password";
    }

    if (!formValues.password_repeat) {
        errors.password_repeat = "Please repeat password";
    }

    if (formValues.password_repeat !== formValues.password) {
        errors.password_repeat = "Passwords do not match";
    }

    return errors;
}

const form = reduxForm({
    form: 'registerAdmirerForm',
    validate
})(RegisterAdmirerForm);

const mapStateToProps = state => {
    return { errors: state.register };
}


export default connect(mapStateToProps, { registerAdmirer })(form);
