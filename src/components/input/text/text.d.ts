import { default as React } from 'react';
import { TextEditingValue } from './types';
export interface TextEditingProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'defaultValue'> {
    value?: TextEditingValue;
    onChange?: (event: React.ChangeEvent<HTMLInputElement> | React.SyntheticEvent<HTMLInputElement, Event>, value: TextEditingValue) => void;
}
/**
 * TextEditing is a ReactComponent that provides a text input field
 * with support for explicitly controlling the value and selection.
 * It uses the TextEditingValue and TextSelection types to manage
 * the text and selection state.
 *
 * It is modelled after the TextEditingController in Flutter,
 */
export declare const TextEditing: React.FC<TextEditingProps>;
