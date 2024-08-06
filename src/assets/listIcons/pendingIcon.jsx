import React from 'react';
import PropTypes from 'prop-types';

export const PendingIcon = ({
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
    //   class="component-iconify MuiBox-root css-1wlaqig iconify iconify--solar"
    //   width="1em"
    //   height="1em"
    viewBox="0 0 24 24"
  >
    <g fill={color} fillRule="evenodd" clipRule="evenodd">
      <path d="M17 17a5 5 0 1 0 0-10a5 5 0 0 0 0 10Zm.75-7a.75.75 0 0 0-1.5 0v1.846c0 .18.065.355.183.491l1 1.154a.75.75 0 0 0 1.134-.982l-.817-.943V10Z"></path>
      <path
        d="M1.25 7A.75.75 0 0 1 2 6.25h8a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 7Zm0 5a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Zm0 5a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Z"
        opacity=".5"
      ></path>
    </g>
  </svg>
);

PendingIcon.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
