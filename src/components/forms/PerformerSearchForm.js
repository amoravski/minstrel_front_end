import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { getPerformers, filterPerformers } from '../../actions';

class PerformerSearchForm extends React.Component {
    renderInput = ({ input, label, meta }) => {
        return (
            <div className="">
                <label>{label}</label>
                <input {...input} />
            </div>
        );
    }

    onChange = formValues => {
        this.props.getPerformers([formValues.target.name, formValues.target.value]);
        //this.props.filterPerformers([formValues.target.name, formValues.target.value]);
    }

    render() {
        return (
            <form
                className="ui form error"
            >
                <Field
                    name="categories"
                    component={this.renderInput}
                    label="Categories"
                    key="categories"
                    onChange={this.onChange}
                />
                <Field
                    name="location"
                    component={this.renderInput}
                    label="Location"
                    key="location"
                    onChange={this.onChange}
                />
            </form>
        )
    };
}

const form = reduxForm({
    form: 'performerSearchForm'
})(PerformerSearchForm);

export default connect(null, { getPerformers, filterPerformers })(form);
