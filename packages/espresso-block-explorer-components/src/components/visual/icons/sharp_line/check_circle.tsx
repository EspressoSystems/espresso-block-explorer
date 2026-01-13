import { addClassToClassName } from '@/higher_order';
import React from 'react';
import SharpIconBase from './sharp_icon_base';

/**
 * CheckCircle represents a circle with a check mark inside it.
 */
const CheckCircle: React.FC<React.SVGProps<SVGElement>> = (props) =>
  React.createElement(
    SharpIconBase,
    {
      ...props,
      // Sharp Line Icons
      // https://www.streamlinehq.com/icons/sharp-line-style?search=check+circle&icon=ico_NJ2vzasThKfoQic2
      // Source retrieved from Figma design. https://www.figma.com/design/Cha4GEw7iPMfPLxYOf6L8E/Espresso-%E2%80%93-Design-Retainer-w--WE3.co?node-id=4461-16800&p=f&t=03SARu4HwuYcuci0-0
      className: addClassToClassName(props.className, 'check-circle'),
    },
    <g>
      <path d="M2 28.6667C2 35.7391 4.80952 42.5219 9.81049 47.5228C14.8115 52.5238 21.5942 55.3333 28.6667 55.3333C35.7391 55.3333 42.5219 52.5238 47.5228 47.5228C52.5238 42.5219 55.3333 35.7391 55.3333 28.6667C55.3333 21.5942 52.5238 14.8115 47.5228 9.81049C42.5219 4.80952 35.7391 2 28.6667 2C21.5942 2 14.8115 4.80952 9.81049 9.81049C4.80952 14.8115 2 21.5942 2 28.6667Z" />
      <path d="M16 30.667L25.3333 38.667L41.3333 18.667" />
    </g>,
  );

export default CheckCircle;
