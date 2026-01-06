import { assertRecordWithKeys, Converter, TypeCheckingCodec } from '@/convert/codec/convert';
import { cappuccinoAPIV0HeaderCodec, type CappuccinoAPIV0HeaderFields } from './block_header_v0';
import { WrappedVersion, wrappedVersionCodec } from './version';
import { AbstractCappuccinoAPIV2HeaderFields, cappuccinoAPIV2HeaderFieldsCodec } from './block_header_v2';
import { AbstractCappuccinoAPIV4Header, cappuccinoAPIV4HeaderCodec } from './block_header_v4';

export interface CappuccinoAPIHeaderFields extends CappuccinoAPIV0HeaderFields { }

export interface CappuccinoAPIHeader<F extends CappuccinoAPIHeaderFields = CappuccinoAPIHeaderFields> {
  readonly fields: F;
  readonly version: WrappedVersion;
}

export class AbstractCappuccinoAPIHeader<F extends CappuccinoAPIHeaderFields> implements CappuccinoAPIHeader<F> {
  constructor(
    public readonly version: WrappedVersion,
    public readonly fields: F,
  ) { }
}

export class CappuccinoAPIHeaderImpl<F extends CappuccinoAPIHeaderFields> extends AbstractCappuccinoAPIHeader<F> {
  constructor(
    version: WrappedVersion,
    fields: F,
  ) {
    super(version, fields);
    Object.freeze(this);
  }
}


class CappuccinoAPIHeaderDecoder implements Converter<
  unknown,
  CappuccinoAPIHeader<CappuccinoAPIHeaderFields>
> {
  convert(input: unknown): CappuccinoAPIHeader<CappuccinoAPIHeaderFields> {
    assertRecordWithKeys(
      input,
      'version',
      'fields',
    );

    // Decode the version to determine how to decode the header
    const version = wrappedVersionCodec.decode(input.version);

    if (version.version.major === 0 && version.version.minor >= 4) {
      return new CappuccinoAPIHeaderImpl(
        version,
        cappuccinoAPIV4HeaderCodec.decode(input.fields),
      );

    }

    if (version.version.major === 0 && version.version.minor >= 2) {
      return new CappuccinoAPIHeaderImpl(
        version,
        cappuccinoAPIV2HeaderFieldsCodec.decode(input.fields),
      );
    }

    return new CappuccinoAPIHeaderImpl(
      version,
      cappuccinoAPIV0HeaderCodec.decode(input.fields),
    );
  }
}

class CappuccinoAPIHeaderEncoder implements Converter<
  CappuccinoAPIHeader<CappuccinoAPIHeaderFields>,
  unknown
> {
  convert(input: CappuccinoAPIHeader<CappuccinoAPIHeaderFields>): unknown {
    if (input.fields instanceof AbstractCappuccinoAPIV4Header) {
      return {
        version: wrappedVersionCodec.encode(input.version),
        fields: cappuccinoAPIV4HeaderCodec.encode(input.fields),
      };
    }

    if (input.fields instanceof AbstractCappuccinoAPIV2HeaderFields) {
      return {
        version: wrappedVersionCodec.encode(input.version),
        fields: cappuccinoAPIV2HeaderFieldsCodec.encode(input.fields),
      };
    }

    return {
      version: wrappedVersionCodec.encode(input.version),
      fields: cappuccinoAPIV0HeaderCodec.encode(input.fields),
    };
  }
}

class CappuccinoAPIHeaderCodec extends TypeCheckingCodec<
  CappuccinoAPIHeader<CappuccinoAPIHeaderFields>,
  unknown
> {
  public readonly encoder = new CappuccinoAPIHeaderEncoder();
  public readonly decoder = new CappuccinoAPIHeaderDecoder();
}

export const cappuccinoAPIHeaderCodec = new CappuccinoAPIHeaderCodec();

