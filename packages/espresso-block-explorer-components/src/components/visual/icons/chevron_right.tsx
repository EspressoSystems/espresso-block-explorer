import React from 'react';
import SVGIconBase from './svg_icon_base';

/**
 * ChevronRight represents a chevron pointing to the right.
 */
const ChevronRight: React.FC<React.SVGProps<SVGElement>> = (props) =>
  React.createElement(
    SVGIconBase,
    {
      ...props,
      viewBox: '0 -960 960 960',
    },
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"
      transform="translate(2, 2)"
    />,
  );

export default ChevronRight;
