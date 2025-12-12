import { default as React } from 'react';
import { TextEditingValue } from './types';
export interface TextEditingProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'defaultValue'> {
    value?: TextEditingValue;
    onChange?: (event: React.ChangeEvent<HTMLInputElement> | React.SyntheticEvent<HTMLInputElement, Event>, value: TextEditingValue) => void;
}
/**
 * shouldIgnoreKeyDownEventForEditing is a helper function that determines
 * whether a keydown event should be ignored for editing purposes.
 *
 * You provide it the Keyboard event, and it will make the determination.
 * The goal here is to filter out keys that we do not want to interfere
 * with standard editing operations, such as navigation keys, control
 * keys, and other non-character input keys.
 */
export declare function shouldIgnoreKeyDownEventForEditing(event: React.KeyboardEvent): boolean;
/**
 * isArabicNumeralKey is a helper function that determines
 * whether the provided keyboard event corresponds to
 * an Arabic numeral key (0-9).
 */
export declare function isArabicNumeralKey(event: React.KeyboardEvent): boolean;
/**
 * TextEditing is a ReactComponent that provides a text input field
 * with support for explicitly controlling the value and selection.
 * It uses the TextEditingValue and TextSelection types to manage
 * the text and selection state.
 *
 * It is modelled after the TextEditingController in Flutter,
 */
export declare const TextEditing: React.FC<TextEditingProps>;
