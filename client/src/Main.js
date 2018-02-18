import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './components/App/App';
import Login from './components/Login/Login';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/signup' component={Login}/>

    </Switch>
  </main>
);

export default Main;
