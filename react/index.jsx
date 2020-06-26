import React from 'react';
import ReactDom from 'react-dom';
import 'normalize.css';
import './styles/index.less';

import App from './app';

const root = document.createElement('div');
root.setAttribute('id', 'root');
ReactDom.render(
  <App />,
  document.body.appendChild(root),
);
