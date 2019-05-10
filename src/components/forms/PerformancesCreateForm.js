import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { createPerformance } from '../../actions';
import './Form.css';

class PerformancesCreateForm extends React.Component {
    state = { key: Math.random() }

    renderInput = ({ input, label, meta, type }) => {
        const className = `field ${(meta.error && meta.touched) ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} type={type} />
            </div>
        );
    }

    onSubmit = formValues => {
        this.props.createPerformance(formValues, this.props.user.jwt);
    }

    render () {
        return (
            <form
                onSubmit={this.props.handleSubmit(this.onSubmit)}
                className="performance-create-form ui form error"
            >
                <Field
                    name="title"
                    component={this.renderInput}
                    label="Enter title"
                    key={this.state.key}
                />
                <Field
                    name="text"
                    component={this.renderInput}
                    label="Enter text"
                    key={this.state.key + 1}
                />
                <Field
                    name="location"
                    component={this.renderInput}
                    label="Enter location"
                    key={this.state.key + 2}
                />
                <Field
                    name="date"
                    component={this.renderInput}
                    label="Enter date"
                    key={this.state.key + 3}
                />
                <button className="ui button primary">Submit</button>
            </form>
        )
    }
}

const validate = formValues => {
    const errors = {};

    if (!formValues.title) {
        errors.email = "You must enter a title";
    }

    if (!formValues.text) {
        errors.password = "You must enter text";
    }

    if (!formValues.location) {
        errors.password = "You must enter location";
    }

    if (!formValues.date) {
        errors.password = "You must enter date";
    }

    return errors;
}


const form = reduxForm({
    form: 'performerCreateForm',
    validate
})(PerformancesCreateForm);

const mapStateToProps = state => {
    return {
        performerCreate: state.performerCreate,
        user: state.user
    };
}

export default connect(mapStateToProps, { createPerformance })(form);
