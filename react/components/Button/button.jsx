import React from 'react';
import PropTypes from 'prop-types';
import './button.less';

const Button = ({ children }) => (<button type="button">{children}</button>);

Button.propTypes = {
  children: PropTypes.element,
};

Button.defaultProps = {
  children: <span>确定</span>,
};

export default Button;
