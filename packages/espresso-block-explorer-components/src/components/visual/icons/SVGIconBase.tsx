import React from 'react';
import { addClassToClassName } from '../../higher_order';
import './icons.css';

export interface SVGIconBaseProps extends React.SVGProps<SVGElement> {}

/**
 * SVGIconBase is a base component for SVG Icons of the standard 24x24 size.
 * This allows the Icons defined utilizing SVGIconBase so we won't have to
 * keep re-defining the SVG attributes, as well as ensuring that they are
 * a consistent size.
 *
 * Please note that these properties can be overwritten via passed in props,
 * so as a result they serve the purpose of defining defaults when they are
 * not supplied. Though it will work and respect any passed in prop values,
 * it is recommended not to change `xmlns` or `viewBox`.
 *
 * @param props standard SVGElement props.
 */
const SVGIconBase: React.FC<SVGIconBaseProps> = (props) =>
  React.createElement(
    'svg',
    {
      xmlns: props.xmlns ?? 'http://www.w3.org/2000/svg',
      width: props.width ?? '24',
      height: props.height ?? '24',
      viewBox: props.viewBox ?? '0 0 24 24',
      ...props,
      className: addClassToClassName(props.className, 'icon'),
    },
    props.children,
  );

export default SVGIconBase;
