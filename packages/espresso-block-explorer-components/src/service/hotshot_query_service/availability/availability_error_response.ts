import { assertInstanceOf } from '@/assert/assert';
import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { espressoErrorCodec } from '@/errors/registry';

/**
 * AvailabilityErrorResponse is a response that is returned when an error
 * occurs while querying the Availability API.
 */
export class AvailabilityErrorResponse {
  readonly availability: unknown;

  constructor(availability: unknown) {
    this.availability = availability;
  }

  toJSON() {
    return availabilityErrorResponseCodec.encode(this);
  }
}

class AvailabilityErrorResponseDecoder implements Converter<
  unknown,
  AvailabilityErrorResponse
> {
  convert(input: unknown): AvailabilityErrorResponse {
    assertRecordWithKeys(input, 'Availability');

    return new AvailabilityErrorResponse(
      espressoErrorCodec.decode(input.Availability),
    );
  }
}

class AvailabilityErrorResponseEncoder implements Converter<AvailabilityErrorResponse> {
  convert(input: AvailabilityErrorResponse) {
    assertInstanceOf(input, AvailabilityErrorResponse);

    return {
      Availability: espressoErrorCodec.encode(input.availability),
    };
  }
}

class AvailabilityErrorResponseCodec extends TypeCheckingCodec<
  AvailabilityErrorResponse,
  ReturnType<
    InstanceType<new () => AvailabilityErrorResponseEncoder>['convert']
  >
> {
  readonly encoder = new AvailabilityErrorResponseEncoder();
  readonly decoder = new AvailabilityErrorResponseDecoder();
}

export const availabilityErrorResponseCodec =
  new AvailabilityErrorResponseCodec();

class UnwrappedAvailabilityErrorResponseDecoder implements Converter<
  unknown,
  unknown
> {
  convert(input: unknown): unknown {
    return availabilityErrorResponseCodec.decode(input).availability;
  }
}

export const unwrappedAvailabilityErrorResponseDecoder =
  new UnwrappedAvailabilityErrorResponseDecoder();
