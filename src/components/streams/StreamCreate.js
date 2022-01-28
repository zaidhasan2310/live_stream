import React from "react";
import { Field, reduxForm } from "redux-form";

const renderInput = ({ label, input, meta }) => {
  const className = `field ${meta.error && meta.touched ? "error" : ""}`;
  return (
    <div className={className}>
      <label>{label}</label>
      <input {...input} autoComplete="off" />
      <div>{renderError(meta)}</div>
    </div>
  );
};
const renderError = ({ error, touched }) => {
  if (touched && error) {
    return (
      <div className="ui error messsage">
        <div className="headaer">{error}</div>
      </div>
    );
  }
};
const onSubmit = (formValues) => {
  console.log(formValues);
};
const StreamCreate = (props) => {
  return (
    <form className="ui form error" onSubmit={props.handleSubmit(onSubmit)}>
      <Field name="title" label="Enter Title" component={renderInput} />
      <Field
        name="description"
        label="Enter Description"
        component={renderInput}
      />
      <button className="ui button primary">Submit</button>
    </form>
  );
};
const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "Enter a title";
  }
  if (!formValues.description) {
    errors.description = "Enter a description";
  }
  return errors;
};

export default reduxForm({ form: "streamCreate", validate })(StreamCreate);
