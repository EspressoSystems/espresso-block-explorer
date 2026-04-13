import { assertInstanceOf } from '@/assert/assert';
import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import {
  TaggedBase64,
  taggedBase64Codec,
} from '@/models/espresso/tagged_base64/tagged_base64';
import {
  AvailabilityAPIMerkleTreeProof,
  listAvailabilityAPIMerkleTreeProofCodec,
} from './merkle_tree_proof';

/**
 * AvailabilityAPITransactionProof represents a transaction proof in the
 * Availability API.
 */
export class AvailabilityAPITransactionProof {
  constructor(
    public readonly pos: TaggedBase64,
    public readonly proof: AvailabilityAPIMerkleTreeProof[],
  ) {}

  toJSON() {
    return availabilityAPITransactionProofCodec.encode(this);
  }
}

export class AvailabilityAPITransactionProofDecoder implements Converter<
  unknown,
  AvailabilityAPITransactionProof
> {
  convert(input: unknown): AvailabilityAPITransactionProof {
    assertRecordWithKeys(input, 'pos', 'proof');

    return new AvailabilityAPITransactionProof(
      taggedBase64Codec.decode(input.pos),
      listAvailabilityAPIMerkleTreeProofCodec.decode(input.proof),
    );
  }
}

export class AvailabilityAPITransactionProofEncoder implements Converter<AvailabilityAPITransactionProof> {
  convert(input: AvailabilityAPITransactionProof) {
    assertInstanceOf(input, AvailabilityAPITransactionProof);

    return {
      pos: taggedBase64Codec.encode(input.pos),
      proof: listAvailabilityAPIMerkleTreeProofCodec.encode(input.proof),
    };
  }
}

export class AvailablityAPITransactionProofCodec extends TypeCheckingCodec<
  AvailabilityAPITransactionProof,
  ReturnType<
    InstanceType<new () => AvailabilityAPITransactionProofEncoder>['convert']
  >
> {
  readonly encoder = new AvailabilityAPITransactionProofEncoder();
  readonly decoder = new AvailabilityAPITransactionProofDecoder();
}

export const availabilityAPITransactionProofCodec =
  new AvailablityAPITransactionProofCodec();
