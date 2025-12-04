import React from 'react';
import SVGIconBase from './svg_icon_base';

/**
 * CheckCircleFilled represents a circle with a negative space for a check mark.
 */
const CheckCircleFilled: React.FC<React.SVGProps<SVGElement>> = (props) =>
  React.createElement(
    SVGIconBase,
    props,
    // Google Material Icon:
    // https://fonts.google.com/icons?selected=Material+Icons:check_circle:&icon.query=check_circle&icon.size=24&icon.color=%23e3e3e3&icon.set=Material+Icons&icon.style=Filled
    <>
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </>,
  );

export default CheckCircleFilled;
