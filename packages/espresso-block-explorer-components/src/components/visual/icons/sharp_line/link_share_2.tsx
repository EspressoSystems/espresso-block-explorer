import { addClassToClassName } from '@/components/higher_order';
import React from 'react';
import SharpIconBase from './sharp_icon_base';

/**
 * LinkShare2 indicates a link sharing action.
 */
const LinkShare2: React.FC<React.SVGProps<SVGElement>> = (props) =>
  React.createElement(
    SharpIconBase,
    {
      ...props,
      // Sharp Line Icons
      // https://www.streamlinehq.com/icons/sharp-line-style?search=external+link&icon=ico_E907BbGeTLlA9Pkc
      // Source retrieved from Figma design. https://www.figma.com/design/Cha4GEw7iPMfPLxYOf6L8E/Espresso-%E2%80%93-Design-Retainer-w--WE3.co?node-id=4461-16800&p=f&t=03SARu4HwuYcuci0-0
      className: addClassToClassName(props.className, 'link-share-2'),
    },
    <g>
      <path d="M32.0007 13.333H5.33398V58.6663H50.6673V31.9997" />
      <path d="M26.668 37.333L58.668 5.33301" />
      <path d="M37.334 5.33301H58.6673V26.6663" />
    </g>,
  );

export default LinkShare2;
