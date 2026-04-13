import { addClassToClassName } from '@/higher_order';
import { default as React } from 'react';
import './sharp_icon_base.css';

export interface SVGIconBaseProps extends React.SVGProps<SVGElement> {}

/**
 * SVGIconBase is a base component for SVG based icons from the Sharp
 * Icon set by Streamline Icons.
 * https://www.streamlinehq.com/icons/sharp-line-style
 */
const SharpIconBase: React.FC<SVGIconBaseProps> = (props) =>
  React.createElement(
    'svg',
    {
      xmlns: props.xmlns ?? 'http://www.w3.org/2000/svg',
      width: props.width ?? '64',
      height: props.height ?? '64',
      viewBox: props.viewBox ?? '0 0 64 64',
      ...props,
      className: addClassToClassName(props.className, 'stroked sharp-icon'),
    },
    props.children,
  );

export default SharpIconBase;
