import React from 'react';
import ReactDom from 'react-dom';
import App from './app';

import 'normalize.css';
import './styles/index.less';

const root = document.createElement('div');
root.setAttribute('id', 'root');
ReactDom.render(
  <App />,
  document.body.appendChild(root),
);
