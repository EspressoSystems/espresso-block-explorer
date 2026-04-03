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
import InvalidInputError from '@/errors/invalid_input_error';
import {
  TaggedBase64,
  taggedBase64Codec,
} from '@/models/espresso/tagged_base64/tagged_base64';

/**
 * AvailabilityAPIMerkleTreeProof represents a proof in the Merkle Tree.
 */
export abstract class AvailabilityAPIMerkleTreeProof {}

/**
 * AvailabilityAPIMerkleTreeEmptyProof represents an empty proof in the Merkle
 * Tree.
 */
export class AvailabilityAPIMerkleTreeEmptyProof extends AvailabilityAPIMerkleTreeProof {
  toJSON() {
    return availabilityAPIMerkleTreeEmptyProofCodec.encode(this);
  }
}

export class AvailabilityAPIMerkleTreeEmptyProofDecoder implements Converter<
  unknown,
  AvailabilityAPIMerkleTreeEmptyProof
> {
  convert(input: unknown): AvailabilityAPIMerkleTreeEmptyProof {
    if (!isString(input) || input !== 'Empty') {
      throw new InvalidInputError();
    }

    return new AvailabilityAPIMerkleTreeEmptyProof();
  }
}

export class AvailabilityAPIMerkleTreeEmptyProofEncoder implements Converter<AvailabilityAPIMerkleTreeEmptyProof> {
  convert(input: AvailabilityAPIMerkleTreeEmptyProof) {
    assertInstanceOf(input, AvailabilityAPIMerkleTreeEmptyProof);

    return 'Empty' as const;
  }
}

export class AvailabilityAPIMerkleTreeEmptyProofCodec extends TypeCheckingCodec<
  AvailabilityAPIMerkleTreeEmptyProof,
  ReturnType<
    InstanceType<
      new () => AvailabilityAPIMerkleTreeEmptyProofEncoder
    >['convert']
  >
> {
  readonly encoder = new AvailabilityAPIMerkleTreeEmptyProofEncoder();
  readonly decoder = new AvailabilityAPIMerkleTreeEmptyProofDecoder();
}

export const availabilityAPIMerkleTreeEmptyProofCodec =
  new AvailabilityAPIMerkleTreeEmptyProofCodec();

/**
 * AvailabilityAPIMerkleTreeLeafProof represents a leaf proof in the Merkle Tree.
 */
export class AvailabilityAPIMerkleTreeLeafProof extends AvailabilityAPIMerkleTreeProof {
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
    return availabilityAPIMerkleTreeLeafProofCodec.encode(this);
  }
}

export class AvailabilityAPIMerkleTreeLeafProofDecoder implements Converter<
  unknown,
  AvailabilityAPIMerkleTreeLeafProof
> {
  convert(input: unknown): AvailabilityAPIMerkleTreeLeafProof {
    assertRecordWithKeys(input, 'Leaf');

    const leaf = input.Leaf;

    assertRecordWithKeys(leaf, 'value', 'pos', 'elem');

    return new AvailabilityAPIMerkleTreeLeafProof(
      taggedBase64Codec.decode(leaf.value),
      taggedBase64Codec.decode(leaf.pos),
      taggedBase64Codec.decode(leaf.elem),
    );
  }
}

export class AvailabilityAPIMerkleTreeLeafProofEncoder implements Converter<AvailabilityAPIMerkleTreeLeafProof> {
  convert(input: AvailabilityAPIMerkleTreeLeafProof) {
    assertInstanceOf(input, AvailabilityAPIMerkleTreeLeafProof);

    return {
      Leaf: {
        value: taggedBase64Codec.encode(input.value),
        pos: taggedBase64Codec.encode(input.pos),
        elem: taggedBase64Codec.encode(input.elem),
      },
    } as const;
  }
}

export class AvailabilityAPIMerkleTreeLeafProofCodec extends Codec<
  AvailabilityAPIMerkleTreeLeafProof,
  ReturnType<
    InstanceType<new () => AvailabilityAPIMerkleTreeLeafProofEncoder>['convert']
  >
