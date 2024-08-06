import React from 'react';
import PropTypes from 'prop-types';

export const OverdueIcon = ({
  color = 'currentColor',
  className = '',
  size = '30',
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    //xmlns:xlink="http://www.w3.org/1999/xlink"
    aria-hidden="true"
    role="img"
    //   class="component-iconify MuiBox-root css-j08fpn iconify iconify--solar"
    //   width="1em"
    //   height="1em"
    viewBox="0 0 24 24"
  >
    <path
      fill={color}
      d="M18.75 9v.704c0 .845.24 1.671.692 2.374l1.108 1.723c1.011 1.574.239 3.713-1.52 4.21a25.794 25.794 0 0 1-14.06 0c-1.759-.497-2.531-2.636-1.52-4.21l1.108-1.723a4.393 4.393 0 0 0 .693-2.374V9c0-3.866 3.022-7 6.749-7s6.75 3.134 6.75 7Z"
      opacity=".5"
    ></path>
    <path
      fill={color}
      d="M12.75 6a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0V6ZM7.243 18.545a5.002 5.002 0 0 0 9.513 0c-3.145.59-6.367.59-9.513 0Z"
    ></path>
  </svg>
);

OverdueIcon.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
