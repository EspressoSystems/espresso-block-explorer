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
import {
  GibraltarAPITransactionNMTEntry,
  gibraltarAPITransactionNMTEntryCodec,
} from './transaction_nmt_entry';
import {
  GibraltarAPITransactionProof,
  gibraltarAPITransactionProofCodec,
} from './transaction_proof';

export class GibraltarAPITransactionResponse {
  readonly transaction: GibraltarAPITransactionNMTEntry;
  readonly block_hash: TaggedBase64;
  readonly proof: GibraltarAPITransactionProof;
  readonly height: number;
  readonly hash: TaggedBase64;

  constructor(
    transaction: GibraltarAPITransactionNMTEntry,
    block_hash: TaggedBase64,
    proof: GibraltarAPITransactionProof,
    height: number,
    hash: TaggedBase64,
  ) {
    this.transaction = transaction;
    this.block_hash = block_hash;
    this.proof = proof;
    this.height = height;
    this.hash = hash;
  }

  toJSON() {
    return gibraltarAPITransactionResponseCodec.encode(this);
  }
}

export class GibraltarAPITransactionResponseDecoder
  implements Converter<unknown, GibraltarAPITransactionResponse>
{
  convert(input: unknown): GibraltarAPITransactionResponse {
    if (
      !isRecord(input, 'transaction', isUnknown) ||
      !isRecord(input, 'block_hash', isUnknown) ||
      !isRecord(input, 'proof', isUnknown) ||
      !isRecord(input, 'height', isNumber) ||
      !isRecord(input, 'hash', isUnknown)
    ) {
      throw new InvalidInputError();
    }

    return new GibraltarAPITransactionResponse(
      gibraltarAPITransactionNMTEntryCodec.decoder.convert(input.transaction),
      taggedBase64Codec.decode(input.block_hash),
      gibraltarAPITransactionProofCodec.decoder.convert(input.proof),
      input.height,
      taggedBase64Codec.decode(input.hash),
    );
  }
}

export class GibraltarAPITransactionResponseEncoder
  implements Converter<GibraltarAPITransactionResponse, unknown>
{
  convert(input: GibraltarAPITransactionResponse): unknown {
    return {
      transaction: gibraltarAPITransactionNMTEntryCodec.encode(
        input.transaction,
      ),
      block_hash: taggedBase64Codec.encode(input.block_hash),
      proof: gibraltarAPITransactionProofCodec.encode(input.proof),
      height: input.height,
      hash: taggedBase64Codec.encode(input.hash),
    };
  }
}

export class GibraltarAPITransactionResponseCodec extends Codec<
  GibraltarAPITransactionResponse,
  unknown
> {
  readonly encoder = new GibraltarAPITransactionResponseEncoder();
  readonly decoder = new GibraltarAPITransactionResponseDecoder();
}

export const gibraltarAPITransactionResponseCodec =
  new GibraltarAPITransactionResponseCodec();
