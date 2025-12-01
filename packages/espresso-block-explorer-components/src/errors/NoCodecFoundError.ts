import { breakpoint } from '@/assert/debugger';
import { stringCodec } from '@/convert/codec/string';

const kNoCodecFoundErrorCode = 'NoCodecFoundError';

export default class NoCodecFoundError extends Error {
  readonly codec: string;
  constructor(
    codec: string,
    message: string = `no codec found for: "${codec}"`,
  ) {
    super(message);
    this.codec = codec;
    Object.freeze(this);
    breakpoint();
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

  get code(): string {
    return kNoCodecFoundErrorCode;
  }
}

// No Converts or Codecs are implemented for this file, as doing so would
// yield a circular dependency.
