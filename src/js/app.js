import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router';

import App from './components/app';
import Login from './components/login';
import Register from './components/register';
import BandList from './components/bandList';

let routes = (
  <Router>
    <Route path="/" component={App}>
      <Route component={BandList} />
      <Route path="login" component={Login} />
      <Route path="register" component={Register} />
    </Route>
  </Router>
)
ReactDOM.render(routes, document.getElementById('app'));
