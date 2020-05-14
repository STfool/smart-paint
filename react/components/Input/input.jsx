import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type, placeholder, className }) => (
  <input placeholder={placeholder} type={type} className={className} />
);

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  placeholder: '请输入',
  className: '',
};

export default Input;
