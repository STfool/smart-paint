import React from 'react';
import {
  HashRouter as Router, Switch, Redirect, Route,
} from 'react-router-dom';
import { Login } from './views';
import './app.less';

function App() {
  return (
    <div className="homepage">
      <Router>
        <Switch>
          <Route path="/" exact render={() => (<Redirect to="/login" />)} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
