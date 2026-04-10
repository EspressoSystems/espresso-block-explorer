import { addClassToClassName } from '@/higher_order';
import { default as React } from 'react';
import { default as SharpIconBase } from './sharp_icon_base';

/**
 * DownloadTray is an icon representing a download tray.
 */
const DownloadTray: React.FC<React.SVGProps<SVGElement>> = (props) =>
  React.createElement(
    SharpIconBase,
    {
      ...props,
      // Sharp Line Icons
      // https://www.streamlinehq.com/icons/sharp-line-style?search=download+tray&icon=ico_nFtV3w4Byw1uRtRP
      // Source retrieved from Figma design. https://www.figma.com/design/Cha4GEw7iPMfPLxYOf6L8E/Espresso-%E2%80%93-Design-Retainer-w--WE3.co?node-id=4461-16800&p=f&t=03SARu4HwuYcuci0-0
      className: addClassToClassName(props.className, 'download-tray'),
    },
    <g>
      <path d="M11.334 24L24.6673 37.3333L38.0007 24" />
      <path d="M24.666 37.3333V0" />
      <path d="M2 45.333V55.9997H47.3333V45.333" />
    </g>,
  );

export default DownloadTray;
