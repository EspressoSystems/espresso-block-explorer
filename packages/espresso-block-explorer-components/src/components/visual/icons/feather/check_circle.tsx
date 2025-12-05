import { addClassToClassName } from '@/components/higher_order';
import React from 'react';
import SVGIconBase from '../svg_icon_base';

/**
 * CheckCircle represents a check mark inside a circle.
 */
const CheckCircle: React.FC<React.SVGProps<SVGElement>> = (props) =>
  React.createElement(
    SVGIconBase,
    {
      ...props,
      className: addClassToClassName(props.className, 'stroked'),
    },
    // Feather Icon
    // https://feathericons.com/?query=check-circle
    <g
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-check-circle"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </g>,
  );

export default CheckCircle;
