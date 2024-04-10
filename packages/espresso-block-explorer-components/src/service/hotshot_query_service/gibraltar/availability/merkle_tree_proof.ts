import {
  ArrayCodec,
  ArrayDecoder,
  ArrayEncoder,
} from '../../../../convert/codec/array';
import {
  Codec,
  Converter,
  InvalidInputError,
  isRecord,
  isString,
  isUnknown,
} from '../../../../convert/codec/convert';
import { isUnknownArray } from '../../../../convert/codec/unknown';
import {
  TaggedBase64,
  taggedBase64Codec,
} from '../../../../models/espresso/tagged_base64/TaggedBase64';

export abstract class GibraltarAPIMerkleTreeProof {}

export class GibraltarAPIMerkleTreeEmptyProof extends GibraltarAPIMerkleTreeProof {
  toJSON() {
    return gibraltarAPIMerkleTreeEmptyProofCodec.encode(this);
  }
}

export class GibraltarAPIMerkleTreeEmptyProofDecoder
  implements Converter<unknown, GibraltarAPIMerkleTreeEmptyProof>
{
  convert(input: unknown): GibraltarAPIMerkleTreeEmptyProof {
    if (!isString(input) || input !== 'Empty') {
      throw new InvalidInputError();
    }

    return new GibraltarAPIMerkleTreeEmptyProof();
  }
}

export class GibraltarAPIMerkleTreeEmptyProofEncoder
  implements Converter<GibraltarAPIMerkleTreeEmptyProof, unknown>
{
  convert(): unknown {
    return 'Empty';
  }
}

export class GibraltarAPIMerkleTreeEmptyProofCodec extends Codec<
  GibraltarAPIMerkleTreeEmptyProof,
  unknown
> {
  readonly encoder = new GibraltarAPIMerkleTreeEmptyProofEncoder();
  readonly decoder = new GibraltarAPIMerkleTreeEmptyProofDecoder();
}

export const gibraltarAPIMerkleTreeEmptyProofCodec =
  new GibraltarAPIMerkleTreeEmptyProofCodec();

export class GibraltarAPIMerkleTreeLeafProof extends GibraltarAPIMerkleTreeProof {
  readonly value: TaggedBase64;
  readonly pos: TaggedBase64;
  readonly elem: TaggedBase64;

  constructor(value: TaggedBase64, pos: TaggedBase64, elem: TaggedBase64) {
    super();
    this.value = value;
    this.pos = pos;
    this.elem = elem;
  }

  toJSON() {
    return gibraltarAPIMerkleTreeLeafProofCodec.encode(this);
  }
}

export class GibraltarAPIMerkleTreeLeafProofDecoder
  implements Converter<unknown, GibraltarAPIMerkleTreeLeafProof>
{
  convert(input: unknown): GibraltarAPIMerkleTreeLeafProof {
    if (!isRecord(input, 'Leaf', isUnknown)) {
      throw new InvalidInputError();
    }

    const leaf = input.Leaf;

    if (
      !isRecord(leaf, 'value', isUnknown) ||
      !isRecord(leaf, 'pos', isUnknown) ||
      !isRecord(leaf, 'elem', isUnknown)
    ) {
      throw new InvalidInputError();
    }
    return new GibraltarAPIMerkleTreeLeafProof(
      taggedBase64Codec.decode(leaf.value),
      taggedBase64Codec.decode(leaf.pos),
      taggedBase64Codec.decode(leaf.elem),
    );
  }
}

export class GibraltarAPIMerkleTreeLeafProofEncoder
  implements Converter<GibraltarAPIMerkleTreeLeafProof, unknown>
{
  convert(input: GibraltarAPIMerkleTreeLeafProof): unknown {
    return {
      Leaf: {
        value: taggedBase64Codec.encode(input.value),
        pos: taggedBase64Codec.encode(input.pos),
        elem: taggedBase64Codec.encode(input.elem),
      },
    };
  }
}

export class GibraltarAPIMerkleTreeLeafProofCodec extends Codec<
  GibraltarAPIMerkleTreeLeafProof,
  unknown
> {
  readonly encoder = new GibraltarAPIMerkleTreeLeafProofEncoder();
  readonly decoder = new GibraltarAPIMerkleTreeLeafProofDecoder();
}

export const gibraltarAPIMerkleTreeLeafProofCodec =
  new GibraltarAPIMerkleTreeLeafProofCodec();

export class GibraltarAPIMerkletTreeForgottenSubTreeProof extends GibraltarAPIMerkleTreeProof {
  readonly value: TaggedBase64;

  constructor(value: TaggedBase64) {
    super();
    this.value = value;
  }

  toJSON() {
    return gibraltarAPIMerkletTreeForgottenSubTreeProofCodec.encode(this);
  }
}

export class GibraltarAPIMerkletTreeForgottenSubTreeProofDecoder
  implements Converter<unknown, GibraltarAPIMerkletTreeForgottenSubTreeProof>
{
  convert(input: unknown): GibraltarAPIMerkletTreeForgottenSubTreeProof {
    if (!isRecord(input, 'ForgettenSubtree', isUnknown)) {
      throw new InvalidInputError();
    }

    const forgottenSubtree = input.ForgettenSubtree;
    if (!isRecord(forgottenSubtree, 'value', isUnknown)) {
      throw new InvalidInputError();
    }

    return new GibraltarAPIMerkletTreeForgottenSubTreeProof(
      taggedBase64Codec.decode(forgottenSubtree.value),
    );
  }
}

