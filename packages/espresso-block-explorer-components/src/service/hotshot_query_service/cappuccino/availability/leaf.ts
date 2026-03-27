import { Converter, TypeCheckingCodec } from '@/convert/codec/convert';
import ExpectedObjectWithKeyError from '@/convert/codec/expected_object_with_key_error';
import { TaggedBase64 } from '@/models/espresso/tagged_base64/tagged_base64';
import { CappuccinoAPIHeader } from './block_header';
import { LeafV0, leafV0Codec } from './leaf_v0';
import { LeafV1, leafV1Codec } from './leaf_v1';
import { LeafV2, leafV2Codec } from './leaf_v2';
import { CappuccinoAPIPayload } from './payload';
import { SimpleCertificate } from './simple_certificate';
import UnimplementedError from '@/errors/unimplemented_error';

/**
 * CappuccinoAPILeaf represents a leaf in the Cappuccino API.
 */
export interface CappuccinoAPILeaf {
  readonly view_number: number;
  readonly justify_qc: SimpleCertificate<unknown>;
  readonly parent_commitment: TaggedBase64;
  readonly block_header: CappuccinoAPIHeader;
  readonly block_payload: null | CappuccinoAPIPayload;
}

export class CappuccinoAPILeafDecoder implements Converter<
  unknown,
  CappuccinoAPILeaf
> {
  convert(input: unknown): CappuccinoAPILeaf {
    try {
      return leafV2Codec.decode(input);
    } catch (err) {
      if (!(err instanceof ExpectedObjectWithKeyError)) {
        throw err;
      }

      // Try a different version
    }

    try {
      return leafV1Codec.decode(input);
    } catch (err) {
      if (!(err instanceof ExpectedObjectWithKeyError)) {
        throw err;
      }

      // Try a different version
    }

    return leafV0Codec.decode(input);
  }
}

export class CappuccinoAPILeafEncoder implements Converter<CappuccinoAPILeaf> {
  convert(input: CappuccinoAPILeaf) {
    if (input instanceof LeafV2) {
      return leafV2Codec.encode(input);
    }

    if (input instanceof LeafV1) {
      return leafV1Codec.encode(input);
    }

    if (input instanceof LeafV0) {
      return leafV0Codec.encode(input);
    }

    throw new UnimplementedError();
  }
}

export class CappuccinoAPILeafCodec extends TypeCheckingCodec<
  CappuccinoAPILeaf,
  ReturnType<InstanceType<new () => CappuccinoAPILeafEncoder>['convert']>
> {
  readonly encoder = new CappuccinoAPILeafEncoder();
  readonly decoder = new CappuccinoAPILeafDecoder();
}

export const cappuccinoAPILeafCodec = new CappuccinoAPILeafCodec();
