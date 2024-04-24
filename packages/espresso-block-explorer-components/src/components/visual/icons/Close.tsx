import { addClassToClassName } from '@/higher_order';
import React from 'react';
import SVGIconBase from './SVGIconBase';

/**
 * Menu is an icon of a hamburger menu
 */
const Menu: React.FC<React.SVGProps<SVGElement>> = (props) =>
  React.createElement(
    SVGIconBase,
    {
      ...props,
      // eslint-disable-next-line react/prop-types
      className: addClassToClassName(props.className, 'stroked'),
    },
    <path d="M5.99976 17.998L17.9998 5.99805M5.99976 5.99805L17.9998 17.998" />,
  );

export default Menu;
