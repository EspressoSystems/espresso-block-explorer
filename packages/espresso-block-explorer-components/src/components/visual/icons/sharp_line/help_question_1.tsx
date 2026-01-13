import { addClassToClassName } from '@/higher_order';
import React from 'react';
import SharpIconBase from './sharp_icon_base';

/**
 * HelpQuestion1 represents an icon that is a circle with a "?" symbol in the
 * center.
 */
const HelpQuestion1: React.FC<React.SVGProps<SVGElement>> = (props) =>
  React.createElement(
    SharpIconBase,
    {
      ...props,
      // Sharp Line Icons
      // https://www.streamlinehq.com/icons/sharp-line-style?search=question&icon=ico_OgrBKLUlhAJ6CGuR
      // Source retrieved from Figma design. https://www.figma.com/design/Cha4GEw7iPMfPLxYOf6L8E/Espresso-%E2%80%93-Design-Retainer-w--WE3.co?node-id=4461-16800&p=f&t=03SARu4HwuYcuci0-0
      className: addClassToClassName(props.className, 'help-question-1'),
    },
    <g>
      <path d="M2 30C2 37.4261 4.94999 44.548 10.201 49.799C15.452 55.05 22.5739 58 30 58C37.4261 58 44.548 55.05 49.799 49.799C55.05 44.548 58 37.4261 58 30C58 22.5739 55.05 15.452 49.799 10.201C44.548 4.94999 37.4261 2 30 2C22.5739 2 15.452 4.94999 10.201 10.201C4.94999 15.452 2 22.5739 2 30Z" />
      <path d="M20.667 24.6667V23.3333C20.667 22.1077 20.9084 20.894 21.3774 19.7616C21.8465 18.6293 22.534 17.6003 23.4007 16.7337C24.2673 15.867 25.2962 15.1795 26.4286 14.7105C27.561 14.2414 28.7747 14 30.0003 14C31.226 14 32.4397 14.2414 33.572 14.7105C34.7044 15.1795 35.7333 15.867 36.6 16.7337C37.4667 17.6003 38.1542 18.6293 38.6232 19.7616C39.0922 20.894 39.3337 22.1077 39.3337 23.3333V24.6667L30.0003 32.6667V38" />
      <path d="M30 43.333V47.333" />
    </g>,
  );

export default HelpQuestion1;
