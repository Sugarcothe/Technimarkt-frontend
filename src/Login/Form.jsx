import React, { Component } from 'react';
import Joi from 'joi-browser';
import LoginFrame from './LoginFrame';

class Form extends Component {
  state = {
    data: {},
    errors: {}
  }


  validate = () => {
    const option = {abortEarly: false}
    const {error} = Joi.validate(this.state.data, this.schema, option)

    if(!error) return null

    const errors = {};
    for(let item of error.details)
      errors[item.path[0]] = item.message;
    return errors
  }

  validateProperty = ({name, value }) => {
    const obj = {[name]: value}
    const schema = {[name]:this.schema[name]}
    const {error} = Joi.validate(obj, schema)
    return error ? error.details[0].message : null;
  }
  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate()
    console.log(errors)
    this.setState({ errors: errors || {}})
    if (errors) return

    this.doSubmit()
  }

  handleChange = ({currentTarget: input}) => {
    const errors = {...this.state.errors}
    const errorMessage = this.validateProperty(input)
    if(errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name]
    

    let data = {...this.state.data}
    data[input.name] = input.value
    this.setState({ data, errors })
  }

  renderButton(label) {
    return (
    <button type="submit" 
      disabled={this.validate()}
      className="btn btn-primary text-white mt-5">
      {label}
    </button>
    )
  }

  renderInput(name) {
    const {data, errors } = this.state

    return (
      <LoginFrame
      id={name} 
      name={name}
      type={name}
      placeholder={name}
      value={data[name]}
      error={errors[name]}
      onChange={this.handleChange}
    />
    )
  }
}

export default Form
