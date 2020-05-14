import React from 'react';
import {
  HashRouter as Router, Switch, Redirect, Route,
} from 'react-router-dom';
import { Login } from './views';
import Wrap from './layout/wrap';
import app from './app.less';

function App() {
  return (
    <div className={app.homepage}>
      <Router>
        <Switch>
          <Route path="/" exact render={() => (<Redirect to="/login" />)} />
          <Route path="/login" exact component={Login} />
          <Route path="/app" component={Wrap} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
