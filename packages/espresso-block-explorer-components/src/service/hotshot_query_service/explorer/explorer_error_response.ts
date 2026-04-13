import { assertInstanceOf } from '@/assert/assert';
import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { espressoErrorCodec } from '@/errors/registry';

/**
 * ExplorerErrorResponse is a response that is returned when an error
 * occurs while querying the Explorer API.
 */
export class ExplorerErrorResponse {
  constructor(public readonly explorer: ExplorerErrorWrapper) {}

  toJSON() {
    return explorerErrorResponseCodec.encode(this);
  }
}

class ExplorerErrorResponseDecoder implements Converter<
  unknown,
  ExplorerErrorResponse
> {
  convert(input: unknown): ExplorerErrorResponse {
    assertRecordWithKeys(input, 'Explorer');

    return new ExplorerErrorResponse(
      explorerErrorWrapperCodec.decode(input.Explorer),
    );
  }
}

class ExplorerErrorResponseEncoder implements Converter<ExplorerErrorResponse> {
  convert(input: ExplorerErrorResponse) {
    assertInstanceOf(input, ExplorerErrorResponse);

    return {
      Explorer: explorerErrorWrapperCodec.encode(input.explorer),
    };
  }
}

class ExplorerErrorResponseCodec extends TypeCheckingCodec<
  ExplorerErrorResponse,
  ReturnType<InstanceType<new () => ExplorerErrorResponseEncoder>['convert']>
> {
  readonly encoder = new ExplorerErrorResponseEncoder();
  readonly decoder = new ExplorerErrorResponseDecoder();
}

/**
 * ExplorerErrorWrapper is a wrapper around an EspressoError that
 * occurred while querying the Explorer API.
 */
export class ExplorerErrorWrapper {
  constructor(public readonly error: unknown) {}

  toJSON() {
    return explorerErrorWrapperCodec.encode(this);
  }
}

class ExplorerErrorWrapperDecoder implements Converter<
  unknown,
  ExplorerErrorWrapper
> {
  convert(input: unknown): ExplorerErrorWrapper {
    assertRecordWithKeys(input, 'error');

    return new ExplorerErrorWrapper(espressoErrorCodec.decode(input.error));
  }
}

class ExplorerErrorWrapperEncoder implements Converter<ExplorerErrorWrapper> {
  convert(input: ExplorerErrorWrapper) {
    assertInstanceOf(input, ExplorerErrorWrapper);

    return {
      Explorer: espressoErrorCodec.encode(input.error),
    };
  }
}

class ExplorerErrorWrapperCodec extends TypeCheckingCodec<
  ExplorerErrorWrapper,
  ReturnType<InstanceType<new () => ExplorerErrorWrapperEncoder>['convert']>
> {
  readonly encoder = new ExplorerErrorWrapperEncoder();
  readonly decoder = new ExplorerErrorWrapperDecoder();
}

export const explorerErrorWrapperCodec = new ExplorerErrorWrapperCodec();

export const explorerErrorResponseCodec = new ExplorerErrorResponseCodec();

class UnwrappedExplorerErrorResponseDecoder implements Converter<
  unknown,
  unknown
> {
  convert(input: unknown): unknown {
    return explorerErrorResponseCodec.decode(input).explorer.error;
  }
}

export const unwrappedExplorerErrorResponseDecoder =
  new UnwrappedExplorerErrorResponseDecoder();
