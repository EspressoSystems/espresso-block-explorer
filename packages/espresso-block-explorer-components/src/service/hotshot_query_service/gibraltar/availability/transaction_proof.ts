import {
  Codec,
  Converter,
  InvalidInputError,
  isRecord,
  isUnknown,
} from '../../../../convert/codec/convert';
import { isUnknownArray } from '../../../../convert/codec/unknown';
import {
  TaggedBase64,
  taggedBase64Codec,
} from '../../../../models/espresso/tagged_base64/TaggedBase64';
import {
  GibraltarAPIMerkleTreeProof,
  listGibraltarAPIMerkleTreeProofCodec,
} from './merkle_tree_proof';

export class GibraltarAPITransactionProof {
  readonly pos: TaggedBase64;
  readonly proof: GibraltarAPIMerkleTreeProof[];

  constructor(pos: TaggedBase64, proof: GibraltarAPIMerkleTreeProof[]) {
    this.pos = pos;
    this.proof = proof;
  }

  toJSON() {
    return gibraltarAPITransactionProofCodec.encode(this);
  }
}

export class GibraltarAPITransactionProofDecoder
  implements Converter<unknown, GibraltarAPITransactionProof>
{
  convert(input: unknown): GibraltarAPITransactionProof {
    if (
      !isRecord(input, 'pos', isUnknown) ||
      !isRecord(input, 'proof', isUnknownArray)
    ) {
      throw new InvalidInputError();
    }

    return new GibraltarAPITransactionProof(
      taggedBase64Codec.decode(input.pos),
      listGibraltarAPIMerkleTreeProofCodec.decode(input.proof),
    );
  }
}

export class GibraltarAPITransactionProofEncoder
  implements Converter<GibraltarAPITransactionProof, unknown>
{
  convert(input: GibraltarAPITransactionProof): unknown {
    return {
      pos: taggedBase64Codec.encode(input.pos),
      proof: listGibraltarAPIMerkleTreeProofCodec.encode(input.proof),
    };
  }
}

export class GibraltarAPITransactionProofCodec extends Codec<
  GibraltarAPITransactionProof,
  unknown
> {
  readonly encoder = new GibraltarAPITransactionProofEncoder();
  readonly decoder = new GibraltarAPITransactionProofDecoder();
}

export const gibraltarAPITransactionProofCodec =
  new GibraltarAPITransactionProofCodec();
