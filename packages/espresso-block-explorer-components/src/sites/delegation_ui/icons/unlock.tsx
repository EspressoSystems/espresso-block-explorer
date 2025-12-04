import SVGIconBase from '@/components/visual/icons/svg_icon_base';
import React from 'react';

/**
 * Unlock represents an open Lock.
 *
 * This icon is a seemingly custom icon in use in the design
 */
const Unlock: React.FC<React.SVGProps<SVGElement>> = (props) =>
  React.createElement(
    SVGIconBase,
    {
      ...props,
      width: '11',
      height: '11',
      viewBox: '0 0 11 14',
    },
    <g
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-unlock"
    >
      <path className="only-fill" d="M10.6667 6.5H0V13.8333H10.6667V6.5Z" />
      <path
        className="only-stroke"
        d="M2 6.5V3.83333C2 2.94928 2.35119 2.10143 2.97631 1.47631C3.60143 0.851189 4.44928 0.5 5.33333 0.5C6.21739 0.5 7.06523 0.851189 7.69036 1.47631C8.31548 2.10143 8.66667 2.94928 8.66667 3.83333"
      />
      <path className="only-stroke" d="M5.33398 9.1665V11.1665" data-stroke />
    </g>,
  );

export default Unlock;
