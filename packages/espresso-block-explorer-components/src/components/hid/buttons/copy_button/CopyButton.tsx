import React from 'react';
import { addClassToClassName } from '../../../higher_order';
import Copy from '../../../visual/icons/Copy';

import './copy_button.css';

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

/**
 * Button is a simple wrapper around a normal button element that adds the
 * class 'btn' to the button in order to change it's styling.
 */
const Button: React.FC<ButtonProps> = (props) => (
  <button
    {...props}
    className={addClassToClassName(props.className, 'btn--copy')}
  >
    <Copy />
  </button>
);

export default Button;
