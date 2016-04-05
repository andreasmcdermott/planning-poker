require('../css/main.styl');
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRedirect, Redirect, Route, hashHistory } from 'react-router';
import App from './app';
import Standard from './standard';
import TShirt from './tshirt';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="/standard" />
      <Route path="/standard" component={Standard}/>
      <Route path="/tshirt" component={TShirt}/>
      <Redirect from="*" to="/"/>
    </Route>
  </Router>,
document.getElementById('app'));
