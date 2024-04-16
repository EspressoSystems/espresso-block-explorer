import {
  ArrayCodec,
  ArrayDecoder,
  ArrayEncoder,
} from '../../../../convert/codec/array';
import {
  Codec,
  Converter,
  TypeCheckingCodec,
  isRecord,
  isString,
  isUnknown,
} from '../../../../convert/codec/convert';
import InvalidInputError from '../../../../errors/InvalidInputError';
import {
  TaggedBase64,
  taggedBase64Codec,
} from '../../../../models/espresso/tagged_base64/TaggedBase64';

/**
 * CappuccinoAPIMerkleTreeProof represents a proof in the Merkle Tree.
 */
export abstract class CappuccinoAPIMerkleTreeProof {}

/**
 * CappuccinoAPIMerkleTreeEmptyProof represents an empty proof in the Merkle
 * Tree.
 */
export class CappuccinoAPIMerkleTreeEmptyProof extends CappuccinoAPIMerkleTreeProof {
  toJSON() {
    return cappuccinoAPIMerkleTreeEmptyProofCodec.encode(this);
  }
}

export class CappuccinoAPIMerkleTreeEmptyProofDecoder
  implements Converter<unknown, CappuccinoAPIMerkleTreeEmptyProof>
{
  convert(input: unknown): CappuccinoAPIMerkleTreeEmptyProof {
    if (!isString(input) || input !== 'Empty') {
      throw new InvalidInputError();
    }

    return new CappuccinoAPIMerkleTreeEmptyProof();
  }
}

export class CappuccinoAPIMerkleTreeEmptyProofEncoder
  implements Converter<CappuccinoAPIMerkleTreeEmptyProof>
{
  convert() {
    return 'Empty' as const;
  }
}

export class CappuccinoAPIMerkleTreeEmptyProofCodec extends TypeCheckingCodec<
  CappuccinoAPIMerkleTreeEmptyProof,
  ReturnType<
    InstanceType<new () => CappuccinoAPIMerkleTreeEmptyProofEncoder>['convert']
  >
> {
  readonly encoder = new CappuccinoAPIMerkleTreeEmptyProofEncoder();
  readonly decoder = new CappuccinoAPIMerkleTreeEmptyProofDecoder();
}

export const cappuccinoAPIMerkleTreeEmptyProofCodec =
  new CappuccinoAPIMerkleTreeEmptyProofCodec();

/**
 * CappuccinoAPIMerkleTreeLeafProof represents a leaf proof in the Merkle Tree.
 */
export class CappuccinoAPIMerkleTreeLeafProof extends CappuccinoAPIMerkleTreeProof {
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
    return cappuccinoAPIMerkleTreeLeafProofCodec.encode(this);
  }
}

export class CappuccinoAPIMerkleTreeLeafProofDecoder
  implements Converter<unknown, CappuccinoAPIMerkleTreeLeafProof>
{
  convert(input: unknown): CappuccinoAPIMerkleTreeLeafProof {
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
    return new CappuccinoAPIMerkleTreeLeafProof(
      taggedBase64Codec.decode(leaf.value),
      taggedBase64Codec.decode(leaf.pos),
      taggedBase64Codec.decode(leaf.elem),
    );
  }
}

export class CappuccinoAPIMerkleTreeLeafProofEncoder
  implements Converter<CappuccinoAPIMerkleTreeLeafProof>
{
  convert(input: CappuccinoAPIMerkleTreeLeafProof) {
    return {
      Leaf: {
        value: taggedBase64Codec.encode(input.value),
        pos: taggedBase64Codec.encode(input.pos),
        elem: taggedBase64Codec.encode(input.elem),
      },
    } as const;
  }
}

export class CappuccinoAPIMerkleTreeLeafProofCodec extends Codec<
  CappuccinoAPIMerkleTreeLeafProof,
  ReturnType<
    InstanceType<new () => CappuccinoAPIMerkleTreeLeafProofEncoder>['convert']
  >
