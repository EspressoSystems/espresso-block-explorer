import { addClassToClassName } from '@/components/higher_order';
import React from 'react';
import SVGIconBase from '../svg_icon_base';

/**
 * Copy represents an icon indicating a copy action.
 */
const Copy: React.FC<React.SVGProps<SVGElement>> = (props) =>
  React.createElement(
    SVGIconBase,
    {
      ...props,
      className: addClassToClassName(props.className, 'stroked'),
    },
    // Feather Icon
    // https://feathericons.com/?query=copy
    <g
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-copy"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
    </g>,
  );

export default Copy;
