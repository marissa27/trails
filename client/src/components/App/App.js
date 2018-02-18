import React, { Component } from 'react';
import HomePage from '../HomePage/HomePage';
import Header from '../Header/Header';
import logo from '../../logo.svg';
import './App.css';

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
