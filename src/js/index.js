import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import jQuery from 'jquery';
import _ from 'lodash';

import Login from './login';
import Register from './register';
import BandList from './bandList';

let routes = (
  <Router>
    <Route path="/" component={App}>
      <Route path="login" component={Login} />
      <Route path="register" component={Register} />
    </Route>
  </Router>
)
ReactDOM.render(routes, document.getElementById('app'));
