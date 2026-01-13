import { addClassToClassName } from '@/higher_order';
import React from 'react';
import SharpIconBase from './sharp_icon_base';

/**
 * ChevronDown represents a downwards pointing chevron icon.
 */
const ChevronDown: React.FC<React.SVGProps<SVGElement>> = (props) =>
  React.createElement(
    SharpIconBase,
    {
      ...props,
      // Sharp Line Icons
      // https://www.streamlinehq.com/icons/sharp-line-style?search=chevron&icon=ico_qSAzOGeGULU9VKAD
      // Source retrieved from Figma design. https://www.figma.com/design/Cha4GEw7iPMfPLxYOf6L8E/Espresso-%E2%80%93-Design-Retainer-w--WE3.co?node-id=4461-16800&p=f&t=03SARu4HwuYcuci0-0
      className: addClassToClassName(props.className, 'padlock-square-2'),
    },
    <g>
      <path d="M4.33866 18.168L32.168 46L60 18.168" />
    </g>,
  );

export default ChevronDown;
