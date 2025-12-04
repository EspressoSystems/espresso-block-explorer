import { addClassToClassName } from '@/higher_order';
import React from 'react';
import Button, { ButtonProps } from '../button/Button';

/**
 * LabeledButton is an extension to a normal Button, but designed to hold
 * text specifically.  It has styles that provide sufficient padding and
 * spacing as per the design specification.
 */
const LabeledButton: React.FC<ButtonProps> = ({ className, ...props }) => (
  <Button
    className={addClassToClassName(className, 'label type--ui--button')}
    {...props}
  />
);

export default LabeledButton;