> {
  readonly encoder = new CappuccinoAPIMerkleTreeLeafProofEncoder();
  readonly decoder = new CappuccinoAPIMerkleTreeLeafProofDecoder();
}

export const cappuccinoAPIMerkleTreeLeafProofCodec =
  new CappuccinoAPIMerkleTreeLeafProofCodec();

/**
 * CappuccinoAPIMerkletTreeForgottenSubTreeProof represents a forgotten subtree
 * proof in the Merkle Tree.
 */
export class CappuccinoAPIMerkleTreeForgottenSubTreeProof extends CappuccinoAPIMerkleTreeProof {
  readonly value: TaggedBase64;

  constructor(value: TaggedBase64) {
    super();
    this.value = value;
  }

  toJSON() {
    return cappuccinoAPIMerkletTreeForgottenSubTreeProofCodec.encode(this);
  }
}

export class CappuccinoAPIMerkletTreeForgottenSubTreeProofDecoder
  implements Converter<unknown, CappuccinoAPIMerkleTreeForgottenSubTreeProof>
{
  convert(input: unknown): CappuccinoAPIMerkleTreeForgottenSubTreeProof {
    if (!isRecord(input, 'ForgettenSubtree', isUnknown)) {
      throw new InvalidInputError();
    }

    const forgottenSubtree = input.ForgettenSubtree;
    if (!isRecord(forgottenSubtree, 'value', isUnknown)) {
      throw new InvalidInputError();
    }

    return new CappuccinoAPIMerkleTreeForgottenSubTreeProof(
      taggedBase64Codec.decode(forgottenSubtree.value),
    );
  }
}

export class CappuccinoAPIMerkletTreeForgottenSubTreeProofEncoder
  implements Converter<CappuccinoAPIMerkleTreeForgottenSubTreeProof>
{
  convert(input: CappuccinoAPIMerkleTreeForgottenSubTreeProof) {
    return {
      ForgettenSubtree: {
        value: taggedBase64Codec.encode(input.value),
      },
    } as const;
  }
}

export class CappuccinoAPIMerkletTreeForgottenSubTreeProofCodec extends Codec<
  CappuccinoAPIMerkleTreeForgottenSubTreeProof,
  ReturnType<
    InstanceType<
      new () => CappuccinoAPIMerkletTreeForgottenSubTreeProofEncoder
    >['convert']
  >
> {
  readonly encoder = new CappuccinoAPIMerkletTreeForgottenSubTreeProofEncoder();
  readonly decoder = new CappuccinoAPIMerkletTreeForgottenSubTreeProofDecoder();
}

export const cappuccinoAPIMerkletTreeForgottenSubTreeProofCodec =
  new CappuccinoAPIMerkletTreeForgottenSubTreeProofCodec();

/**
 * CappuccinoAPIMerkleTreeBranchProof represents a branch proof in the Merkle
 * Tree.
 */
export class CappuccinoAPIMerkleTreeBranchProof extends CappuccinoAPIMerkleTreeProof {
  readonly value: TaggedBase64;
  readonly children: CappuccinoAPIMerkleTreeProof[];

  constructor(value: TaggedBase64, children: CappuccinoAPIMerkleTreeProof[]) {
    super();
    this.value = value;
    this.children = children;
  }

  toJSON() {
    return cappuccinoAPIMerkleTreeBranchProofCodec.encode(this);
  }
}

export class CappuccinoAPIMerkleTreeBranchProofDecoder
  implements Converter<unknown, CappuccinoAPIMerkleTreeBranchProof>
{
  convert(input: unknown): CappuccinoAPIMerkleTreeBranchProof {
    if (!isRecord(input, 'Branch', isUnknown)) {
      throw new InvalidInputError();
    }

    const branch = input.Branch;
    if (
      !isRecord(branch, 'value', isUnknown) ||
      !isRecord(branch, 'children', isUnknown)
    ) {
      throw new InvalidInputError();
    }

    return new CappuccinoAPIMerkleTreeBranchProof(
      taggedBase64Codec.decode(branch.value),
      listCappuccinoAPIMerkleTreeProofCodec.decode(branch.children),
    );
  }
}

