import { addClassToClassName } from '@/higher_order';
import React from 'react';

import './button_base.css';

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

/**
 * ButtonBase is a simple wrapper around a normal button element that adds the
 * class 'btn' to the button in order to change it's styling.
 */
const ButtonBase: React.FC<ButtonProps> = (props) => (
  <button {...props} className={addClassToClassName(props.className, 'bbtn')} />
);

export default ButtonBase;
