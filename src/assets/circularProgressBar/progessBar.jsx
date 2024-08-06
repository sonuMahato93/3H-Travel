import React from 'react';
import PropTypes from 'prop-types';

export const CircularProgressBar = ({
  className = '',
  size = '100',
  color = 'currentColor',
  progress = 0,
  rotation = 0,
  children,
}) => {
  const circumference = 175.84;
  const dashOffset = circumference - (progress / 100) * circumference;

  const style = {
    transform: `rotate(${rotation}deg)`,
  };

  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      {/* CircularProgressBar SVG */}
      <svg
        width={size}
        height={size}
        className={className}
        color={color}
        viewBox="0 0 100 100"
        style={style}
      >
        <circle
          r="28"
          cx="50"
          cy="50"
          fill="transparent"
          stroke="#e0e0e0"
          strokeWidth="4px"
        ></circle>
        <circle
          r="28"
          cx="50"
          cy="50"
          fill="transparent"
          stroke={color}
          strokeWidth="4px"
          strokeDasharray={`${circumference}px`}
          strokeDashoffset={`${dashOffset}px`}
          transform={`rotate(-90 ${100 / 2} ${100 / 2})`}
        ></circle>
      </svg>

      {/* RiFileTextLine centered in the middle of the CircularProgressBar */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        {children}
      </div>
    </div>
  );
};

CircularProgressBar.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  progress: PropTypes.number.isRequired,
  rotation: PropTypes.number,
  children: PropTypes.node,
};
