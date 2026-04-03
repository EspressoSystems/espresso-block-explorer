import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import { numberCodec } from '@/convert/codec/number';

/**
 * CappuccinoVersion represents an Espresso version in the Cappuccino API.
 */
export class CappuccinoVersion {
  constructor(
    public readonly major: number,
    public readonly minor: number,
  ) {
    Object.freeze(this);
  }

  toJSON() {
    return cappuccinoVersionCodec.encode(this);
  }
}

class CappuccinoVersionDecoder implements Converter<
  unknown,
  CappuccinoVersion
> {
  convert(input: unknown): CappuccinoVersion {
    assertRecordWithKeys(input, 'major', 'minor');

    return new CappuccinoVersion(
      numberCodec.decode(input.major),
      numberCodec.decode(input.minor),
    );
  }
}

class CappuccinoVersionEncoder implements Converter<
  CappuccinoVersion,
  unknown
> {
  convert(input: CappuccinoVersion): unknown {
    return {
      major: numberCodec.encode(input.major),
      minor: numberCodec.encode(input.minor),
    };
  }
}

class CappuccinoVersionCodec extends TypeCheckingCodec<
  CappuccinoVersion,
  unknown
> {
  public readonly encoder = new CappuccinoVersionEncoder();
  public readonly decoder = new CappuccinoVersionDecoder();
}

export const cappuccinoVersionCodec = new CappuccinoVersionCodec();

export class WrappedVersion {
  constructor(public readonly version: CappuccinoVersion) {
    Object.freeze(this);
  }

  toJSON() {
    return wrappedVersionCodec.encode(this);
  }
}

class WrappedVersionDecoder implements Converter<unknown, WrappedVersion> {
  convert(input: unknown): WrappedVersion {
    assertRecordWithKeys(input, 'Version');

    return new WrappedVersion(cappuccinoVersionCodec.decode(input.Version));
  }
}

class WrappedVersionEncoder implements Converter<WrappedVersion, unknown> {
  convert(input: WrappedVersion): unknown {
    return {
      Version: cappuccinoVersionCodec.encode(input.version),
    };
  }
}

class WrappedVersionCodec extends TypeCheckingCodec<WrappedVersion, unknown> {
  public readonly encoder = new WrappedVersionEncoder();
  public readonly decoder = new WrappedVersionDecoder();
}

export const wrappedVersionCodec = new WrappedVersionCodec();
