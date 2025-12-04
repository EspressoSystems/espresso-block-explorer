import { assert } from '@/assert/assert';
import { breakpoint } from '@/assert/debugger';
import { CurrentNumberFormatters } from '@/components/contexts';
import UnimplementedError from '@/errors/UnimplementedError';
import { filterIterable, foldRIterable } from '@/functional/functional';
import { ESP } from '@/models/block_explorer/currency_code';
import MonetaryValue from '@/models/block_explorer/monetary_value';
import React from 'react';
import { TextEditing, TextEditingProps } from '../text/text';
import { TextEditingValue, TextSelection } from '../text/types';

export interface ESPInputProps extends Omit<
  TextEditingProps,
  'value' | 'onChange'
> {
  value?: null | MonetaryValue;
  onChange?: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.SyntheticEvent<HTMLInputElement, Event>,
    value: MonetaryValue,
  ) => void;
}

function isChangeEvent(
  event: React.SyntheticEvent<HTMLInputElement, Event>,
): event is React.ChangeEvent<HTMLInputElement> {
  return event.type === 'change';
}

// We want to parse the value.  It can be any string value representable, but
// we want to distill it down to a MonetaryValue that we can utilize.
function parseESPValue(
  decimalSeparator: string,
  _groupSeparator: string,
  value: string,
): MonetaryValue {
  // Get rid of any non numeric values at the start of the string.
  value = value.replace(/^[^\d]+/g, '');

  // Get rid of any non numeric values at the end of the string.
  value = value.replace(/[^\d]+$/g, '');

  const numericParts = value.split(decimalSeparator);
  const preDecimal =
    BigInt(numericParts[0].replace(/\D/g, '')) *
    ESP.significantDigitsMultiplier;

  if (numericParts.length < 2) {
    return MonetaryValue.ESP(preDecimal);
  }

  const postDecimalString = numericParts[1]
    .replace(/\D/g, '')
    .slice(0, ESP.significantDigits);

  // We have a post-decimal value, so we'll need to align it with the correct multiplier.
  // The correct multiplier is determined by the number of significant digits
  // in the currency code, which is 18 for ESP.
  const expectedMultiplier = 10n ** BigInt(postDecimalString.length);

  if (expectedMultiplier > ESP.significantDigitsMultiplier) {
    // The expected multiplier is larger than the significant digits multiplier,
    // This means we have more significant digits than the currency supports.
    // We need to truncate the post-decimal value to fit within the significant digits.

    // We really shouldn't get here...
    throw new UnimplementedError(
      'we somehow have more significant digits than the currency supports',
    );
  }

  const postDecimal =
    BigInt(postDecimalString) *
    (ESP.significantDigitsMultiplier / expectedMultiplier);

  return MonetaryValue.ESP(preDecimal + postDecimal);
}

interface ESPInputState {
  rawValue: TextEditingValue;
  transformed: TextEditingValue;
  money: MonetaryValue;
}

/**
 *
 */
function determineNewValue(
  decimalSeparator: string,
  groupSeparator: string,
  espFormatter: Intl.NumberFormat,
  prevState: ESPInputState,
  newTextEdit: TextEditingValue,
): [TextEditingValue, MonetaryValue] {
  // This needs to support various editing operation types while the user is
  // actively performing editing operations.
  //
  // We do not want to clobber the start of a potentially new value if the user
  // is editing in the middle of the value.
  //
  // We do need to be cognizant of the user typing in new characters that
  // truncate the value further up, such as removing leading zeroes.
  //
  // We also need to be cognizant of the user typing in new characters that
  // don't change the value of the input, such as typing in group separators, or
  // decimal separators.

  const nextValue = parseESPValue(
    decimalSeparator,
    groupSeparator,
    newTextEdit.text,
  );

  if (
    nextValue.value === prevState.money.value &&
    newTextEdit.text === prevState.transformed.text
  ) {
    // This is just a selection change.  There's nothing for us to do here
    // We also shouldn't be able to get here.
    breakpoint();
    return [newTextEdit, nextValue];
  }

  // We have our nextValue, and we have our previous value.  We need to
  // determine whether the next TextEditingValue needs to be transformed
  // to reflect the correct formatting of the nextValue.
  const nextFormatted = espFormatter.format(nextValue.toNumericLiteralString());
  const nextFormattedParts = espFormatter.formatToParts(
    nextValue.toNumericLiteralString(),
  );

  // The criteria for the determining the new cursor position seems like it
  // should be very complex, but we can simplify it tremendously by just
  // considering the changes between the lengths of the formatted values,
  // and the changes between the lengths of the raw text values.

  // There are some edge cases that require consideration, such as when the
  // currency symbol is at the start of the formatted value, and the user
  // is typing in a value that doesn't change the numeric value, but does
  // change the formatting, such as typing in grouping characters or
  // decimal separators.

  const isCurrencyPrefix = nextFormattedParts[0].type === 'currency';
  const currencyFormatLength = foldRIterable(
    (len, part) => len + part.value.length,
    0,
    filterIterable(
      nextFormattedParts,
      (part) => part.type === 'currency' || part.type === 'literal',
    ),
  );

  // We also can compare our input to the idealized cursor position, which
  // should be at the tail end of the numeric value entry.
  const idealNextCursorPosition = isCurrencyPrefix
    ? nextFormatted.length
    : nextFormatted.length - currencyFormatLength;

  if (
    nextValue.value === prevState.money.value &&
    nextFormatted === prevState.transformed.text &&
    newTextEdit.text.length > prevState.transformed.text.length
  ) {
    // The value hasn't actually changed, and the formatting hasn't changed.
    // This could be the user just typing in grouping characters or decimal
    // separators that don't actually change the value.
    return [newTextEdit, nextValue];
  }

  assert(
    newTextEdit.selection.end - newTextEdit.selection.start === 0,
    'newTextEdit is a modification on top of a previous selection, as such the resulting selection is guaranteed to be collapsed and 0 length',
  );

  const naiveCursorAdjustment = nextFormatted.length - newTextEdit.text.length;

  const proposedPosition = newTextEdit.selection.start + naiveCursorAdjustment;
  if (proposedPosition < currencyFormatLength && isCurrencyPrefix) {
    // We don't want to place the cursor inside the currency code.
    // Let's try to keep the relative offset from the end of the string intact.

    return [
      new TextEditingValue(
        nextFormatted,
        TextSelection.collapsed(idealNextCursorPosition),
      ),
      nextValue,
    ];
  }

  if (proposedPosition > idealNextCursorPosition && !isCurrencyPrefix) {
    // We don't want to place the cursor inside the currency code.
    return [
      new TextEditingValue(
        nextFormatted,
        TextSelection.collapsed(idealNextCursorPosition),
      ),
      nextValue,
    ];
  }

  return [
    new TextEditingValue(
      nextFormatted,
      TextSelection.collapsed(proposedPosition),
    ),
    nextValue,
  ];
}

