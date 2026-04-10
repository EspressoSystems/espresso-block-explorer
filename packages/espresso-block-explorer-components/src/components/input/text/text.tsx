import { default as React } from 'react';
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
 * shouldIgnoreKeyDownEventForEditing is a helper function that determines
 * whether a keydown event should be ignored for editing purposes.
 *
 * You provide it the Keyboard event, and it will make the determination.
 * The goal here is to filter out keys that we do not want to interfere
 * with standard editing operations, such as navigation keys, control
 * keys, and other non-character input keys.
 */
export function shouldIgnoreKeyDownEventForEditing(event: React.KeyboardEvent) {
  // Do we want to prevent the user from typing certain characters?
  // We only want valid values to come out of this input.
  // We can store the "raw" value, and use InputFormatters to format it
  // into a valid value by ignoring all of the invalid characters.
  //
  // If the key is not a number, or a valid separator / grouping character,
  // we don't want it to be input.
  //
  // We want to accept numeric characters, their separators, and grouping
  // characters. We also don't want to interfere with editing or navigation
  // keys like Backspace, Delete, Arrow keys, etc.

  // Ignore all control keys, in order to prevent us from interfering
  // with standard editing operations.
  if (event.ctrlKey || event.metaKey || event.altKey) {
    return true;
  }

  // Ignore all Events generated during IME Composition
  if (event.nativeEvent.isComposing) {
    return true;
  }

  // Ignore Shift Key by in isolation, as we do not wish to interfere
  // with capitalization options.
  if (event.key === 'Shift') {
    return true;
  }

  // Ignore Editing Keys
  if (event.key === 'Backspace' || event.key === 'Delete') {
    return true;
  }

  // Ignore Navigation Keys
  if (
    event.key === 'ArrowLeft' ||
    event.key === 'ArrowRight' ||
    event.key === 'ArrowUp' ||
    event.key === 'ArrowDown' ||
    event.key === 'Home' ||
    event.key === 'End'
  ) {
    return true;
  }

  return false;
}

/**
 * isArabicNumeralKey is a helper function that determines
 * whether the provided keyboard event corresponds to
 * an Arabic numeral key (0-9).
 */
export function isArabicNumeralKey(event: React.KeyboardEvent) {
  return event.key >= '0' && event.key <= '9';
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
