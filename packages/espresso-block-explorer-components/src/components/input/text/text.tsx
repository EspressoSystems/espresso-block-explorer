import React from 'react';
import { TextEditingValue, TextRange, TextSelection } from './types';

export interface TextEditingProps extends Omit<
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
 * textSelectionFromInputElement is a helper function that will create
 * a TextSelection from the selection state of the provided input element.
 */
function textSelectionFromInputElement(
  inputElement: HTMLInputElement,
): TextSelection {
  const selectionStart = inputElement.selectionStart || 0;
  const selectionEnd = inputElement.selectionEnd || 0;

  if (inputElement.selectionDirection === 'backward') {
    return new TextSelection(selectionEnd, selectionStart, true);
  }

  return new TextSelection(
    selectionStart,
    selectionEnd,
    selectionStart !== selectionEnd &&
      (inputElement.selectionDirection || 'none') !== 'none',
  );
}

/**
 * composingFromInputElement is a helper function that will create
 * a TextRange from the selection state of the provided input element.
 */
function composingFromInputElement(inputElement: HTMLInputElement): TextRange {
  const selectionStart = inputElement.selectionStart || 0;
  const selectionEnd = inputElement.selectionEnd || 0;

  if (selectionStart === selectionEnd) {
    return TextRange.empty;
  }

  return new TextRange(selectionStart, selectionEnd);
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
  const ref = React.useRef<null | HTMLInputElement>(null);
  const { value, onChange, ...rest } = props;
  const [state, setState] = React.useState(value ?? new TextEditingValue(''));

  const resolvedValue = value ?? state;

  React.useEffect(() => {
    let setTheState = setState;

    // Did the text value change?
    if (resolvedValue && resolvedValue.text !== state.text) {
      setTheState(resolvedValue);
      return;
    }

    const element = ref.current;

    // Do we have a valid ref to the input element?
    if (element) {
      // Did the selection change?

      if (state.selection.isValid) {
        if (!resolvedValue.selection.isEquivalentTo(state.selection)) {
          setTheState(resolvedValue);
          // Update the selection in the input element

          if (
            resolvedValue.selection.baseOffset ===
            resolvedValue.selection.extentOffset
          ) {
            element.setSelectionRange(
              resolvedValue.selection.start,
              resolvedValue.selection.end,
              'none',
            );
            return;
          }

          element.setSelectionRange(
            resolvedValue.selection.start,
            resolvedValue.selection.end,
            resolvedValue.selection.baseOffset <=
              resolvedValue.selection.extentOffset
              ? 'forward'
              : 'backward',
          );
          return;
        }
      }
    }

    return () => {
      setTheState = () => {};
    };
  }, [
    resolvedValue,
    state.selection,
    state.selection.end,
    state.selection.isDirectional,
    state.selection.isValid,
    state.selection.start,
    state.text,
  ]);

  if (ref.current && state.selection.isValid) {
    const sel = state.selection;
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
      value={resolvedValue.text}
      onChange={(event) => {
        const nextValue = new TextEditingValue(
          event.target.value,
          textSelectionFromInputElement(event.target),
        );

        if (onChange) {
          onChange(event, nextValue);
        }

        if (event.isDefaultPrevented()) {
          return;
        }

        setState(nextValue);
      }}
      onSelect={(event) => {
        if (!ref.current) {
          return;
        }

        const nextSelection = textSelectionFromInputElement(ref.current);
        const nextComposing = composingFromInputElement(ref.current);

        if (
          nextSelection.isEquivalentTo(resolvedValue.selection) &&
          nextComposing.isEquivalentTo(resolvedValue.composing)
        ) {
          // No Selection Change
          return;
        }

        const nextValue = resolvedValue.copyWith({
          selection: nextSelection,
          composing: nextComposing,
        });
        if (onChange) {
          onChange(event, nextValue);
        }

        if (event.isDefaultPrevented()) {
          return;
        }

        // Fire a state update
        setState(nextValue);
      }}
    />
  );
};
