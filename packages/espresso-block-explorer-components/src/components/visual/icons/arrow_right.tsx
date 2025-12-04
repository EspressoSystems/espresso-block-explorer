import React from 'react';
import SVGIconBase from './svg_icon_base';

/**
 * ArrowRight represents an arrow pointing to the right.
 */
const ArrowRight: React.FC<React.SVGProps<SVGElement>> = (props) =>
  React.createElement(
    SVGIconBase,
    props,
    <path d="M12 20L10.95 18.925L17.125 12.75H4L4 11.25H17.125L10.95 5.075L12 4L20 12L12 20Z" />,
  );

export default ArrowRight;