> {
  readonly encoder = new AvailabilityAPIMerkleTreeLeafProofEncoder();
  readonly decoder = new AvailabilityAPIMerkleTreeLeafProofDecoder();
}

export const availabilityAPIMerkleTreeLeafProofCodec =
  new AvailabilityAPIMerkleTreeLeafProofCodec();

/**
 * AvailabilityAPIMerkleTreeForgottenSubTreeProof represents a forgotten subtree
 * proof in the Merkle Tree.
 */
export class AvailabilityAPIMerkleTreeForgottenSubTreeProof extends AvailabilityAPIMerkleTreeProof {
  readonly value: TaggedBase64;

  constructor(value: TaggedBase64) {
    super();
    this.value = value;
  }

  toJSON() {
    return availabilityAPIMerkleTreeForgottenSubTreeProofCodec.encode(this);
  }
}

export class AvailabilityAPIMerkleTreeForgottenSubTreeProofDecoder implements Converter<
  unknown,
  AvailabilityAPIMerkleTreeForgottenSubTreeProof
> {
  convert(input: unknown): AvailabilityAPIMerkleTreeForgottenSubTreeProof {
    assertRecordWithKeys(input, 'ForgettenSubtree');

    const forgottenSubtree = input.ForgettenSubtree;
    assertRecordWithKeys(forgottenSubtree, 'value');

    return new AvailabilityAPIMerkleTreeForgottenSubTreeProof(
      taggedBase64Codec.decode(forgottenSubtree.value),
    );
  }
}

export class AvailabilityAPIMerkleTreeForgottenSubTreeProofEncoder implements Converter<AvailabilityAPIMerkleTreeForgottenSubTreeProof> {
  convert(input: AvailabilityAPIMerkleTreeForgottenSubTreeProof) {
    assertInstanceOf(input, AvailabilityAPIMerkleTreeForgottenSubTreeProof);

    return {
      ForgettenSubtree: {
        value: taggedBase64Codec.encode(input.value),
      },
    } as const;
  }
}

export class AvailabilityAPIMerkleTreeForgottenSubTreeProofCodec extends Codec<
  AvailabilityAPIMerkleTreeForgottenSubTreeProof,
  ReturnType<
    InstanceType<
      new () => AvailabilityAPIMerkleTreeForgottenSubTreeProofEncoder
    >['convert']
  >
> {
  readonly encoder =
    new AvailabilityAPIMerkleTreeForgottenSubTreeProofEncoder();
  readonly decoder =
    new AvailabilityAPIMerkleTreeForgottenSubTreeProofDecoder();
}

export const availabilityAPIMerkleTreeForgottenSubTreeProofCodec =
  new AvailabilityAPIMerkleTreeForgottenSubTreeProofCodec();

/**
 * AvailabilityAPIMerkleTreeBranchProof represents a branch proof in the Merkle
 * Tree.
 */
export class AvailabilityAPIMerkleTreeBranchProof extends AvailabilityAPIMerkleTreeProof {
  readonly value: TaggedBase64;
  readonly children: AvailabilityAPIMerkleTreeProof[];

  constructor(value: TaggedBase64, children: AvailabilityAPIMerkleTreeProof[]) {
    super();
    this.value = value;
    this.children = children;
  }

  toJSON() {
    return availabilityAPIMerkleTreeBranchProofCodec.encode(this);
  }
}

export class AvailabilityAPIMerkleTreeBranchProofDecoder implements Converter<
  unknown,
  AvailabilityAPIMerkleTreeBranchProof
> {
  convert(input: unknown): AvailabilityAPIMerkleTreeBranchProof {
    assertRecordWithKeys(input, 'Branch');

    const branch = input.Branch;
    assertRecordWithKeys(branch, 'value', 'children');

    return new AvailabilityAPIMerkleTreeBranchProof(
      taggedBase64Codec.decode(branch.value),
      listAvailabilityAPIMerkleTreeProofCodec.decode(branch.children),
    );
  }
}

