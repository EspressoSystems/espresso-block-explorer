import React from 'react';
import { TextEditingValue, TextSelection } from './types';

export interface TextEditingProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'defaultValue'
  > {
  value?: TextEditingValue;
  onChange?: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.SyntheticEvent<HTMLInputElement, Event>,
    value: TextEditingValue,
  ) => void;
}

/**
 * TextEditing is a ReactComponent that provides a text input field
 * with support for explicitly controlling the value and selection.
 * It uses the TextEditingValue and TextSelection types to manage
 * the text and selection state.
 *
 * It is modelled after the TextEditingController in Flutter,
 */
export const TextEditing: React.FC<TextEditingProps> = (props) => {
  const ref = React.createRef<HTMLInputElement>();
  const { value, onChange, ...rest } = props;

  const currentValue =
    value ?? new TextEditingValue('', TextSelection.collapsed(-1));

  if (ref.current && currentValue.selection.isValid) {
    const sel = currentValue.selection;
    ref.current.setSelectionRange(
      sel.start,
      sel.end,
      sel.start <= sel.end ? 'forward' : 'backward',
    );
  }

  return (
    <input
      ref={ref}
      type="text"
      {...rest}
      value={currentValue.text}
      onChange={(event) => {
        const nextValue = new TextEditingValue(
          event.target.value,
          new TextSelection(
            event.target.selectionStart || 0,
            event.target.selectionEnd || 0,
            (event.target.selectionDirection || 'none') !== 'none',
          ),
        );

        if (onChange) {
          onChange(event, nextValue);
          if (event.isDefaultPrevented()) {
            return;
          }
        }
      }}
      onSelect={(event) => {
        if (!ref.current) {
          return;
        }

        if (onChange) {
          onChange(
            event,
            currentValue.copyWith({
              selection: new TextSelection(
                ref.current.selectionStart ?? 0,
                ref.current.selectionEnd ?? 0,
                (ref.current.selectionDirection || 'none') !== 'none',
              ),
            }),
          );
        }
      }}
    />
  );
};
