import React from 'react';
import loginLess from './login.less';

const LoginForm = () => (
  <form className={loginLess.foo}>
    <input type="text" placeholder="请输入账号" />
    <input type="text" placeholder="请输入密码" />
    <button type="button" className="main-btn">哈哈哈</button>
  </form>
);

export default LoginForm;
