import { PseudoRandomNumberGenerator } from '@/data_source/fake_data_source/prng';
import { TaggedBase64 } from '@/models/espresso/tagged_base64/tagged_base64';
import { describe, expect, it } from 'vitest';
import { BitVec } from '../bit_vec';
import { BitVecHead } from '../bit_vec_head';
import { BitVecOrder } from '../bit_vec_order';
import { AvailabilityAPIHeaderImpl } from '../block_header';
import { AvailabilityAPIV0HeaderFieldsImpl } from '../block_header_v0';
import { AvailabilityBuilderSignature } from '../builder_signature';
import { AvailabilityFeeInfo } from '../fee_info';
import { AvailabilityL1Finalized } from '../l1_finalized';
import {
  AvailabilityAPILeafResponse,
  availabilityAPILeafResponseCodec,
} from '../leaf_response';
import { LeafV0 } from '../leaf_v0';
import { AvailabilityNamespaceTable } from '../namespace_table';
import { AvailabilityAPIPayloadV0 } from '../payload_v0';
import { QuorumCertificateV1 } from '../quorum_certificate_v1';
import { QuorumDataV1 } from '../quorum_data_v1';
import { SimpleCertificateSignatures } from '../simple_certificate_signatures';
import { AvailabilityAPITransactionNMTEntry } from '../transaction_nmt_entry';
import { AvailabilityVersion, WrappedVersion } from '../version';

describe('CappuccinoAPILeafResponse', () => {
  const prng = new PseudoRandomNumberGenerator();
  for (let i = 0; i < 10; i++) {
    const leaf = new LeafV0(
      prng.nextInt(),
      new QuorumCertificateV1(
        new QuorumDataV1(new TaggedBase64('COMMIT', prng.fillBytes(20))),
        new TaggedBase64('VOTE', prng.fillBytes(20)),
        prng.nextInt(),
        new SimpleCertificateSignatures(
          new TaggedBase64('SIG', prng.fillBytes(20)),
          new BitVec(
            BitVecOrder.lsb0,
            new BitVecHead(prng.nextInt(), prng.nextInt()),
            prng.nextInt(),
            Array.from(new BigUint64Array(prng.fillBytes(24))),
          ),
        ),
        false,
        null,
      ),
      new TaggedBase64('LEAF', prng.fillBytes(20)),
      new AvailabilityAPIHeaderImpl(
        new WrappedVersion(new AvailabilityVersion(0, 1)),
        new AvailabilityAPIV0HeaderFieldsImpl(
          prng.nextInt(),
          prng.nextInt(),
          prng.nextInt(),
          new AvailabilityL1Finalized(
            prng.nextInt(),
            '0x1234567890abcdef',
            '0x1234567890abcdef',
          ),
          new TaggedBase64('PAYLOAD', prng.fillBytes(20)),
          new TaggedBase64('BUILDER', prng.fillBytes(20)),
          new AvailabilityNamespaceTable(prng.fillBytes(20)),
          new TaggedBase64('BLOCK', prng.fillBytes(20)),
          new TaggedBase64('FEE', prng.fillBytes(20)),
          new AvailabilityFeeInfo(prng.fillBytes(20), prng.fillBytes(20)),
          new AvailabilityBuilderSignature(
            prng.fillBytes(20),
            prng.fillBytes(20),
            prng.nextInt(),
          ),
        ),
      ),
      new AvailabilityAPIPayloadV0([
        new AvailabilityAPITransactionNMTEntry(
          prng.nextInt(),
          Array.from(new Uint8Array(prng.fillBytes(20))),
        ),
      ]),
      Array.from(new Uint8Array(prng.fillBytes(20))),
      prng.nextInt(),
      prng.fillBytes(20),
    );

    const qc = new QuorumCertificateV1(
      new QuorumDataV1(new TaggedBase64('QC', prng.fillBytes(20))),
      new TaggedBase64('VOTE', prng.fillBytes(20)),
      prng.nextInt(),
      new SimpleCertificateSignatures(
        new TaggedBase64('SIG', prng.fillBytes(20)),
        new BitVec(
          BitVecOrder.lsb0,
          new BitVecHead(prng.nextInt(), prng.nextInt()),
          prng.nextInt(),
          Array.from(new BigUint64Array(prng.fillBytes(24))),
        ),
      ),
      false,
      null,
    );

    const response = new AvailabilityAPILeafResponse(leaf, qc);

    it('should encode and decode to the same values', () => {
      const want = response;
      const have = availabilityAPILeafResponseCodec.decode(
        availabilityAPILeafResponseCodec.encode(response),
      );
      expect(have).deep.equals(want);
    });
  }
});
