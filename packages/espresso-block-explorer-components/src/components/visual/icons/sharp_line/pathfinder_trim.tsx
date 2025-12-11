import { addClassToClassName } from '@/components/higher_order';
import React from 'react';
import SharpIconBase from './sharp_icon_base';

/**
 * PathfinderTrim is an icon representing a trimmed pathfinder.
 */
const PathfinderTrim: React.FC<React.SVGProps<SVGElement>> = (props) =>
  React.createElement(
    SharpIconBase,
    {
      ...props,
      // Sharp Line Icons
      // https://www.streamlinehq.com/icons/sharp-line-style?search=pathfinder&icon=ico_ywnPUbm9PWOy1d4e
      // Source retrieved from Figma design. https://www.figma.com/design/Cha4GEw7iPMfPLxYOf6L8E/Espresso-%E2%80%93-Design-Retainer-w--WE3.co?node-id=4461-16800&p=f&t=03SARu4HwuYcuci0-0
      className: addClassToClassName(props.className, 'pathfinder-trim'),
    },
    <g>
      <path d="M42.6673 21.333V5.33301H5.33398V42.6663H21.0673" />
      <path d="M21.334 21.333H58.6673V58.6663H21.334V21.333Z" />
    </g>,
  );

export default PathfinderTrim;
