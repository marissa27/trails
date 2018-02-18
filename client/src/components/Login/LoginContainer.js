import React, { Component } from 'react';
import Login from './Login';
import SignUp from './SignUp';

export default class LoginContainer extends Component {
  render() {
    console.log(this.props.match.path)
    if (this.props.match.path === '/login') {
      console.log('first block')
      return (
        <Login />
      );
    } else {
      return (
        <SignUp />
      );
    }
  }
}
