import { addClassToClassName } from '@/higher_order';
import { default as React } from 'react';
import { default as ButtonBase, ButtonProps } from './button_base';
import './button_flat.css';

/**
 * ButtonFlat is a wrapper around ButtonBase that adds the 'btn-flat' class
 * to the button in order to change its styling to a flat button.
 */
export const ButtonFlat: React.FC<ButtonProps> = ({ className, ...props }) => (
  <ButtonBase
    className={addClassToClassName(className, 'btn--flat')}
    {...props}
  />
);
