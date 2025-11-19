import { default as React } from 'react';
/**
 * BaseSwitchProps defines the properties for the BaseSwitch component.
 */
export interface BaseSwitchProps extends Omit<React.HTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
    value?: boolean;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
}
/**
 * BaseSwitch is a simple switch component that represents a boolean value.
 * It is implemented via a checkbox input element.
 */
export declare const BaseSwitch: React.FC<BaseSwitchProps>;
