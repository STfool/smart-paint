import React from 'react';
import PropTypes from 'prop-types';

const SvgIcon = ({ svgPath }) => (<div>{svgPath}</div>);

SvgIcon.propTypes = {
  svgPath: PropTypes.string,
};

SvgIcon.defaultProps = {
  svgPath: '.',
};

export default SvgIcon;
