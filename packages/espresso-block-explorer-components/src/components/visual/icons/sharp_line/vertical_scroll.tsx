import { addClassToClassName } from '@/components/higher_order';
import React from 'react';
import SharpIconBase from './sharp_icon_base';

/**
 * VerticalScroll represents an icon indicating vertical scrolling.
 */
const VerticalScroll: React.FC<React.SVGProps<SVGElement>> = (props) =>
  React.createElement(
    SharpIconBase,
    {
      ...props,
      // Sharp Line Icons
      // https://www.streamlinehq.com/icons/sharp-line-style?search=scroll&icon=ico_aVvM0WiuYYuRp1hu
      // Source retrieved from Figma design. https://www.figma.com/design/Cha4GEw7iPMfPLxYOf6L8E/Espresso-%E2%80%93-Design-Retainer-w--WE3.co?node-id=4461-16800&p=f&t=03SARu4HwuYcuci0-0
      className: addClassToClassName(props.className, 'vertical-scroll'),
    },
    <g>
      <path d="M49.3327 41.333L31.9993 58.6663L14.666 41.333" />
      <path d="M49.3327 22.6663L31.9993 5.33301L14.666 22.6663" />
    </g>,
  );

export default VerticalScroll;
