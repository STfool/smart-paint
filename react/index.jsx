import React from 'react';
import ReactDom from 'react-dom';
import App from './app';

import 'normalize.css';

ReactDom.render(
  <App />,
  document.body.appendChild(document.createElement('div')),
);
