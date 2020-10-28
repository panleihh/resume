import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
// import createBrowserHistory from 'history/createBrowserHistory';

import App from './App';
import Demo from './pages/Demo';

const router = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/timer" component={Demo} />
      <Route exact path="/" component={App} />
    </Switch>
  </HashRouter>
)

export default router;