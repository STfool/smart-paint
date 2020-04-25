import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Login } from './views';
import './app.less';

function App() {
  return (
    <div className="homepage">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact components={<Login />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
