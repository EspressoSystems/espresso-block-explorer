import { addClassToClassName } from '@/components/higher_order';
import React from 'react';
import SVGIconBase from '../svg_icon_base';

/**
 * Unlock represents an open Lock.
 */
const Unlock: React.FC<React.SVGProps<SVGElement>> = (props) =>
  React.createElement(
    SVGIconBase,
    {
      ...props,
      className: addClassToClassName(props.className, 'stroked'),
    },
    // Feather Icon
    // https://feathericons.com/?query=unlock
    <g
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-unlock"
    >
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
    </g>,
  );

export default Unlock;