const EXAMPLE_NUMBER_TEMPLATE = '1234567890.5';

export const ESPInput: React.FC<ESPInputProps> = (props) => {
  const { value: rawInitialValue, onChange, ...rest } = props;
  const numberFormatters = React.useContext(CurrentNumberFormatters);
  const espFormatter = numberFormatters.ESPFull;
  const initialValue = rawInitialValue ?? MonetaryValue.ESP(0n);
  const value = initialValue.toNumericLiteralString();
  const initial = new TextEditingValue(espFormatter.format(value));

  const exampleNumberFormat = React.useMemo(
    () => numberFormatters.default.formatToParts(EXAMPLE_NUMBER_TEMPLATE),
    [numberFormatters],
  );

  // We use our formatter to determine what the decimal separator is.  We
  // don't really care about the rest of the separators, but we do care
  // about the decimal separator, so we can split the value into pre and
  // post decimal values.
  const decimalSeparator = React.useMemo(
    () =>
      exampleNumberFormat.find((part) => part.type === 'decimal')?.value ?? '.',
    [exampleNumberFormat],
  );
  const groupSeparator = React.useMemo(
    () =>
      exampleNumberFormat.find((part) => part.type === 'group')?.value ?? ',',
    [exampleNumberFormat],
  );

  // Let's track the editing value of the input.
  const [state, setState] = React.useState<ESPInputState>({
    rawValue: initial,
    transformed: initial,
    money: initialValue,
  });

  React.useEffect(() => {
    let setTheState = setState;
    if (state.money.value !== initialValue.value) {
      // If the initial value has changed, we need to update the state.
      // This is useful for when the value is updated externally.
      setTheState((currentState) => {
        if (currentState.money.value === initialValue.value) {
          return currentState;
        }

        return {
          rawValue: new TextEditingValue(espFormatter.format(value)),
          transformed: new TextEditingValue(espFormatter.format(value)),
          money: initialValue,
        };
      });
    }

    return () => {
      setTheState = () => {};
    };
  }, [numberFormatters, state, initialValue, espFormatter, value]);

  return (
    <TextEditing
      {...rest}
      value={state.transformed}
      onKeyDown={() => {
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
      }}
      onChange={(event, newTextEdit) => {
        if (isChangeEvent(event)) {
          // We need to try and parse the value from the input.
          const [nextTextEdit, nextValue] = determineNewValue(
            decimalSeparator,
            groupSeparator,
            espFormatter,
            state,
            newTextEdit,
          );
          const nextState = {
            rawValue: newTextEdit,
            transformed: nextTextEdit,
            money: nextValue,
          };

          if (
            nextTextEdit.text !== newTextEdit.text ||
            !nextTextEdit.selection.isEquivalentTo(newTextEdit.selection) ||
            !nextTextEdit.composing.isEquivalentTo(newTextEdit.composing)
          ) {
            // We're making adjustments not accounted for.
            event.preventDefault();
          }

          setState(nextState);
          if (onChange) {
            onChange(event, nextValue);
          }

          return;
        }

        setState({
          ...state,
          rawValue: newTextEdit,
          transformed: newTextEdit,
        });
      }}
      onBlur={() => {
        // Let's correct the value when the input loses focus.  We do this
        // so that the UI indicates to the user their new value.

        const nextTextEditingValue = state.transformed.copyWith({
          selection: TextSelection.collapsed(-1),
        });
        setState({
          ...state,
          rawValue: nextTextEditingValue,
          transformed: nextTextEditingValue,
          money: parseESPValue(
            decimalSeparator,
            groupSeparator,
            nextTextEditingValue.text,
          ),
        });
      }}
    />
  );
};
