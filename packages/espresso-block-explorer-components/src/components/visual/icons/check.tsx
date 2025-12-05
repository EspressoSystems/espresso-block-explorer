import { addClassToClassName } from '@/components/higher_order';
import React from 'react';
import SVGIconBase from './svg_icon_base';

/**
 * Check represents a simple check mark.
 */
const Check: React.FC<React.SVGProps<SVGElement>> = (props) =>
  React.createElement(
    SVGIconBase,
    {
      ...props,

      className: addClassToClassName(props.className, 'stroked'),
    },
    <path
      d="M14.6667 1L5.50001 10.1667L1.33334 6"
      stroke="white"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
      transform="translate(6,6)"
    />,
  );

export default Check;
