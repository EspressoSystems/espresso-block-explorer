import { stringCodec } from '@/convert/codec/string';

export default class NoCodecFoundError extends Error {
  readonly codec: string;
  constructor(
    codec: string,
    message: string = `no codec found for: "${codec}"`,
  ) {
    super(message);
    this.codec = codec;
    Object.freeze(this);
    // eslint-disable-next-line no-debugger
    debugger;
  }

  toJSON() {
    // This cannot reuse existing codecs as it would cause a circular
    // dependency.
    return {
      code: stringCodec.encode(NoCodecFoundError.name),
      message: stringCodec.encode(this.message),
      codec: stringCodec.encode(this.codec),
    };
  }
}

// No Converts or Codecs are implemented for this file, as doing so would
// yield a circular dependency.
