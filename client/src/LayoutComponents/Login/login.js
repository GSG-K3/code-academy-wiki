import React, { Component } from 'react';
import axios from 'axios';
import './login.css';

class login extends Component {
  state = {
    email: '',
    password: '',
    statusMsg: '',
    login: false,
  };

  changName = (event) => {
    const { target } = event;
    const { value, name } = target;
    this.setState({ [name]: value });
  };

  goLogedin = (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    axios
      .post('/api/login', { email, password })
      .then((res) => {
        this.setState({ statusMsg: res.data.msg, login: true });
      })
      .catch((err) => {
        this.setState({ statusMsg: err.response.data.msg });
      });
  };

  render() {
    const { email, password, statusMsg } = this.state;
    return (
      <div>
        <form onSubmit={this.goLogedin}>
          <div className='form'>
            <h1 className='form-title'>Login as admin</h1>
            <input
              className='FormInput'
              type='email'
              name='email'
              placeholder='Enter your email'
              value={email}
              onChange={this.changName}
              required
            />
            <input
              className='FormInput'
              value={password}
              type='password'
              name='password'
              placeholder='Enter your password'
              onChange={this.changName}
              required
            />
            <button className='login-button' type='submit'>
              login
            </button>
            <p className='form-error'> {statusMsg}</p>
          </div>
        </form>
      </div>
    );
  }
}

export default login;
