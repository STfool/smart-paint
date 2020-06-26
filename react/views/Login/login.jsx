import React from 'react';
import { Form } from '@components';

const LoginForm = () => {
  const handleBtn = () => {
    console.log(11);
  };

  return (
    <Form handleBtn={handleBtn} />
  );
};

export default LoginForm;
