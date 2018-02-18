import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1>Welcome to ◀ App ⛰ Name ▶</h1>
        <Link to={'/login'}>
          <button>Login</button>
        </Link>
        <Link to={'/signup'}>
          <button>Sign Up</button>
        </Link>
      </header>
    );
  }
}
