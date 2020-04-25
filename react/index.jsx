import React from 'react';
import ReactDom from 'react-dom';
import App from './app';

import 'normalize.css';
const root = document.createElement('div');
root.setAttribute('id', 'root');
ReactDom.render(
  <App />,
  document.body.appendChild(root),
);
// if (module && module.hot) {
//   module.hot.accept();  // 开启热更新
// }
