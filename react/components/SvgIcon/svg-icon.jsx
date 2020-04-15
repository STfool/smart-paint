import React from 'react';
import PropTypes from 'prop-types';

import './svg-icon.less';

const SvgIcon = ({ name }) => {
  let svgName;
  try {
    svgName = require(`@svg/${name}.svg`);
  } catch (e) {
    throw new Error('error: svg图片地址出错');
  }

  const checkMark = () => ({
    __html: svgName,
  });
  return (
    <div className="svg-icon" dangerouslySetInnerHTML={checkMark()} />
  );
};

SvgIcon.propTypes = {
  name: PropTypes.string,
};

SvgIcon.defaultProps = {
  name: '',
};

export default SvgIcon;
