import { addClassToClassName } from '@/higher_order';
import React from 'react';

export interface AnchorButtonProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  disabled?: boolean;
}

/**
 * AnchorButton is a simple wrapper around an Anchor tag with the purpose of
 * making the anchor visually look like a button.
 */
const AnchorButton: React.FC<AnchorButtonProps> = (props) => (
  <a
    {...props}
    className={addClassToClassName(props.className, 'btn')}
    href={props.disabled ? undefined : props.href}
  >
    {props.children}
  </a>
);

export default AnchorButton;
