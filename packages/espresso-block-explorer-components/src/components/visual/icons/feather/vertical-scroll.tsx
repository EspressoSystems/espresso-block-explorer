import { addClassToClassName } from '@/components/higher_order';
import React from 'react';
import SVGIconBase from '../svg_icon_base';

/**
 * VerticalScroll represents a vertical scroll icon.
 */
const VerticalScroll: React.FC<React.SVGProps<SVGElement>> = (props) =>
  React.createElement(
    SVGIconBase,
    {
      ...props,
      viewBox: '0 0 12 12',
      className: addClassToClassName(props.className, 'stroked'),
    },
    // This is taken from the design, as it's not a part of the Feather Icon
    // Set: https://www.figma.com/design/Cha4GEw7iPMfPLxYOf6L8E/Espresso-%E2%80%93-Design-Retainer-w--WE3.co?node-id=4588-2397&t=RzkdfBLWoWQ1gwYr-0
    <>
      <path d="M9.25 7.75049L6 11.0005L2.75 7.75049" strokeWidth="1.5" />
      <path d="M9.25 4.25049L6 1.00049L2.75 4.25049" strokeWidth="1.5" />
    </>,
  );

export default VerticalScroll;
