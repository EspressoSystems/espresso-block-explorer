import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import { numberCodec } from '@/convert/codec/number';

/**
 * AvailabilityVersion represents an Espresso version in the Availablity API.
 */
export class AvailabilityVersion {
  constructor(
    public readonly major: number,
    public readonly minor: number,
  ) {
    Object.freeze(this);
  }

  toJSON() {
    return availabilityVersionCodec.encode(this);
  }
}

class AvailabilitytVersionDecodert implements Converter<
  unknown,
  AvailabilityVersion
> {
  convert(input: unknown): AvailabilityVersion {
    assertRecordWithKeys(input, 'major', 'minor');

    return new AvailabilityVersion(
      numberCodec.decode(input.major),
      numberCodec.decode(input.minor),
    );
  }
}

class AvailabilityVersionEncoder implements Converter<
  AvailabilityVersion,
  unknown
> {
  convert(input: AvailabilityVersion): unknown {
    return {
      major: numberCodec.encode(input.major),
      minor: numberCodec.encode(input.minor),
    };
  }
}

class AvailabilityVersionCodec extends TypeCheckingCodec<
  AvailabilityVersion,
  unknown
> {
  public readonly encoder = new AvailabilityVersionEncoder();
  public readonly decoder = new AvailabilitytVersionDecodert();
}

export const availabilityVersionCodec = new AvailabilityVersionCodec();

export class WrappedVersion {
  constructor(public readonly version: AvailabilityVersion) {
    Object.freeze(this);
  }

  toJSON() {
    return wrappedVersionCodec.encode(this);
  }
}

class WrappedVersionDecoder implements Converter<unknown, WrappedVersion> {
  convert(input: unknown): WrappedVersion {
    assertRecordWithKeys(input, 'Version');

    return new WrappedVersion(availabilityVersionCodec.decode(input.Version));
  }
}

class WrappedVersionEncoder implements Converter<WrappedVersion, unknown> {
  convert(input: WrappedVersion): unknown {
    return {
      Version: availabilityVersionCodec.encode(input.version),
    };
  }
}

class WrappedVersionCodec extends TypeCheckingCodec<WrappedVersion, unknown> {
  public readonly encoder = new WrappedVersionEncoder();
  public readonly decoder = new WrappedVersionDecoder();
}

export const wrappedVersionCodec = new WrappedVersionCodec();
