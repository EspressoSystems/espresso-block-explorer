import { addClassToClassName } from '@/higher_order';
import { default as React } from 'react';
import { default as SharpIconBase } from './sharp_icon_base';

/**
 * Add1 represents an icon with a "+" symbol.
 */
const Add1: React.FC<React.SVGProps<SVGElement>> = (props) =>
  React.createElement(
    SharpIconBase,
    {
      ...props,
      // Sharp Line Icons
      // https://www.streamlinehq.com/icons/sharp-line-style?search=add&icon=ico_UegLMLZs4V5hhtuV
      // Source retrieved from Figma design. https://www.figma.com/design/Cha4GEw7iPMfPLxYOf6L8E/Espresso-%E2%80%93-Design-Retainer-w--WE3.co?node-id=4461-16800&p=f&t=03SARu4HwuYcuci0-0
      className: addClassToClassName(props.className, 'add-1'),
    },
    <g>
      <path d="M32 2.66699V61.3337" />
      <path d="M2.66699 32H61.3337" />
    </g>,
  );

export default Add1;
