import React, {Component, useState} from 'react';
import SingnupFrame from './SingnupFrame';
import LoginImage from './dogjoe.jpg';
import Joi from 'joi-browser'
import './Signup.css';
import { ConsoleWriter } from 'istanbul-lib-report';

class Login extends Component {
  state = {
    account: {
      email: "",
      name: "", 
      password: "",
      confirmPassword: "",
    }
  }

  schem = {
    account: {

      email: 
      Joi.string()
      .required()
      .label('Email'),

      name: 
      Joi.string()
      .min(1)
      .required()
      .label('Name'),

      password: 
      Joi.string()
      .min(7).required()
      .regex(/[$\(\)<>]/, { invert: true })
      .required()
      .label('Password'),

      confirmPassword: 
      Joi.ref('password')
    }
  }

  validate = () => {
    const option = {abortEarly: false}
    const {error} = Joi.validate(this.state.account, this.schema, option)

    if(!error) return null

    const errors =  {};
    for(let item of error.details)
    errors[item.path[0]] = item.message;
    return errors 
  }

  doSubmit = () => {

    console.log("Submitted")
  }
  
  handlSubmit = e => {
    e.preventDefault()

    const errors = this.validate()
    console.log(errors)
    this.setState({errors: errors || {}})
    if(errors) return

    // Implementation to call the
    console.log('Submitted')
  }

  validateProperty = ({name, value}) => {
    const obj = {[name]: value}
    const schema = {[name]: this.schema[name]}
    const {error} = Joi.validate(obj, schema)
    return error ? error.details[0].message : null;
  }

  handleChange = e => {
    const account = {...this.state.account}
    account[e.currentTarget.name] = e.currentTarget.value
    this.setState({ account})
  }



  render() {
    const { account } = this.state
    return (
      <div className='signupPage'> 
      <div className='container'>
      <div className='row'>
          <div className='col-md-7 p-3'>
            <h1 className='my-5'>Signup</h1>
            <form onSubmit={this.handlSubmit}>
              <div className="form-row">

                {/* Email */}
      
                  <SingnupFrame
                    autoFocus
                    value={account.value}
                    onChange={this.handleChange}
                    type="email" 
                    name='email'
                    className="form-control" 
                    id="email" 
                    placeholder="Email"
                    />
                

                {/* Name */}
                  <SingnupFrame
                  type="name" 
                  name='name'
                  value={account.name}
                  onChange={this.handleChange}
                  className="form-control" 
                  id="Name" 
                  placeholder="Name"
                  />

                {/* Password */}
                  <SingnupFrame
                  value={account.password}
                  name='password'
                  onChange={this.handleChange}
                  type="password" 
                  class="form-control" 
                  id="Password" 
                  placeholder="Create Password"
                  />
                

                {/* Confirm Password */}

                <SingnupFrame
                  value={account.password1}
                  name='password1'
                  onChange={this.handleChange}
                  type="password" 
                  className="form-control" 
                  id="confirmPassword" 
                  placeholder="Confirm Password"
                  />
                  <small>Make sure password match</small>
              </div>
            
              {/* Signup */}
                <button type="submit" className="btn btn-primary mt-3">
                  Signup
                </button>
                
            </form>

            <div>
              <button className='btn btn-sm btn-small btn-white  btn-dark mt-5 px-5'>
              <a clasName='btn-light text-decoration none' href='/Login'>
                Login</a>
              </button>
            </div>
          </div>
          <div className="SignupImage col-md-5 p-5 mt-5">
            <div className='image'>
              <h3>IT'S NOT IMAGINED ANYMORE</h3>
              <h5>WE ARE SEEING IT WITH OUR EYES!</h5>
              <img 
              className="img-responsive mt-5" 
              style={{width: 300}} 
              src={LoginImage} 
              alt='unsplash dog'
              />
            </div>
          </div>
        </div>
      </div>
      </div> 
    )

  }
  
}

export default Login
