import React, { Component } from 'react';
import './register.css';
import axios from 'axios';

class register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      repassword: '',
      registered: false,
      errorMsg: '',
    };
  }

  changeInput = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const gsg = '@gazaskygeeks.com';
    const { username, email, password, repassword } = this.state;
    // make new object to concatenate between user name and @gazaskygeeks.com and send them to back end side
    const info = {
      username,
      email: email + gsg,
      password,
      repassword,
    };

    axios
      .post('/api/signup', info)
      .then((res) => {
        if (res.status == 200) {
          this.setState({ registered: true });
        } else {
          this.setState({
            errorMsg: 'There is somthing wrong in registration proccess',
          });
        }
      })
      .catch((err) => this.setState({ errorMsg: err.response.data.message }));
  };

  render() {
    const { username, email, password, repassword, errorMsg } = this.state;

    return (
      <div>
        <form className='form' onSubmit={this.handleSubmit}>
          <h1 className='form-title'>Register as admin</h1>
          <input
            className='FormInput'
            placeholder='Name'
            label='Name'
            name='username'
            value={username}
            onChange={this.changeInput}
            required
          />
          <div className='form-text'>
            <label>
              <input
                required
                // characters that allowed in email field
                pattern='^[a-zA-Z0-9]((?!(\.|))|\.(?!(_|\.))|[a-zA-Z0-9]){4,255}[a-zA-Z0-9]$'
                className='FormInput , email'
                id='emailField'
                label='Email'
                name='email'
                type='text'
                placeholder='User name:'
                autoComplete='off'
                value={email}
                onChange={this.changeInput}
              />
              <label htmlFor='emailField' className='static-value'>
                @gazaskygeeks.com
              </label>
            </label>
          </div>

          <input
            required
            type='password'
            className='FormInput'
            placeholder='password'
            label='password'
            name='password'
            value={password}
            onChange={this.changeInput}
          />
          <input
            required
            type='password'
            className='FormInput'
            placeholder='re-password'
            label='re-password'
            name='repassword'
            value={repassword}
            onChange={this.changeInput}
          />
          <button type='submit' className='SignBtn' name='sign up'>
            sign Up
          </button>
        </form>
        <p>{errorMsg}</p>
      </div>
    );
  }
}

export default register;
