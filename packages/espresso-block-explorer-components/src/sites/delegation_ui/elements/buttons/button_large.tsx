import { addClassToClassName } from '@/higher_order';
import { default as React } from 'react';
import { default as ButtonBase, ButtonProps } from './button_base';

/**
 * ButtonLarge is a wrapper around ButtonBase that adds the 'btn-large' class
 * to the button in order to change its styling to a larger button.
 */
const ButtonLarge: React.FC<ButtonProps> = ({ className, ...props }) => (
  <ButtonBase
    className={addClassToClassName(className, 'btn-large')}
    {...props}
  />
);

export default ButtonLarge;
