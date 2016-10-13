require('../css/main.styl')
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, IndexRedirect, Redirect, Route, hashHistory } from 'react-router'
import App from './app'
import Standards from './standards'
import TShirts from './tshirts'
import ActiveCard from './activecard'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="/standards" />
      <Route path="/standards" component={Standards}>
        <Route path="/standard/:val" component={ActiveCard}/>
      </Route>
      <Route path="/tshirts" component={TShirts}>
        <Route path="/tshirt/:val" component={ActiveCard}/>
      </Route>
      <Redirect from="*" to="/"/>
    </Route>
  </Router>,
document.getElementById('app'))