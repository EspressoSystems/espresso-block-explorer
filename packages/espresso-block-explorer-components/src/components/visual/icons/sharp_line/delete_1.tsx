import { addClassToClassName } from '@/components/higher_order';
import React from 'react';
import SharpIconBase from './sharp_icon_base';

/**
 * Delete1 represents a close Icon with an "X" shape.
 */
const Delete1: React.FC<React.SVGProps<SVGElement>> = (props) =>
  React.createElement(
    SharpIconBase,
    {
      ...props,
      // Sharp Line Icons
      // https://www.streamlinehq.com/icons/sharp-line-style?search=Close&icon=ico_xgI1lRhckrxpeaGa
      // Source retrieved from Figma design. https://www.figma.com/design/Cha4GEw7iPMfPLxYOf6L8E/Espresso-%E2%80%93-Design-Retainer-w--WE3.co?node-id=4461-16800&p=f&t=03SARu4HwuYcuci0-0
      className: addClassToClassName(props.className, 'delete-1'),
    },
    <g>
      <path d="M52.7422 11.7422L11.2586 53.2258" />
      <path d="M11.2578 11.7422L52.7414 53.2258" />
    </g>,
  );

export default Delete1;
