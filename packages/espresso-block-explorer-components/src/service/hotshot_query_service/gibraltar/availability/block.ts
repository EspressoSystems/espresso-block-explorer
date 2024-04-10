import {
  Codec,
  Converter,
  InvalidInputError,
  isNumber,
  isRecord,
  isUnknown,
} from '../../../../convert/codec/convert';
import {
  TaggedBase64,
  taggedBase64Codec,
} from '../../../../models/espresso/tagged_base64/TaggedBase64';
import { GibraltarAPIHeader, gibraltarAPIHeaderCodec } from './block_header';
import { GibraltarAPIPayload, gibraltarAPIPayloadCodec } from './payload';

export class GibraltarAPIBlock {
  readonly header: GibraltarAPIHeader;
  readonly payload: GibraltarAPIPayload;
  readonly hash: TaggedBase64;
  readonly size: number;

  constructor(
    header: GibraltarAPIHeader,
    payload: GibraltarAPIPayload,
    hash: TaggedBase64,
    size: number,
  ) {
    this.header = header;
    this.payload = payload;
    this.hash = hash;
    this.size = size;
  }

  toJSON() {
    return gibraltarAPIBlockCodec.encode(this);
  }
}

export class GibraltarAPIBlockDecode
  implements Converter<unknown, GibraltarAPIBlock>
{
  convert(input: unknown): GibraltarAPIBlock {
    if (
      !isRecord(input, 'header', isUnknown) ||
      !isRecord(input, 'payload', isUnknown) ||
      !isRecord(input, 'hash', isUnknown) ||
      !isRecord(input, 'size', isNumber)
    ) {
      throw new InvalidInputError();
    }

    return new GibraltarAPIBlock(
      gibraltarAPIHeaderCodec.decode(input.header),
      gibraltarAPIPayloadCodec.decode(input.payload),
      taggedBase64Codec.decode(input.hash),
      input.size,
    );
  }
}

export class GibraltarAPIBlockEncoder
  implements Converter<GibraltarAPIBlock, unknown>
{
  convert(input: GibraltarAPIBlock): unknown {
    return {
      header: gibraltarAPIHeaderCodec.encode(input.header),
      payload: gibraltarAPIPayloadCodec.encode(input.payload),
      hash: taggedBase64Codec.encode(input.hash),
      size: input.size,
    };
  }
}

export class GibraltarAPIBlockCodec extends Codec<GibraltarAPIBlock, unknown> {
  readonly encoder = new GibraltarAPIBlockEncoder();
  readonly decoder = new GibraltarAPIBlockDecode();
}

export const gibraltarAPIBlockCodec = new GibraltarAPIBlockCodec();
