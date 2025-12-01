import { CurrentNumberFormatters } from '@/components/contexts';
import UnimplementedError from '@/errors/UnimplementedError';
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
  formatter: Intl.NumberFormat,
  value: string,
): MonetaryValue {
  // Get rid of any non numeric values at the start of the string.
  value = value.replace(/^[^\d]+/g, '');

  // Get rid of any non numeric values at the end of the string.
  value = value.replace(/[^\d]+$/g, '');

  // We use our formatter to determine what the decimal separator is.  We
  // don't really care about the rest of the separators, but we do care
  // about the decimal separator, so we can split the value into pre and
  // post decimal values.
  const parts = formatter.formatToParts(0.5);
  const decimalSeparator =
    parts.find((part) => part.type === 'decimal')?.value ?? '.';

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

function determineValue(money: MonetaryValue): number | bigint {
  if (money.value % money.currency.significantDigitsMultiplier === 0n) {
    return money.value / money.currency.significantDigitsMultiplier;
  }

  return (
    Number(money.value) / Number(money.currency.significantDigitsMultiplier)
  );
}

export const ESPInput: React.FC<ESPInputProps> = (props) => {
  const formatter = React.useContext(CurrentNumberFormatters).ESP;
  const { value: rawInitialValue, onChange, ...rest } = props;
  const initialValue = rawInitialValue ?? MonetaryValue.ESP(0n);
  const value = determineValue(initialValue);
  const initial = new TextEditingValue(formatter.format(value));

  // Let's track the editing value of the input.
  const [state, setState] = React.useState({
    rawValue: initial,
    transformed: initial,
    money: initialValue,
  });

  if (state.money.value !== initialValue.value) {
    // If the initial value has changed, we need to update the state.
    // This is useful for when the value is updated externally.
    setState({
      rawValue: new TextEditingValue(formatter.format(value)),
      transformed: new TextEditingValue(formatter.format(value)),
      money: initialValue,
    });
  }

  return (
    <TextEditing
      {...rest}
      value={state.rawValue}
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
      onChange={(event, newValue) => {
        // event.preventDefault();
        // event.stopPropagation();

        if (isChangeEvent(event)) {
          // We need to try and parse the value from the input.
          const nextValue = parseESPValue(formatter, newValue.text);
          const nextState = {
            rawValue: newValue,
            transformed: newValue.copyWith({
              text: formatter.format(
                nextValue.value /
                  nextValue.currency.significantDigitsMultiplier,
              ),
            }),
            money: nextValue,
          };
          setState(nextState);
          if (onChange) {
            onChange(event, nextState.money);
          }
          return;
        }

        setState({
          ...state,
          rawValue: newValue,
          transformed: newValue,
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
          money: parseESPValue(formatter, nextTextEditingValue.text),
        });
      }}
    />
  );
};
