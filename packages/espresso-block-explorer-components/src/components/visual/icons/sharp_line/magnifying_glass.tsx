import { addClassToClassName } from '@/components/higher_order';
import React from 'react';
import SharpIconBase from './sharp_icon_base';

/**
 * MagnifyingGlass represents a magnifying glass icon.
 */
const MagnifyingGlass: React.FC<React.SVGProps<SVGElement>> = (props) =>
  React.createElement(
    SharpIconBase,
    {
      ...props,
      // Sharp Line Icons
      // https://www.streamlinehq.com/icons/sharp-line-style?search=search&icon=ico_KnPoWfX0dJiutVpz
      // Source retrieved from Figma design. https://www.figma.com/design/Cha4GEw7iPMfPLxYOf6L8E/Espresso-%E2%80%93-Design-Retainer-w--WE3.co?node-id=4461-16800&p=f&t=03SARu4HwuYcuci0-0
      className: addClassToClassName(props.className, 'magnifying-glass'),
    },
    <g>
      <path d="M5.33398 29.333C5.33398 35.6982 7.86255 41.8027 12.3634 46.3036C16.8643 50.8044 22.9688 53.333 29.334 53.333C35.6992 53.333 41.8037 50.8044 46.3045 46.3036C50.8054 41.8027 53.334 35.6982 53.334 29.333C53.334 22.9678 50.8054 16.8633 46.3045 12.3624C41.8037 7.86157 35.6992 5.33301 29.334 5.33301C22.9688 5.33301 16.8643 7.86157 12.3634 12.3624C7.86255 16.8633 5.33398 22.9678 5.33398 29.333Z" />
      <path d="M46.3047 46.3037L58.6674 58.6664" />
    </g>,
  );

export default MagnifyingGlass;
