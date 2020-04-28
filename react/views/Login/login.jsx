import React from 'react';

import loginLess from './login.less';
console.log(loginLess, '::-----------');

const LoginForm = () => (
  <div className={loginLess.foo}>
    <button type="button" className="main-btn">哈哈哈</button>
  </div>
);

export default LoginForm;