export class CappuccinoAPIMerkleTreeBranchProofEncoder
  implements
    Converter<
      CappuccinoAPIMerkleTreeBranchProof,
      {
        readonly Branch: {
          readonly value: string;
          readonly children: unknown[];
        };
      }
    >
{
  convert(input: CappuccinoAPIMerkleTreeBranchProof): {
    readonly Branch: { readonly value: string; readonly children: unknown[] };
  } {
    return {
      Branch: {
        value: taggedBase64Codec.encode(input.value),
        children: listCappuccinoAPIMerkleTreeProofCodec.encode(input.children),
      },
    };
  }
}

export class CappuccinoAPIMerkleTreeBranchProofCodec extends TypeCheckingCodec<
  CappuccinoAPIMerkleTreeBranchProof,
  ReturnType<
    InstanceType<new () => CappuccinoAPIMerkleTreeBranchProofEncoder>['convert']
  >
> {
  readonly encoder = new CappuccinoAPIMerkleTreeBranchProofEncoder();
  readonly decoder = new CappuccinoAPIMerkleTreeBranchProofDecoder();
}

export const cappuccinoAPIMerkleTreeBranchProofCodec =
  new CappuccinoAPIMerkleTreeBranchProofCodec();

export class CappuccinoAPIMerkleTreeProofDecoder
  implements Converter<unknown, CappuccinoAPIMerkleTreeProof>
{
  convert(input: unknown): CappuccinoAPIMerkleTreeProof {
    if (isRecord(input, 'Leaf', isUnknown)) {
      return cappuccinoAPIMerkleTreeLeafProofCodec.decoder.convert(input);
    }

    if (isRecord(input, 'Branch', isUnknown)) {
      return cappuccinoAPIMerkleTreeBranchProofCodec.decoder.convert(input);
    }

    if (isRecord(input, 'ForgettenSubtree', isUnknown)) {
      return cappuccinoAPIMerkletTreeForgottenSubTreeProofCodec.decoder.convert(
        input,
      );
    }

    if (isString(input)) {
      return cappuccinoAPIMerkleTreeEmptyProofCodec.decoder.convert(input);
    }

    throw new InvalidInputError();
  }
}

export class CappuccinoAPIMerkleTreeProofEncoder
  implements Converter<CappuccinoAPIMerkleTreeProof>
{
  convert(input: CappuccinoAPIMerkleTreeProof) {
    if (input instanceof CappuccinoAPIMerkleTreeLeafProof) {
      return cappuccinoAPIMerkleTreeLeafProofCodec.encode(input);
    }

    if (input instanceof CappuccinoAPIMerkleTreeBranchProof) {
      return cappuccinoAPIMerkleTreeBranchProofCodec.encode(input);
    }

    if (input instanceof CappuccinoAPIMerkleTreeForgottenSubTreeProof) {
      return cappuccinoAPIMerkletTreeForgottenSubTreeProofCodec.encode(input);
    }

    if (input instanceof CappuccinoAPIMerkleTreeEmptyProof) {
      return cappuccinoAPIMerkleTreeEmptyProofCodec.encode(input);
    }

    throw new InvalidInputError();
  }
}

export class CappuccinoAPIMerkleTreeProofCodec extends TypeCheckingCodec<
  CappuccinoAPIMerkleTreeProof,
  ReturnType<
    InstanceType<new () => CappuccinoAPIMerkleTreeProofEncoder>['convert']
  >
> {
  readonly encoder = new CappuccinoAPIMerkleTreeProofEncoder();
  readonly decoder = new CappuccinoAPIMerkleTreeProofDecoder();
}

export const cappuccinoAPIMerkleTreeProofCodec =
  new CappuccinoAPIMerkleTreeProofCodec();

export const listCappuccinoAPIMerkleTreeProofCodec = new ArrayCodec(
  new ArrayDecoder(cappuccinoAPIMerkleTreeProofCodec),
  new ArrayEncoder(cappuccinoAPIMerkleTreeProofCodec),
);
