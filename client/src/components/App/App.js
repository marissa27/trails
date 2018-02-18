import React, { Component } from 'react';
import HomePage from '../HomePage/HomePage';
import Header from '../Header/Header';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <HomePage />
      </div>
    );
  }
}
