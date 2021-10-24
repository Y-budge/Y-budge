import React, { Component } from 'react';
import axios from 'axios';
import cors from 'cors';
import './signup.css';

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    }
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePass = this.onChangePass.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangePass(e) {
    this.setState({
    password: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    // const account = {
    //   username: this.state.username,
    //   password: this.state.password
    // }

    // console.log(account);
    // axios.post('http://localhost:5000/signup/add', {
    //   username: account.username,
    //   password: account.password
    // })
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
    // window.location = '/';
    axios.get('http://localhost:5000/auth/twitter')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="container-fluid hero-container">
            <div className="hero-image">
            <div className="hero-text">
                <h3> Login </h3>
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label>Username: </label>
                    <input
                      // required
                      disabled
                      type="text"
                      className="form-control"
                      onChange={this.onChangeUsername}
                    />
                  </div>
                  <div className="form-group">
                    <label>Password: </label>
                    <input
                      // required
                      disabled
                      type="password"
                      className="form-control"
                      onChange={this.onChangePass}
                    />
                  </div>
                  <div className="spacingWrapper">
                    <button type="submit" class="btn btn-outline-light" >Signup</button>
                  </div>
                </form>
            </div>
            </div>
      </div>
    );
  }
}
