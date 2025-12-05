import React from 'react';
import SVGIconBase from './svg_icon_base';

/**
 * ArrowDownward represents an arrow pointing downwards.
 */
const ArrowDownward: React.FC<React.SVGProps<SVGElement>> = (props) =>
  React.createElement(
    SVGIconBase,
    props,
    // Material icon:
    // https://fonts.google.com/icons?selected=Material+Icons+Outlined:arrow_downward:&icon.query=arrow+down&icon.set=Material+Icons&icon.size=24&icon.color=%23e3e3e3
    <>
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
    </>,
  );

export default ArrowDownward;
