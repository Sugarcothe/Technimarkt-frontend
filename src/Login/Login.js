import React, { Component } from 'react'
import Form from './Form';
import Joi from 'joi-browser'
import LoginImage from './robot.jpg';
import './Login.css'

class Login extends Form {
  state = {
    data: { email: "", password: ""},
    errors: {}
  };

  schema = {
    email: Joi.string().required().label('Email'),
    password: Joi.string().min(8).required().regex(/[$\(\)<>]/, { invert: true }).required().label('Password')
  }


  doSubmit = () => {
    // Implemtation to Call the server
    console.log('Submitted')
  }

  render() {
   
    return (
      <div className='loginPage'> 
      <div className='container'>
      <div className='row'>
          <div className='col-md-7 p-5'>
            <h1 className='mt-5'>Login</h1>
            <form onSubmit={this.handleSubmit}>

              {/* Email */}
              {this.renderInput('email', 'Email')}
              {/* Password */}
              {this.renderInput('password', 'Password')} 
              {/* Submit Button */}
              {this.renderButton("Login")}
  
              <div>
                <small 
                className='btn btn-sm btn-smore  btn-dark mt-5 px-5'>
                  <a href='/Signup'>Signup</a></small>
              </div>
            </form>
          </div>
     
          <div className="LoginImage col-md-5 p-5">
            <div className='image'>
              <h3>DO YOU KNOW</h3>
              <h5>EVERYTHING GOOD HAS COME?</h5>
              <img className="img-responsive" style={{width: 300}} src={LoginImage} alt='unsplash dog'/>
            </div>
          </div>
        </div>
      </div>
      </div> 
    )
  }
  
}

export default Login
