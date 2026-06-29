import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import {
  availabilityAPIV0HeaderCodec,
  type AvailabilityAPIV0HeaderFields,
} from './block_header_v0';
import {
  AbstractAvailabilityAPIV2HeaderFields,
  availabilityAPIV2HeaderFieldsCodec,
} from './block_header_v2';
import {
  AbstractAvailabilityAPIV4HeaderFields,
  availabilityAPIV4HeaderFieldsCodec,
} from './block_header_v4';
import { WrappedVersion, wrappedVersionCodec } from './version';

export interface AvailabilityAPIHeaderFields extends AvailabilityAPIV0HeaderFields {}

export interface AvailabilityAPIHeader<
  F extends AvailabilityAPIHeaderFields = AvailabilityAPIHeaderFields,
> {
  readonly fields: F;
  readonly version: WrappedVersion;
}

export class AbstractAvailabilityAPIHeader<
  F extends AvailabilityAPIHeaderFields,
> implements AvailabilityAPIHeader<F> {
  constructor(
    public readonly version: WrappedVersion,
    public readonly fields: F,
  ) {}
}

export class AvailabilityAPIHeaderImpl<
  F extends AvailabilityAPIHeaderFields,
> extends AbstractAvailabilityAPIHeader<F> {
  constructor(version: WrappedVersion, fields: F) {
    super(version, fields);
    Object.freeze(this);
  }
}

class AvailabilityAPIHeaderDecoder implements Converter<
  unknown,
  AvailabilityAPIHeader<AvailabilityAPIHeaderFields>
> {
  convert(input: unknown): AvailabilityAPIHeader<AvailabilityAPIHeaderFields> {
    assertRecordWithKeys(input, 'version', 'fields');

    // Decode the version to determine how to decode the header
    const version = wrappedVersionCodec.decode(input.version);

    if (version.version.major === 0 && version.version.minor >= 4) {
      return new AvailabilityAPIHeaderImpl(
        version,
        availabilityAPIV4HeaderFieldsCodec.decode(input.fields),
      );
    }

    if (version.version.major === 0 && version.version.minor >= 2) {
      return new AvailabilityAPIHeaderImpl(
        version,
        availabilityAPIV2HeaderFieldsCodec.decode(input.fields),
      );
    }

    return new AvailabilityAPIHeaderImpl(
      version,
      availabilityAPIV0HeaderCodec.decode(input.fields),
    );
  }
}

class AvailabilityAPIHeaderEncoder implements Converter<
  AvailabilityAPIHeader<AvailabilityAPIHeaderFields>,
  unknown
> {
  convert(input: AvailabilityAPIHeader<AvailabilityAPIHeaderFields>): unknown {
    if (input.fields instanceof AbstractAvailabilityAPIV4HeaderFields) {
      return {
        version: wrappedVersionCodec.encode(input.version),
        fields: availabilityAPIV4HeaderFieldsCodec.encode(input.fields),
      };
    }

    if (input.fields instanceof AbstractAvailabilityAPIV2HeaderFields) {
      return {
        version: wrappedVersionCodec.encode(input.version),
        fields: availabilityAPIV2HeaderFieldsCodec.encode(input.fields),
      };
    }

    return {
      version: wrappedVersionCodec.encode(input.version),
      fields: availabilityAPIV0HeaderCodec.encode(input.fields),
    };
  }
}

class AvailabilityAPIHeaderCodec extends TypeCheckingCodec<
  AvailabilityAPIHeader<AvailabilityAPIHeaderFields>,
  unknown
> {
  public readonly encoder = new AvailabilityAPIHeaderEncoder();
  public readonly decoder = new AvailabilityAPIHeaderDecoder();
}

export const availabilityAPIHeaderCodec = new AvailabilityAPIHeaderCodec();