export class AvailabilityAPIMerkleTreeBranchProofEncoder implements Converter<
  AvailabilityAPIMerkleTreeBranchProof,
  {
    readonly Branch: {
      readonly value: string;
      readonly children: unknown[];
    };
  }
> {
  convert(input: AvailabilityAPIMerkleTreeBranchProof): {
    readonly Branch: { readonly value: string; readonly children: unknown[] };
  } {
    assertInstanceOf(input, AvailabilityAPIMerkleTreeBranchProof);

    return {
      Branch: {
        value: taggedBase64Codec.encode(input.value),
        children: listAvailabilityAPIMerkleTreeProofCodec.encode(
          input.children,
        ),
      },
    };
  }
}

export class AvailabilityAPIMerkleTreeBranchProofCodec extends TypeCheckingCodec<
  AvailabilityAPIMerkleTreeBranchProof,
  ReturnType<
    InstanceType<
      new () => AvailabilityAPIMerkleTreeBranchProofEncoder
    >['convert']
  >
> {
  readonly encoder = new AvailabilityAPIMerkleTreeBranchProofEncoder();
  readonly decoder = new AvailabilityAPIMerkleTreeBranchProofDecoder();
}

export const availabilityAPIMerkleTreeBranchProofCodec =
  new AvailabilityAPIMerkleTreeBranchProofCodec();

export class AvailabilityAPIMerkleTreeProofDecoder implements Converter<
  unknown,
  AvailabilityAPIMerkleTreeProof
> {
  convert(input: unknown): AvailabilityAPIMerkleTreeProof {
    if (isRecord(input, 'Leaf', isUnknown)) {
      return availabilityAPIMerkleTreeLeafProofCodec.decoder.convert(input);
    }

    if (isRecord(input, 'Branch', isUnknown)) {
      return availabilityAPIMerkleTreeBranchProofCodec.decoder.convert(input);
    }

    if (isRecord(input, 'ForgettenSubtree', isUnknown)) {
      return availabilityAPIMerkleTreeForgottenSubTreeProofCodec.decoder.convert(
        input,
      );
    }

    if (isString(input)) {
      return availabilityAPIMerkleTreeEmptyProofCodec.decoder.convert(input);
    }

    throw new InvalidInputError();
  }
}

export class AvailabilityAPIMerkleTreeProofEncoder implements Converter<AvailabilityAPIMerkleTreeProof> {
  convert(input: AvailabilityAPIMerkleTreeProof) {
    assertInstanceOf(input, AvailabilityAPIMerkleTreeProof);

    if (input instanceof AvailabilityAPIMerkleTreeLeafProof) {
      return availabilityAPIMerkleTreeLeafProofCodec.encode(input);
    }

    if (input instanceof AvailabilityAPIMerkleTreeBranchProof) {
      return availabilityAPIMerkleTreeBranchProofCodec.encode(input);
    }

    if (input instanceof AvailabilityAPIMerkleTreeForgottenSubTreeProof) {
      return availabilityAPIMerkleTreeForgottenSubTreeProofCodec.encode(input);
    }

    if (input instanceof AvailabilityAPIMerkleTreeEmptyProof) {
      return availabilityAPIMerkleTreeEmptyProofCodec.encode(input);
    }

    throw new InvalidInputError();
  }
}

export class AvailabilityAPIMerkleTreeProofCodec extends TypeCheckingCodec<
  AvailabilityAPIMerkleTreeProof,
  ReturnType<
    InstanceType<new () => AvailabilityAPIMerkleTreeProofEncoder>['convert']
  >
> {
  readonly encoder = new AvailabilityAPIMerkleTreeProofEncoder();
  readonly decoder = new AvailabilityAPIMerkleTreeProofDecoder();
}

export const availabilityAPIMerkleTreeProofCodec =
  new AvailabilityAPIMerkleTreeProofCodec();

export const listAvailabilityAPIMerkleTreeProofCodec = new ArrayCodec(
  new ArrayDecoder(availabilityAPIMerkleTreeProofCodec),
  new ArrayEncoder(availabilityAPIMerkleTreeProofCodec),
);
