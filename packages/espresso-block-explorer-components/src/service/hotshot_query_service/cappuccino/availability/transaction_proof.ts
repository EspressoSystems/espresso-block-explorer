import {
  Converter,
  InvalidInputError,
  TypeCheckingCodec,
  isRecord,
  isUnknown,
} from '../../../../convert/codec/convert';
import { isUnknownArray } from '../../../../convert/codec/unknown';
import {
  TaggedBase64,
  taggedBase64Codec,
} from '../../../../models/espresso/tagged_base64/TaggedBase64';
import {
  CappuccinoAPIMerkleTreeProof,
  listCappuccinoAPIMerkleTreeProofCodec,
} from './merkle_tree_proof';

export class CappuccinoAPITransactionProof {
  readonly pos: TaggedBase64;
  readonly proof: CappuccinoAPIMerkleTreeProof[];

  constructor(pos: TaggedBase64, proof: CappuccinoAPIMerkleTreeProof[]) {
    this.pos = pos;
    this.proof = proof;
  }

  toJSON() {
    return cappuccinoAPITransactionProofCodec.encode(this);
  }
}

export class CappuccinoAPITransactionProofDecoder
  implements Converter<unknown, CappuccinoAPITransactionProof>
{
  convert(input: unknown): CappuccinoAPITransactionProof {
    if (
      !isRecord(input, 'pos', isUnknown) ||
      !isRecord(input, 'proof', isUnknownArray)
    ) {
      throw new InvalidInputError();
    }

    return new CappuccinoAPITransactionProof(
      taggedBase64Codec.decode(input.pos),
      listCappuccinoAPIMerkleTreeProofCodec.decode(input.proof),
    );
  }
}

export class CappuccinoAPITransactionProofEncoder
  implements Converter<CappuccinoAPITransactionProof>
{
  convert(input: CappuccinoAPITransactionProof) {
    return {
      pos: taggedBase64Codec.encode(input.pos),
      proof: listCappuccinoAPIMerkleTreeProofCodec.encode(input.proof),
    };
  }
}

export class CappuccinoAPITransactionProofCodec extends TypeCheckingCodec<
  CappuccinoAPITransactionProof,
  ReturnType<
    InstanceType<new () => CappuccinoAPITransactionProofEncoder>['convert']
  >
> {
  readonly encoder = new CappuccinoAPITransactionProofEncoder();
  readonly decoder = new CappuccinoAPITransactionProofDecoder();
}

export const cappuccinoAPITransactionProofCodec =
  new CappuccinoAPITransactionProofCodec();
