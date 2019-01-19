import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { registerAdmirer } from '../../actions';

class RegisterAdmirerForm extends React.Component {
    renderInput = ({ input, label, className }) => {
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} />
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
                    name="name"
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
                    name="password-repeat"
                    component={this.renderInput}
                    label="Repeat password"
                />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

const form = reduxForm({
    form: 'registerAdmirerForm'
})(RegisterAdmirerForm);

export default connect(null, { registerAdmirer })(form);
