import {
  Converter,
  TypeCheckingCodec,
  isRecord,
  isUnknown,
} from '../../../../convert/codec/convert';
import { numberCodec } from '../../../../convert/codec/number';
import InvalidInputError from '../../../../errors/InvalidInputError';
import {
  TaggedBase64,
  taggedBase64Codec,
} from '../../../../models/espresso/tagged_base64/TaggedBase64';
import {
  CappuccinoAPITransactionNMTEntry,
  cappuccinoAPITransactionNMTEntryCodec,
} from './transaction_nmt_entry';
import {
  CappuccinoAPITransactionProof,
  cappuccinoAPITransactionProofCodec,
} from './transaction_proof';

/**
 * CappuccinoAPITransactionResponse represents a transaction response in the
 * Cappuccino API.
 */
export class CappuccinoAPITransactionResponse {
  readonly transaction: CappuccinoAPITransactionNMTEntry;
  readonly block_hash: TaggedBase64;
  readonly proof: CappuccinoAPITransactionProof;
  readonly height: number;
  readonly hash: TaggedBase64;

  constructor(
    transaction: CappuccinoAPITransactionNMTEntry,
    block_hash: TaggedBase64,
    proof: CappuccinoAPITransactionProof,
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
    return cappuccinoAPITransactionResponseCodec.encode(this);
  }
}

export class CappuccinoAPITransactionResponseDecoder
  implements Converter<unknown, CappuccinoAPITransactionResponse>
{
  convert(input: unknown): CappuccinoAPITransactionResponse {
    if (
      !isRecord(input, 'transaction', isUnknown) ||
      !isRecord(input, 'block_hash', isUnknown) ||
      !isRecord(input, 'proof', isUnknown) ||
      !isRecord(input, 'height', isUnknown) ||
      !isRecord(input, 'hash', isUnknown)
    ) {
      throw new InvalidInputError();
    }

    return new CappuccinoAPITransactionResponse(
      cappuccinoAPITransactionNMTEntryCodec.decoder.convert(input.transaction),
      taggedBase64Codec.decode(input.block_hash),
      cappuccinoAPITransactionProofCodec.decoder.convert(input.proof),
      numberCodec.decode(input.height),
      taggedBase64Codec.decode(input.hash),
    );
  }
}

export class CappuccinoAPITransactionResponseEncoder
  implements Converter<CappuccinoAPITransactionResponse>
{
  convert(input: CappuccinoAPITransactionResponse) {
    return {
      transaction: cappuccinoAPITransactionNMTEntryCodec.encode(
        input.transaction,
      ),
      block_hash: taggedBase64Codec.encode(input.block_hash),
      proof: cappuccinoAPITransactionProofCodec.encode(input.proof),
      height: numberCodec.encode(input.height),
      hash: taggedBase64Codec.encode(input.hash),
    };
  }
}

export class CappuccinoAPITransactionResponseCodec extends TypeCheckingCodec<
  CappuccinoAPITransactionResponse,
  ReturnType<
    InstanceType<new () => CappuccinoAPITransactionResponseEncoder>['convert']
  >
> {
  readonly encoder = new CappuccinoAPITransactionResponseEncoder();
  readonly decoder = new CappuccinoAPITransactionResponseDecoder();
}

export const cappuccinoAPITransactionResponseCodec =
  new CappuccinoAPITransactionResponseCodec();
