import React from 'react';
import './switch.css';

/**
 * BaseSwitchProps defines the properties for the BaseSwitch component.
 */
export interface BaseSwitchProps
  extends Omit<React.HTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  value?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
}

/**
 * BaseSwitch is a simple switch component that represents a boolean value.
 * It is implemented via a checkbox input element.
 */
export const BaseSwitch: React.FC<BaseSwitchProps> = ({
  value,
  disabled,
  onChange,
  ...rest
}) => {
  return (
    <input
      type="checkbox"
      className="bswitch"
      checked={value}
      disabled={disabled}
      onChange={(event) => {
        if (!onChange) {
          return;
        }

        onChange(event.target.checked);
      }}
      {...rest}
    />
  );
};
