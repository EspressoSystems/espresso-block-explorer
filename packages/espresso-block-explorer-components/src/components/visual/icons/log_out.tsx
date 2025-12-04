import React from 'react';
import SVGIconBase from './SVGIconBase';

/**
 * LogOut is an icon representing the action of logging out.
 */
const LogOut: React.FC<React.SVGProps<SVGElement>> = (props) =>
  React.createElement(
    SVGIconBase,
    props,
    // Uses Material Design Icon:
    // https://fonts.google.com/icons?selected=Material+Icons+Outlined:logout:&icon.query=logout&icon.size=24&icon.color=%23e3e3e3&icon.set=Material+Icons
    <>
      <g>
        <path d="M0,0h24v24H0V0z" fill="none" />
      </g>
      <g>
        <path d="M17,8l-1.41,1.41L17.17,11H9v2h8.17l-1.58,1.58L17,16l4-4L17,8z M5,5h7V3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h7v-2H5V5z" />
      </g>
    </>,
  );

export default LogOut;
