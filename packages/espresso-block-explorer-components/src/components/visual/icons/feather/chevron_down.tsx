import { addClassToClassName } from '@/higher_order';
import { default as React } from 'react';
import { default as SVGIconBase } from '../svg_icon_base';

/**
 * ChevronDown represents a downward pointing chevron arrow.
 */
const ChevronDown: React.FC<React.SVGProps<SVGElement>> = (props) =>
  React.createElement(
    SVGIconBase,
    {
      ...props,
      className: addClassToClassName(props.className, 'stroked'),
    },
    // Feather Icon
    // https://feathericons.com/?query=chevron-down
    <g
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-check-circle"
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </g>,
  );

export default ChevronDown;