export class GibraltarAPIMerkletTreeForgottenSubTreeProofEncoder
  implements Converter<GibraltarAPIMerkletTreeForgottenSubTreeProof, unknown>
{
  convert(input: GibraltarAPIMerkletTreeForgottenSubTreeProof): unknown {
    return {
      ForgettenSubtree: {
        value: taggedBase64Codec.encode(input.value),
      },
    };
  }
}

export class GibraltarAPIMerkletTreeForgottenSubTreeProofCodec extends Codec<
  GibraltarAPIMerkletTreeForgottenSubTreeProof,
  unknown
> {
  readonly encoder = new GibraltarAPIMerkletTreeForgottenSubTreeProofEncoder();
  readonly decoder = new GibraltarAPIMerkletTreeForgottenSubTreeProofDecoder();
}

export const gibraltarAPIMerkletTreeForgottenSubTreeProofCodec =
  new GibraltarAPIMerkletTreeForgottenSubTreeProofCodec();

export class GibraltarAPIMerkleTreeBranchProof extends GibraltarAPIMerkleTreeProof {
  readonly value: TaggedBase64;
  readonly children: GibraltarAPIMerkleTreeProof[];

  constructor(value: TaggedBase64, children: GibraltarAPIMerkleTreeProof[]) {
    super();
    this.value = value;
    this.children = children;
  }

  toJSON() {
    return gibraltarAPIMerkleTreeBranchProofCodec.encode(this);
  }
}

export class GibraltarAPIMerkleTreeBranchProofDecoder
  implements Converter<unknown, GibraltarAPIMerkleTreeBranchProof>
{
  convert(input: unknown): GibraltarAPIMerkleTreeBranchProof {
    if (!isRecord(input, 'Branch', isUnknown)) {
      throw new InvalidInputError();
    }

    const branch = input.Branch;
    if (
      !isRecord(branch, 'value', isUnknown) ||
      !isRecord(branch, 'children', isUnknownArray)
    ) {
      throw new InvalidInputError();
    }

    return new GibraltarAPIMerkleTreeBranchProof(
      taggedBase64Codec.decode(branch.value),
      branch.children.map((x: unknown) =>
        gibraltarAPIMerkleTreeProofCodec.decode(x),
      ),
    );
  }
}

export class GibraltarAPIMerkleTreeBranchProofEncoder
  implements Converter<GibraltarAPIMerkleTreeBranchProof, unknown>
{
  convert(input: GibraltarAPIMerkleTreeBranchProof): unknown {
    return {
      Branch: {
        value: taggedBase64Codec.encode(input.value),
        children: input.children.map((x) =>
          gibraltarAPIMerkleTreeProofCodec.encode(x),
        ),
      },
    };
  }
}

export class GibraltarAPIMerkleTreeBranchProofCodec extends Codec<
  GibraltarAPIMerkleTreeBranchProof,
  unknown
> {
  readonly encoder = new GibraltarAPIMerkleTreeBranchProofEncoder();
  readonly decoder = new GibraltarAPIMerkleTreeBranchProofDecoder();
}

export const gibraltarAPIMerkleTreeBranchProofCodec =
  new GibraltarAPIMerkleTreeBranchProofCodec();

export class GibraltarAPIMerkleTreeProofDecoder
  implements Converter<unknown, GibraltarAPIMerkleTreeProof>
{
  convert(input: unknown): GibraltarAPIMerkleTreeProof {
    if (isRecord(input, 'Leaf', isUnknown)) {
      return gibraltarAPIMerkleTreeLeafProofCodec.decoder.convert(input);
    }

    if (isRecord(input, 'Branch', isUnknown)) {
      return gibraltarAPIMerkleTreeBranchProofCodec.decoder.convert(input);
    }

    if (isRecord(input, 'ForgettenSubtree', isUnknown)) {
      return gibraltarAPIMerkletTreeForgottenSubTreeProofCodec.decoder.convert(
        input,
      );
    }

    if (isString(input)) {
      return gibraltarAPIMerkleTreeEmptyProofCodec.decoder.convert(input);
    }

    throw new InvalidInputError();
  }
}

export class GibraltarAPIMerkleTreeProofEncoder
  implements Converter<GibraltarAPIMerkleTreeProof, unknown>
{
  convert(input: GibraltarAPIMerkleTreeProof): unknown {
    if (input instanceof GibraltarAPIMerkleTreeLeafProof) {
      return gibraltarAPIMerkleTreeLeafProofCodec.encode(input);
    }

    if (input instanceof GibraltarAPIMerkleTreeBranchProof) {
      return gibraltarAPIMerkleTreeBranchProofCodec.encode(input);
    }

    if (input instanceof GibraltarAPIMerkletTreeForgottenSubTreeProof) {
      return gibraltarAPIMerkletTreeForgottenSubTreeProofCodec.encode(input);
    }

    if (input instanceof GibraltarAPIMerkleTreeEmptyProof) {
      return gibraltarAPIMerkleTreeEmptyProofCodec.encode(input);
    }

    throw new InvalidInputError();
  }
}

export class GibraltarAPIMerkleTreeProofCodec extends Codec<
  GibraltarAPIMerkleTreeProof,
  unknown
> {
  readonly encoder = new GibraltarAPIMerkleTreeProofEncoder();
  readonly decoder = new GibraltarAPIMerkleTreeProofDecoder();
}

export const gibraltarAPIMerkleTreeProofCodec =
  new GibraltarAPIMerkleTreeProofCodec();

export const listGibraltarAPIMerkleTreeProofCodec = new ArrayCodec(
  new ArrayDecoder(gibraltarAPIMerkleTreeProofCodec),
  new ArrayEncoder(gibraltarAPIMerkleTreeProofCodec),
);
