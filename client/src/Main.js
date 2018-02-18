import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './components/App/App';
import LoginContainer from './components/Login/LoginContainer';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route exact path='/login' component={LoginContainer}/>
      <Route exact path='/signup' component={LoginContainer}/>

    </Switch>
  </main>
);

export default Main;
