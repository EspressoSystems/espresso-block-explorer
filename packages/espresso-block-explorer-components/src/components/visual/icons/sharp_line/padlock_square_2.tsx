import { addClassToClassName } from '@/higher_order';
import { default as React } from 'react';
import { default as SharpIconBase } from './sharp_icon_base';

/**
 * Delete1 represents a close Icon with an "X" shape.
 */
const PadlockSquare2: React.FC<React.SVGProps<SVGElement>> = (props) =>
  React.createElement(
    SharpIconBase,
    {
      ...props,
      // Sharp Line Icons
      // https://www.streamlinehq.com/icons/sharp-line-style?search=unlock&icon=ico_TV0fSAO0v0GVf2yd
      // Source retrieved from Figma design. https://www.figma.com/design/Cha4GEw7iPMfPLxYOf6L8E/Espresso-%E2%80%93-Design-Retainer-w--WE3.co?node-id=4461-16800&p=f&t=03SARu4HwuYcuci0-0
      viewBox: '0 0 16 16',
      width: '16',
      height: '16',
      className: addClassToClassName(props.className, 'padlock-square-2'),
    },
    <g strokeWidth="1.5">
      <path d="M13.3327 7.33301H2.66602V14.6663H13.3327V7.33301Z" />
      <path d="M4.66602 7.33301V4.66634C4.66602 3.78229 5.01721 2.93444 5.64233 2.30932C6.26745 1.6842 7.11529 1.33301 7.99935 1.33301C8.8834 1.33301 9.73125 1.6842 10.3564 2.30932C10.9815 2.93444 11.3327 3.78229 11.3327 4.66634" />
      <path d="M8 10V12" />
    </g>,
  );

export default PadlockSquare2;
