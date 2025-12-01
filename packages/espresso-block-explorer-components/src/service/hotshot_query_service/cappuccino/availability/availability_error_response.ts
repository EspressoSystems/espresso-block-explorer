import { assertInstanceOf } from '@/assert/assert';
import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { EspressoError, espressoErrorCodec } from '@/errors/index';

/**
 * CappuccinoAvailabilityErrorResponse is a response that is returned when an error
 * occurs while querying the Cappuccino Availability API.
 */
export class CappuccinoAvailabilityErrorResponse {
  readonly availability: EspressoError;

  constructor(availability: EspressoError) {
    this.availability = availability;
  }

  toJSON() {
    return cappuccinoAvailabilityErrorResponseCodec.encode(this);
  }
}

class CappuccinoAvailabilityErrorResponseDecoder implements Converter<
  unknown,
  CappuccinoAvailabilityErrorResponse
> {
  convert(input: unknown): CappuccinoAvailabilityErrorResponse {
    assertRecordWithKeys(input, 'Availability');

    return new CappuccinoAvailabilityErrorResponse(
      espressoErrorCodec.decode(input.Availability),
    );
  }
}

class CappuccinoAvailabilityErrorResponseEncoder implements Converter<CappuccinoAvailabilityErrorResponse> {
  convert(input: CappuccinoAvailabilityErrorResponse) {
    assertInstanceOf(input, CappuccinoAvailabilityErrorResponse);

    return {
      Availability: espressoErrorCodec.encode(input.availability),
    };
  }
}

class CappuccinoAvailabilityErrorResponseCodec extends TypeCheckingCodec<
  CappuccinoAvailabilityErrorResponse,
  ReturnType<
    InstanceType<
      new () => CappuccinoAvailabilityErrorResponseEncoder
    >['convert']
  >
> {
  readonly encoder = new CappuccinoAvailabilityErrorResponseEncoder();
  readonly decoder = new CappuccinoAvailabilityErrorResponseDecoder();
}

export const cappuccinoAvailabilityErrorResponseCodec =
  new CappuccinoAvailabilityErrorResponseCodec();

class UnwrappedCappuccinoAvailabilityErrorResponseDecoder implements Converter<
  unknown,
  EspressoError
> {
  convert(input: unknown): EspressoError {
    return cappuccinoAvailabilityErrorResponseCodec.decode(input).availability;
  }
}

export const unwrappedCappuccinoAvailabilityErrorResponseDecoder =
  new UnwrappedCappuccinoAvailabilityErrorResponseDecoder();
