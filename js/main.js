require('../css/main.styl')
import React from 'react'
import {render} from 'react-dom'
import {HashRouter, Match, Miss} from 'react-router'
import Redirect from 'react-router/Redirect'
import Menu from './menu'
import Standards from './standards'
import TShirts from './tshirts'

render(
<HashRouter>
  <div>
    <Menu/>

    <Match pattern="/tshirts" component={TShirts}/>
    <Match pattern="/standards" component={Standards}/>
    <Miss render={() => (<Redirect to="/tshirts"/>)}/>
  </div>
</HashRouter>, 
document.getElementById('app'))