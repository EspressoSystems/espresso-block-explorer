import { addClassToClassName } from '@/higher_order';
import React from 'react';
import Button, { ButtonProps } from '../button/Button';

/**
 * IconButton represents a Button with a simple icon within it.  It is styled
 * for a simple 24px x 24px icon to be contained within it, and as such it has
 * styles that account for this.
 */
const IconButton: React.FC<ButtonProps> = ({ className, ...props }) => (
  <Button
    className={addClassToClassName(className, 'icon type--ui--button')}
    {...props}
  />
);

export default IconButton;
