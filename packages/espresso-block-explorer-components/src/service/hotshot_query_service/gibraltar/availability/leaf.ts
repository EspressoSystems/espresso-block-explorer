import {
  Codec,
  Converter,
  InvalidInputError,
  isNumber,
  isRecord,
  isUnknown,
} from '../../../../convert/codec/convert';
import { isUnknownArray } from '../../../../convert/codec/unknown';
import {
  TaggedBase64,
  taggedBase64Codec,
} from '../../../../models/espresso/tagged_base64/TaggedBase64';
import { GibraltarAPIHeader, gibraltarAPIHeaderCodec } from './block_header';
import { GibraltarAPIPayload, gibraltarAPIPayloadCodec } from './payload';
import {
  GibraltarAPIQuorumCertificate,
  gibraltarAPIQuorumCertificateCodec,
} from './quorum_certificate';

export class GibraltarAPILeaf {
  readonly view_number: number;
  readonly justify_qc: GibraltarAPIQuorumCertificate;
  readonly parent_commitment: TaggedBase64;
  readonly block_header: GibraltarAPIHeader;
  readonly block_payload: GibraltarAPIPayload;
  readonly rejected: unknown[];
  readonly timestamp: number;
  readonly proposer_id: TaggedBase64;

  constructor(
    view_number: number,
    justify_qc: GibraltarAPIQuorumCertificate,
    parent_commitment: TaggedBase64,
    block_header: GibraltarAPIHeader,
    block_payload: GibraltarAPIPayload,
    rejected: unknown[],
    timestamp: number,
    proposer_id: TaggedBase64,
  ) {
    this.view_number = view_number;
    this.justify_qc = justify_qc;
    this.parent_commitment = parent_commitment;
    this.block_header = block_header;
    this.block_payload = block_payload;
    this.rejected = rejected;
    this.timestamp = timestamp;
    this.proposer_id = proposer_id;
  }

  toJSON() {
    return gibraltarAPILeafCodec.encode(this);
  }
}

export class GibraltarAPILeafDecoder
  implements Converter<unknown, GibraltarAPILeaf>
{
  convert(input: unknown): GibraltarAPILeaf {
    if (
      !isRecord(input, 'view_number', isNumber) ||
      !isRecord(input, 'justify_qc', isUnknown) ||
      !isRecord(input, 'parent_commitment', isUnknown) ||
      !isRecord(input, 'block_header', isUnknown) ||
      !isRecord(input, 'block_payload', isUnknown) ||
      !isRecord(input, 'rejected', isUnknownArray) ||
      !isRecord(input, 'timestamp', isNumber) ||
      !isRecord(input, 'proposer_id', isUnknown)
    ) {
      throw new InvalidInputError();
    }

    return new GibraltarAPILeaf(
      input.view_number,
      gibraltarAPIQuorumCertificateCodec.decode(input.justify_qc),
      taggedBase64Codec.decode(input.parent_commitment),
      gibraltarAPIHeaderCodec.decode(input.block_header),
      gibraltarAPIPayloadCodec.decode(input.block_payload),
      input.rejected,
      input.timestamp,
      taggedBase64Codec.decode(input.proposer_id),
    );
  }
}

export class GibraltarAPILeafEncoder
  implements Converter<GibraltarAPILeaf, unknown>
{
  convert(input: GibraltarAPILeaf): unknown {
    return {
      view_number: input.view_number,
      justify_qc: gibraltarAPIQuorumCertificateCodec.encode(input.justify_qc),
      parent_commitment: taggedBase64Codec.encode(input.parent_commitment),
      block_header: gibraltarAPIHeaderCodec.encode(input.block_header),
      block_payload: gibraltarAPIPayloadCodec.encode(input.block_payload),
      rejected: input.rejected,
      timestamp: input.timestamp,
      proposer_id: taggedBase64Codec.encode(input.proposer_id),
    };
  }
}

export class GibraltarAPILeafCodec extends Codec<GibraltarAPILeaf, unknown> {
  readonly encoder = new GibraltarAPILeafEncoder();
  readonly decoder = new GibraltarAPILeafDecoder();
}

export const gibraltarAPILeafCodec = new GibraltarAPILeafCodec();
