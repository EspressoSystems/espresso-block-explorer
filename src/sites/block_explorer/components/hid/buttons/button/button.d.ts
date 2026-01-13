import { default as React } from 'react';
export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
}
/**
 * Button is a simple wrapper around a normal button element that adds the
 * class 'btn' to the button in order to change it's styling.
 */
declare const Button: React.FC<ButtonProps>;
export default Button;
