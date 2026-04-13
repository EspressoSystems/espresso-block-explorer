import { assertInstanceOf } from '@/assert/assert';
import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { numberCodec } from '@/convert/codec/number';
import {
  TaggedBase64,
  taggedBase64Codec,
} from '@/models/espresso/tagged_base64/tagged_base64';
import {
  AvailabilityAPITransactionNMTEntry,
  availabilityAPITransactionNMTEntryCodec,
} from './transaction_nmt_entry';
import {
  AvailabilityAPITransactionProof,
  availabilityAPITransactionProofCodec,
} from './transaction_proof';

/**
 * AvailabilityAPITransactionResponse represents a transaction response in the
 * Availability API.
 */
export class AvailabilityAPITransactionResponse {
  constructor(
    public readonly transaction: AvailabilityAPITransactionNMTEntry,
    public readonly block_hash: TaggedBase64,
    public readonly proof: AvailabilityAPITransactionProof,
    public readonly height: number,
    public readonly hash: TaggedBase64,
  ) {}

  toJSON() {
    return availabilityAPITransactionResponseCodec.encode(this);
  }
}

export class AvailabilityAPITransactionResponseDecoder implements Converter<
  unknown,
  AvailabilityAPITransactionResponse
> {
  convert(input: unknown): AvailabilityAPITransactionResponse {
    assertRecordWithKeys(
      input,
      'transaction',
      'block_hash',
      'proof',
      'height',
      'hash',
    );

    return new AvailabilityAPITransactionResponse(
      availabilityAPITransactionNMTEntryCodec.decoder.convert(
        input.transaction,
      ),
      taggedBase64Codec.decode(input.block_hash),
      availabilityAPITransactionProofCodec.decoder.convert(input.proof),
      numberCodec.decode(input.height),
      taggedBase64Codec.decode(input.hash),
    );
  }
}

export class AvailabilityAPITransactionResponseEncoder implements Converter<AvailabilityAPITransactionResponse> {
  convert(input: AvailabilityAPITransactionResponse) {
    assertInstanceOf(input, AvailabilityAPITransactionResponse);

    return {
      transaction: availabilityAPITransactionNMTEntryCodec.encode(
        input.transaction,
      ),
      block_hash: taggedBase64Codec.encode(input.block_hash),
      proof: availabilityAPITransactionProofCodec.encode(input.proof),
      height: numberCodec.encode(input.height),
      hash: taggedBase64Codec.encode(input.hash),
    };
  }
}

export class AvailabilityAPITransactionResponseCodec extends TypeCheckingCodec<
  AvailabilityAPITransactionResponse,
  ReturnType<
    InstanceType<new () => AvailabilityAPITransactionResponseEncoder>['convert']
  >
> {
  readonly encoder = new AvailabilityAPITransactionResponseEncoder();
  readonly decoder = new AvailabilityAPITransactionResponseDecoder();
}

export const availabilityAPITransactionResponseCodec =
  new AvailabilityAPITransactionResponseCodec();
