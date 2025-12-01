import { assertInstanceOf } from '@/assert/assert';
import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { EspressoError, espressoErrorCodec } from '@/errors/index';

/**
 * CappuccinoExplorerErrorResponse is a response that is returned when an error
 * occurs while querying the Cappuccino Explorer API.
 */
export class CappuccinoExplorerErrorResponse {
  readonly explorer: CappuccinoExplorerErrorWrapper;

  constructor(explorer: CappuccinoExplorerErrorWrapper) {
    this.explorer = explorer;
  }

  toJSON() {
    return cappuccinoExplorerErrorResponseCodec.encode(this);
  }
}

class CappuccinoExplorerErrorResponseDecoder implements Converter<
  unknown,
  CappuccinoExplorerErrorResponse
> {
  convert(input: unknown): CappuccinoExplorerErrorResponse {
    assertRecordWithKeys(input, 'Explorer');

    return new CappuccinoExplorerErrorResponse(
      cappuccinoExplorerErrorWrapperCodec.decode(input.Explorer),
    );
  }
}

class CappuccinoExplorerErrorResponseEncoder implements Converter<CappuccinoExplorerErrorResponse> {
  convert(input: CappuccinoExplorerErrorResponse) {
    assertInstanceOf(input, CappuccinoExplorerErrorResponse);

    return {
      Explorer: cappuccinoExplorerErrorWrapperCodec.encode(input.explorer),
    };
  }
}

class CappuccinoExplorerErrorResponseCodec extends TypeCheckingCodec<
  CappuccinoExplorerErrorResponse,
  ReturnType<
    InstanceType<new () => CappuccinoExplorerErrorResponseEncoder>['convert']
  >
> {
  readonly encoder = new CappuccinoExplorerErrorResponseEncoder();
  readonly decoder = new CappuccinoExplorerErrorResponseDecoder();
}

/**
 * CappuccinoExplorerErrorWrapper is a wrapper around an EspressoError that
 * occurred while querying the Cappuccino Explorer API.
 */
export class CappuccinoExplorerErrorWrapper {
  readonly error: EspressoError;

  constructor(error: EspressoError) {
    this.error = error;
  }

  toJSON() {
    return cappuccinoExplorerErrorWrapperCodec.encode(this);
  }
}

class CappuccinoExplorerErrorWrapperDecoder implements Converter<
  unknown,
  CappuccinoExplorerErrorWrapper
> {
  convert(input: unknown): CappuccinoExplorerErrorWrapper {
    assertRecordWithKeys(input, 'error');

    return new CappuccinoExplorerErrorWrapper(
      espressoErrorCodec.decode(input.error),
    );
  }
}

class CappuccinoExplorerErrorWrapperEncoder implements Converter<CappuccinoExplorerErrorWrapper> {
  convert(input: CappuccinoExplorerErrorWrapper) {
    assertInstanceOf(input, CappuccinoExplorerErrorWrapper);

    return {
      Explorer: espressoErrorCodec.encode(input.error),
    };
  }
}

class CappuccinoExplorerErrorWrapperCodec extends TypeCheckingCodec<
  CappuccinoExplorerErrorWrapper,
  ReturnType<
    InstanceType<new () => CappuccinoExplorerErrorWrapperEncoder>['convert']
  >
> {
  readonly encoder = new CappuccinoExplorerErrorWrapperEncoder();
  readonly decoder = new CappuccinoExplorerErrorWrapperDecoder();
}

export const cappuccinoExplorerErrorWrapperCodec =
  new CappuccinoExplorerErrorWrapperCodec();

export const cappuccinoExplorerErrorResponseCodec =
  new CappuccinoExplorerErrorResponseCodec();

class UnwrappedCappuccinoExplorerErrorResponseDecoder implements Converter<
  unknown,
  EspressoError
> {
  convert(input: unknown): EspressoError {
    return cappuccinoExplorerErrorResponseCodec.decode(input).explorer.error;
  }
}

export const unwrappedCappuccinoExplorerErrorResponseDecoder =
  new UnwrappedCappuccinoExplorerErrorResponseDecoder();
