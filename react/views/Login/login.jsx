import React from 'react';
import { Input, Button } from '@components';

import loginLess from './login.less';

const LoginForm = () => {
  const handleBtn = () => {
    console.log(11);
  };

  return (
    <form className={loginLess.foo}>
      <Input type="text" placeholder="请输入账号" />
      <Input type="text" placeholder="请输入密码" />
      <Button size="large" onClick={handleBtn} />
    </form>
  );
};

export default LoginForm;
