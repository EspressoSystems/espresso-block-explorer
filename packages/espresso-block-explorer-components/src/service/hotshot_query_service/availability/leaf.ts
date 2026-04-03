import { Converter, TypeCheckingCodec } from '@/convert/codec/convert';
import ExpectedObjectWithKeyError from '@/convert/codec/expected_object_with_key_error';
import UnimplementedError from '@/errors/unimplemented_error';
import { TaggedBase64 } from '@/models/espresso/tagged_base64/tagged_base64';
import { AvailabilityAPIHeader } from './block_header';
import { LeafV0, leafV0Codec } from './leaf_v0';
import { LeafV1, leafV1Codec } from './leaf_v1';
import { LeafV2, leafV2Codec } from './leaf_v2';
import { AvailabilityAPIPayload } from './payload';
import { SimpleCertificate } from './simple_certificate';

/**
 * AvailabilityAPILeaf represents a leaf in the Availability API.
 */
export interface AvailabilityAPILeaf {
  readonly view_number: number;
  readonly justify_qc: SimpleCertificate<unknown>;
  readonly parent_commitment: TaggedBase64;
  readonly block_header: AvailabilityAPIHeader;
  readonly block_payload: null | AvailabilityAPIPayload;
}

export class AvailabilityAPILeafDecoder implements Converter<
  unknown,
  AvailabilityAPILeaf
> {
  convert(input: unknown): AvailabilityAPILeaf {
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

export class AvailabilityAPILeafEncoder implements Converter<AvailabilityAPILeaf> {
  convert(input: AvailabilityAPILeaf) {
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

export class AvailabilityAPILeafCodec extends TypeCheckingCodec<
  AvailabilityAPILeaf,
  ReturnType<InstanceType<new () => AvailabilityAPILeafEncoder>['convert']>
> {
  readonly encoder = new AvailabilityAPILeafEncoder();
  readonly decoder = new AvailabilityAPILeafDecoder();
}

export const availabilityAPILeafCodec = new AvailabilityAPILeafCodec();
