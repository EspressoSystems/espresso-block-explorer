import React from 'react';
import SVGIconBase from './svg_icon_base';

/**
 * Menu is an icon of a hamburger menu
 */
const Menu: React.FC<React.SVGProps<SVGElement>> = (props) =>
  React.createElement(
    SVGIconBase,
    props,
    <path
      d="M0.0505371 12.0011H18.0505V10.0011H0.0505371V12.0011ZM0.0505371 7.0011H18.0505V5.0011H0.0505371V7.0011ZM0.0505371 0.00109863V2.0011H18.0505V0.00109863H0.0505371Z"
      transform="translate(2,6)"
    />,
  );

export default Menu;
