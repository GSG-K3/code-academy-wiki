import React, { Component } from 'react';
import axios from 'axios';
import './login.css';
import AdminPage from '../AdminPage';
class login extends Component {
  state = {
    email: '',
    password: '',
    errorMsg: '',
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
      .post('/api/login', { email: email.toLowerCase(), password })
      .then((res) => {
        this.setState({ login: true });
      })
      .catch((err) => this.setState({ errorMsg: err.response.data.msg }));
  };

  render() {
    const { email, password, login, errorMsg } = this.state;
    if (!login) {
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
            </div>
          </form>
          <span>{errorMsg}</span>
        </div>
      );
    } else {
      return <AdminPage />;
    }
  }
}

export default login;
