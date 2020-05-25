import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  children, size, className, onClick,
}) => (<button type="button" onClick={onClick} className={`main-btn ${size} ${className}`}>{children}</button>);

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  size: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  children: <span>确定</span>,
  size: 'default',
  className: '',
  onClick: () => {},
};

export default Button;
