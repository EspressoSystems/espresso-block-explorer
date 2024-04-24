import { addClassToClassName } from '@/higher_order';
import React from 'react';

import './link.css';

export interface LinkProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {}

/**
 * Link component represents a simple Anchor tag link.  This component
 * may be expanded and have many different variations.
 */
const Link: React.FC<LinkProps> = (props) => (
  <a {...props} className={addClassToClassName(props.className, 'link')}>
    {props.children}
  </a>
);

export default Link;
