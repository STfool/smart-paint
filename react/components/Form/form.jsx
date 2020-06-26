import React from 'react';

import styleName from './form.module.less';

const Form = () => (
  <form className={styleName.formWrap}>
    <div>
      <label htmlFor="username-login">
        <span>姓名：</span>
        <input id="username-login" placeholder="请输入用户名/邮箱" type="text" required />
      </label>
    </div>
    <div>
      <label htmlFor="password-login">
        <span>密码：</span>
        <input id="password-login" placeholder="请输入密码" type="password" pattern="\d{6}" />
      </label>
    </div>
    <div>
      <label htmlFor="repeat-password-login">
        <span>重复密码：</span>
        <input id="repeat-password-login" placeholder="请输入密码" type="password" pattern="\d{6}" />
      </label>
    </div>
    <div className={styleName['btn-login']}>登录</div>
  </form>
);

export default Form;
