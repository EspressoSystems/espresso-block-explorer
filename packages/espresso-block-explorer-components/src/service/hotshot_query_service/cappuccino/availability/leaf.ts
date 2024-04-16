import { hexArrayBufferCodec } from '../../../../convert/codec/array_buffer';
import {
  Converter,
  TypeCheckingCodec,
  isRecord,
  isUnknown,
} from '../../../../convert/codec/convert';
import {
  numberArrayCodec,
  numberCodec,
} from '../../../../convert/codec/number';
import InvalidInputError from '../../../../errors/InvalidInputError';
import {
  TaggedBase64,
  taggedBase64Codec,
} from '../../../../models/espresso/tagged_base64/TaggedBase64';
import { CappuccinoAPIHeader, cappuccinoAPIHeaderCodec } from './block_header';
import { CappuccinoAPIPayload, cappuccinoAPIPayloadCodec } from './payload';
import {
  CappuccinoAPIQuorumCertificate,
  cappuccinoAPIQuorumCertificateCodec,
} from './quorum_certificate';

/**
 * CappuccinoAPILeaf represents a leaf in the Cappuccino API.
 */
export class CappuccinoAPILeaf {
  readonly view_number: number;
  readonly justify_qc: CappuccinoAPIQuorumCertificate;
  readonly parent_commitment: TaggedBase64;
  readonly block_header: CappuccinoAPIHeader;
  readonly block_payload: CappuccinoAPIPayload;
  readonly rejected: number[];
  readonly timestamp: number;
  readonly proposer_id: ArrayBuffer;

  constructor(
    view_number: number,
    justify_qc: CappuccinoAPIQuorumCertificate,
    parent_commitment: TaggedBase64,
    block_header: CappuccinoAPIHeader,
    block_payload: CappuccinoAPIPayload,
    rejected: number[],
    timestamp: number,
    proposer_id: ArrayBuffer,
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
    return cappuccinoAPILeafCodec.encode(this);
  }
}

export class CappuccinoAPILeafDecoder
  implements Converter<unknown, CappuccinoAPILeaf>
{
  convert(input: unknown): CappuccinoAPILeaf {
    if (
      !isRecord(input, 'view_number', isUnknown) ||
      !isRecord(input, 'justify_qc', isUnknown) ||
      !isRecord(input, 'parent_commitment', isUnknown) ||
      !isRecord(input, 'block_header', isUnknown) ||
      !isRecord(input, 'block_payload', isUnknown) ||
      !isRecord(input, 'rejected', isUnknown) ||
      !isRecord(input, 'timestamp', isUnknown) ||
      !isRecord(input, 'proposer_id', isUnknown)
    ) {
      throw new InvalidInputError();
    }

    return new CappuccinoAPILeaf(
      numberCodec.decode(input.view_number),
      cappuccinoAPIQuorumCertificateCodec.decode(input.justify_qc),
      taggedBase64Codec.decode(input.parent_commitment),
      cappuccinoAPIHeaderCodec.decode(input.block_header),
      cappuccinoAPIPayloadCodec.decode(input.block_payload),
      numberArrayCodec.decode(input.rejected),
      numberCodec.decode(input.timestamp),
      hexArrayBufferCodec.decode(input.proposer_id),
    );
  }
}

export class CappuccinoAPILeafEncoder implements Converter<CappuccinoAPILeaf> {
  convert(input: CappuccinoAPILeaf) {
    return {
      view_number: numberCodec.encode(input.view_number),
      justify_qc: cappuccinoAPIQuorumCertificateCodec.encode(input.justify_qc),
      parent_commitment: taggedBase64Codec.encode(input.parent_commitment),
      block_header: cappuccinoAPIHeaderCodec.encode(input.block_header),
      block_payload: cappuccinoAPIPayloadCodec.encode(input.block_payload),
      rejected: numberArrayCodec.encode(input.rejected),
      timestamp: numberCodec.encode(input.timestamp),
      proposer_id: hexArrayBufferCodec.encode(input.proposer_id),
    };
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
