import { ESPSymbol } from '@/components/visual/currency/esp_symbol';
import { CurrentNumberFormatters } from '@/contexts/number_formatters_provider';
import { UnimplementedError } from '@/errors/unimplemented_error';
import {
  expandIterable,
  filterIterable,
  mapIterable,
} from '@/functional/functional';
import { ESP } from '@/models/block_explorer/currency_code';
import { default as MonetaryValue } from '@/models/block_explorer/monetary_value';
import { default as React } from 'react';
import {
  isArabicNumeralKey,
  shouldIgnoreKeyDownEventForEditing,
  TextEditing,
  TextEditingProps,
} from '../text/text';
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

/**
 * isChangeEvent determines whether the given event is a ChangeEvent.
 */
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
  numberMap: NumberMap,
  value: string,
): MonetaryValue {
  for (let i = 0; i < numberMap.length; i++) {
    const fromValue = numberMap[i];
    const toValue = LATN_DIGIT_MAP[i];
    if (fromValue === toValue) {
      // No need to replace the mapping
      continue;
    }

    value = value.replaceAll(fromValue, toValue);
  }

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
 * EXAMPLE_NUMBER_TEMPLATE is a template number used to determine locale
 * specific formatting.
 */
const EXAMPLE_NUMBER_TEMPLATE = '1234567890.5';
type NumberMap = [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
];
const LATN_DIGIT_MAP = '0123456789'.split('') as NumberMap;

/**
 * CurrencyCodeSide indicates whether the currency code is a prefix or suffix.
 */
enum CurrencyCodeSide {
  prefix = -1,
  suffix = 1,
}

/**
 * previewEdit previews the result of applying the incoming edit to the
 * given TextEditingValue.
 */
function previewEdit(value: TextEditingValue, incoming: string): string {
  return [
    value.selection.textBefore(value.text),
    incoming,
    value.selection.textAfter(value.text),
  ].join('');
}

/**
 * previewValidFormat previews the formatted value of the given input
 * value according to the given formatter and locale settings.
 */
function previewValidFormat(
  formatter: Intl.NumberFormat,
  decimalSeparator: string,
  groupSeparator: string,
  numberMap: NumberMap,
  value: string,
): string {
  const parsedValue = parseESPValue(
    decimalSeparator,
    groupSeparator,
    numberMap,
    value,
  );

  return Array.from(
    mapIterable(
      filterIterable(
        formatter.formatToParts(parsedValue.toNumericLiteralString()),
        (part) => part.type !== 'group',
      ),
      (part) => part.value,
    ),
  ).join('');
}

/**
 * shouldAllowEventEdit determines whether the given edit event should be
 * allowed based on whether it would result in a valid formatted value.
 */
function shouldAllowEventEdit(
  formatter: Intl.NumberFormat,
  decimalSeparator: string,
  groupSeparator: string,
  numberMap: NumberMap,
  expectedResult: string,
) {
  const resultingFormat = previewValidFormat(
    formatter,
    decimalSeparator,
    groupSeparator,
    numberMap,
    expectedResult,
  );

  if (expectedResult === resultingFormat) {
    // The resulting format is valid, so we can allow it.
    return true;
  }

  if (
    expectedResult.startsWith(resultingFormat) &&
    expectedResult.substring(resultingFormat.length) === decimalSeparator &&
    resultingFormat.indexOf(decimalSeparator) === -1
  ) {
    // This is a special case where the user is trying to enter a
    // fractional value by typing the decimal separator at the end
    // of the value.  We want to allow this.
    return true;
  }

  if (
    expectedResult.length > resultingFormat.length &&
    expectedResult.startsWith(resultingFormat) &&
    ((expectedResult[resultingFormat.length] === decimalSeparator &&
      expectedResult
        .substring(resultingFormat.length + 1)
        .split('')
        .every((char) => numberMap.indexOf(char) >= 0)) ||
      (resultingFormat.indexOf(decimalSeparator) > 0 &&
        expectedResult
          .substring(resultingFormat.length)
          .split('')
          .every((char) => numberMap.indexOf(char) >= 0))) &&
    expectedResult.length - expectedResult.indexOf(decimalSeparator) < 19
  ) {
    // This is a special case where the user is adding `0`s after the decimal
    // separator.  We want to allow this as long as it doesn't exceed the
    // significant digits.
    return true;
  }

  // At this point, we know that the resulting format is invalid.
  // We need to block this input.
  return false;
}

/**
 * ESPInput is a React component that renders an input for ESP monetary values.
 */
export const ESPInput: React.FC<ESPInputProps> = (props) => {
  const { value: rawInitialValue, onChange, ...rest } = props;
  const numberFormatters = React.useContext(CurrentNumberFormatters);
  const initialValue = rawInitialValue;

  const exampleNumberFormat = React.useMemo(
    () => numberFormatters.ESPFull.formatToParts(EXAMPLE_NUMBER_TEMPLATE),
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
  const currencyCodeSide = React.useMemo(
    () =>
      exampleNumberFormat.findIndex((part) => part.type === 'currency') <
      exampleNumberFormat.length / 2
        ? CurrencyCodeSide.prefix
        : CurrencyCodeSide.suffix,
    [exampleNumberFormat],
  );

  const value = rawInitialValue ?? MonetaryValue.ESP(0n);
  const initial = new TextEditingValue(
    !initialValue
      ? ''
      : numberFormatters.defaultFinance
          .format(initialValue.toNumericLiteralString())
          .replaceAll(groupSeparator, ''),
  );

  // This is a number map of the digits '0-9' in order according to the
  // current locale.  We may use this later for validation.
  const numberMap = React.useMemo(() => {
    const digits = Array.from(
      expandIterable(
        mapIterable(
          filterIterable(
            exampleNumberFormat,
            (part) => part.type === 'integer',
          ),
          (part) => part.value,
        ),
        (part) => part.split(''),
      ),
    );

    // Rotate the digits so that '0' is at the start.
    const zero = digits.pop()!;
    return [zero, ...digits] as NumberMap;
  }, [exampleNumberFormat]);

  // Let's track the editing value of the input.
  const [state, setState] = React.useState<ESPInputState>({
    rawValue: initial,
    transformed: initial,
    money: value,
  });

  React.useEffect(() => {
    let setTheState = setState;
    if (initialValue && state.money.value !== initialValue.value) {
      // If the initial value has changed, we need to update the state.
      // This is useful for when the value is updated externally.
      setTheState((currentState) => {
        if (currentState.money.value === initialValue.value) {
          return currentState;
        }

        return {
          rawValue: new TextEditingValue(
            numberFormatters.defaultFinance
              .format(initialValue.toNumericLiteralString())
              .replaceAll(groupSeparator, ''),
          ),
          transformed: new TextEditingValue(
            numberFormatters.defaultFinance
              .format(initialValue.toNumericLiteralString())
              .replaceAll(groupSeparator, ''),
          ),
          money: initialValue,
        };
      });
    }

    return () => {
      setTheState = () => {};
    };
  }, [numberFormatters, state, initialValue, groupSeparator]);

  const inputComponent = (
    <TextEditing
      {...rest}
      value={state.transformed}
      onBeforeInput={(event) => {
        if (event.data === '. ') {
          // MacOS auto full stop insertion detected.  We want to block this
          // here as it bypasses all other input checks.
          // Thanks Apple
          event.stopPropagation();
          event.preventDefault();
        }
      }}
      onKeyDown={(event) => {
        if (shouldIgnoreKeyDownEventForEditing(event)) {
          return;
        }

        // Let's add Tab and Escape to the ignored keys.
        if (event.key === 'Tab' || event.key === 'Escape') {
          return;
        }

        // Stop all non-arabic numeral keys, except for the decimal separator.
        if (
          !isArabicNumeralKey(event) &&
          numberMap.indexOf(event.key) < 0 &&
          event.key !== decimalSeparator
        ) {
          event.preventDefault();
          event.stopPropagation();
          return;
        }

        // Let's inspect the anticipated edit result to see if this is a valid
        // representation.
        const expectedResult = previewEdit(state.rawValue, event.key);
        if (
          shouldAllowEventEdit(
            numberFormatters.defaultFinance,
            decimalSeparator,
            groupSeparator,
            numberMap,
            expectedResult,
          )
        ) {
          return;
        }

        // At this point, we know that the resulting format is invalid.
        // We need to block this input.
        event.stopPropagation();
        event.preventDefault();
      }}
      onPaste={(event) => {
        // Pasting generally allows the user to ignore our previous safety
        // checks. We want to enforce our formatting.  As a result, we will
        // allow the paste to occur only if the resulting value is valid.

        const textContent = event.clipboardData.getData('text');
        const expectedResult = previewEdit(state.rawValue, textContent);
        if (
          shouldAllowEventEdit(
            numberFormatters.defaultFinance,
            decimalSeparator,
            groupSeparator,
            numberMap,
            expectedResult,
          )
        ) {
          return;
        }

        event.stopPropagation();
        event.preventDefault();
      }}
      onChange={(event, newTextEdit) => {
        if (isChangeEvent(event)) {
          // We need to try and parse the value from the input.
          const nextValue = parseESPValue(
            decimalSeparator,
            groupSeparator,
            numberMap,
            newTextEdit.text,
          );
          const nextState = {
            rawValue: newTextEdit,
            transformed: newTextEdit,
            money: nextValue,
          };

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
            numberMap,
            nextTextEditingValue.text,
          ),
        });
      }}
    />
  );

  if (currencyCodeSide === CurrencyCodeSide.suffix) {
    return (
      <div className="esp-input-container currency-suffix">
        {inputComponent}
        <span className="currency-code">
          <ESPSymbol />
        </span>
      </div>
    );
  }

  return (
    <div className="esp-input-container currency-prefix">
      <span className="currency-code">
        <ESPSymbol />
      </span>
      {inputComponent}
    </div>
  );
};
