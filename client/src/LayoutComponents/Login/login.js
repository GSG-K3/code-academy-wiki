import React, { Component } from 'react';
import './login.css';

class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    return (
      <div>
        <div className='form'>
          <input
            className='FormInput'
            type='text'
            name='username'
            placeholder='Enter your user name'
            required
          />
          <input
            className='FormInput'
            type='password'
            name='password'
            placeholder='Enter your password'
            required
          />

          <button name='submit' type='submit' className='login-button'>
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default login;
