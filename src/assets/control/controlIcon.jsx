import React from 'react';
import PropTypes from 'prop-types';

export const ControlIcon = ({ onClick, color, className, size, ...props }) => (
  <svg
    width={size}
    height={size}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    onClick={onClick}
    {...props}
    viewBox="0 0 24 24"
  >
    <path
      fill={color}
      d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64Z"
    ></path>
  </svg>
);

ControlIcon.propTypes = {
  onClick: PropTypes.func, // Prop validation for onClick handler
  color: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string,
};
