import { breakpoint } from '@/assert/debugger';

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
      code: 'NoCodecFoundError',
      message: this.message,
      codec: this.codec,
    };
  }

  get code(): string {
    return kNoCodecFoundErrorCode;
  }
}

// No Converts or Codecs are implemented for this file, as doing so would
// yield a circular dependency.
