import { assertInstanceOf } from '@/assert/assert';
import { ArrayCodec, ArrayDecoder, ArrayEncoder } from '@/convert/codec/array';
import {
  Codec,
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
  isRecord,
  isString,
  isUnknown,
} from '@/convert/codec/convert';
import InvalidInputError from '@/errors/InvalidInputError';
import {
  TaggedBase64,
  taggedBase64Codec,
} from '@/models/espresso/tagged_base64/TaggedBase64';

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
  convert(input: CappuccinoAPIMerkleTreeEmptyProof) {
    assertInstanceOf(input, CappuccinoAPIMerkleTreeEmptyProof);

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
    assertRecordWithKeys(input, 'Leaf');

    const leaf = input.Leaf;

    assertRecordWithKeys(leaf, 'value', 'pos', 'elem');

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
    assertInstanceOf(input, CappuccinoAPIMerkleTreeLeafProof);

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
 * CappuccinoAPIMerkleTreeForgottenSubTreeProof represents a forgotten subtree
 * proof in the Merkle Tree.
 */
export class CappuccinoAPIMerkleTreeForgottenSubTreeProof extends CappuccinoAPIMerkleTreeProof {
  readonly value: TaggedBase64;

  constructor(value: TaggedBase64) {
    super();
    this.value = value;
  }

  toJSON() {
    return cappuccinoAPIMerkleTreeForgottenSubTreeProofCodec.encode(this);
  }
}

export class CappuccinoAPIMerkleTreeForgottenSubTreeProofDecoder
  implements Converter<unknown, CappuccinoAPIMerkleTreeForgottenSubTreeProof>
{
  convert(input: unknown): CappuccinoAPIMerkleTreeForgottenSubTreeProof {
    assertRecordWithKeys(input, 'ForgettenSubtree');

    const forgottenSubtree = input.ForgettenSubtree;
    assertRecordWithKeys(forgottenSubtree, 'value');

    return new CappuccinoAPIMerkleTreeForgottenSubTreeProof(
      taggedBase64Codec.decode(forgottenSubtree.value),
    );
  }
}

export class CappuccinoAPIMerkleTreeForgottenSubTreeProofEncoder
  implements Converter<CappuccinoAPIMerkleTreeForgottenSubTreeProof>
{
  convert(input: CappuccinoAPIMerkleTreeForgottenSubTreeProof) {
    assertInstanceOf(input, CappuccinoAPIMerkleTreeForgottenSubTreeProof);

    return {
      ForgettenSubtree: {
        value: taggedBase64Codec.encode(input.value),
      },
    } as const;
  }
}

export class CappuccinoAPIMerkleTreeForgottenSubTreeProofCodec extends Codec<
  CappuccinoAPIMerkleTreeForgottenSubTreeProof,
  ReturnType<
    InstanceType<
      new () => CappuccinoAPIMerkleTreeForgottenSubTreeProofEncoder
    >['convert']
  >
> {
  readonly encoder = new CappuccinoAPIMerkleTreeForgottenSubTreeProofEncoder();
  readonly decoder = new CappuccinoAPIMerkleTreeForgottenSubTreeProofDecoder();
}

export const cappuccinoAPIMerkleTreeForgottenSubTreeProofCodec =
  new CappuccinoAPIMerkleTreeForgottenSubTreeProofCodec();

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
    assertRecordWithKeys(input, 'Branch');

    const branch = input.Branch;
    assertRecordWithKeys(branch, 'value', 'children');

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
    assertInstanceOf(input, CappuccinoAPIMerkleTreeBranchProof);

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
      return cappuccinoAPIMerkleTreeForgottenSubTreeProofCodec.decoder.convert(
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
    assertInstanceOf(input, CappuccinoAPIMerkleTreeProof);

    if (input instanceof CappuccinoAPIMerkleTreeLeafProof) {
      return cappuccinoAPIMerkleTreeLeafProofCodec.encode(input);
    }

    if (input instanceof CappuccinoAPIMerkleTreeBranchProof) {
      return cappuccinoAPIMerkleTreeBranchProofCodec.encode(input);
    }

    if (input instanceof CappuccinoAPIMerkleTreeForgottenSubTreeProof) {
      return cappuccinoAPIMerkleTreeForgottenSubTreeProofCodec.encode(input);
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
