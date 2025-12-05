import React from 'react';
import SVGIconBase from './svg_icon_base';

/**
 * ArrowUpward represents an arrow pointing upwards
 */
const ArrowUpward: React.FC<React.SVGProps<SVGElement>> = (props) =>
  React.createElement(
    SVGIconBase,
    props,
    // Material icon:
    // https://fonts.google.com/icons?selected=Material+Icons+Outlined:arrow_upward:&icon.query=arrow+u&icon.set=Material+Icons&icon.size=24&icon.color=%23e3e3e3
    <>
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
    </>,
  );

export default ArrowUpward;
