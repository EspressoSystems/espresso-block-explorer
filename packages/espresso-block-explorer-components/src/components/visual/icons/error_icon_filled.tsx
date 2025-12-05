import React from 'react';
import SVGIconBase from './svg_icon_base';

/**
 * ErrorIconFilled is an icon representation of an error state, typically shown
 * as an exclamation mark within a circle.
 */
const ErrorIconFilled: React.FC<React.SVGProps<SVGElement>> = (props) =>
  React.createElement(
    SVGIconBase,
    props,
    // Material Icon
    // https://fonts.google.com/icons?selected=Material+Icons:error:&icon.query=error&icon.size=24&icon.color=%23e3e3e3&icon.set=Material+Icons&icon.style=Filled
    <>
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
    </>,
  );

export default ErrorIconFilled;
