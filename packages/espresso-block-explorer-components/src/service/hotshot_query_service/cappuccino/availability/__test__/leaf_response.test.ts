import { PseudoRandomNumberGenerator } from '@/data_source/fake_data_source/prng';
import { TaggedBase64 } from '@/models/espresso/tagged_base64/tagged_base64';
import { describe, expect, it } from 'vitest';
import { CappuccinoAPIBitVec } from '../bit_vec';
import { CappuccinoAPIBitVecHead } from '../bit_vec_head';
import { CappuccinoAPIBitVecOrder } from '../bit_vec_order';
import { CappuccinoAPIHeaderImpl } from '../block_header';
import { CappuccinoAPIV0HeaderFieldsImpl } from '../block_header_v0';
import { CappuccinoBuilderSignature } from '../builder_signature';
import { CappuccinoFeeInfo } from '../fee_info';
import { CappuccinoL1Finalized } from '../l1_finalized';
import { CappuccinoAPILeaf } from '../leaf';
import {
  CappuccinoAPILeafResponse,
  cappuccinoAPILeafResponseCodec,
} from '../leaf_response';
import { CappuccinoNamespaceTable } from '../namespace_table';
import { CappuccinoAPIPayload } from '../payload';
import { CappuccinoAPIQuorumCertificate } from '../quorum_certificate';
import { CappuccinoAPIBQuorumCertificateData } from '../quorum_certificate_data';
import { CappuccinoAPIQuorumCertificateSignatures } from '../quorum_certificate_signatures';
import { CappuccinoAPITransactionNMTEntry } from '../transaction_nmt_entry';
import { CappuccinoVersion, WrappedVersion } from '../version';

describe('CappuccinoAPILeafResponse', () => {
  const prng = new PseudoRandomNumberGenerator();
  for (let i = 0; i < 10; i++) {
    const leaf = new CappuccinoAPILeaf(
      prng.nextInt(),
      new CappuccinoAPIQuorumCertificate(
        new CappuccinoAPIBQuorumCertificateData(
          new TaggedBase64('COMMIT', prng.fillBytes(20)),
        ),
        new TaggedBase64('VOTE', prng.fillBytes(20)),
        prng.nextInt(),
        new CappuccinoAPIQuorumCertificateSignatures(
          new TaggedBase64('SIG', prng.fillBytes(20)),
          new CappuccinoAPIBitVec(
            CappuccinoAPIBitVecOrder.lsb0,
            new CappuccinoAPIBitVecHead(prng.nextInt(), prng.nextInt()),
            prng.nextInt(),
            Array.from(new BigUint64Array(prng.fillBytes(24))),
          ),
        ),
        false,
        null,
      ),
      new TaggedBase64('LEAF', prng.fillBytes(20)),
      new CappuccinoAPIHeaderImpl(
        new WrappedVersion(new CappuccinoVersion(0, 1)),
        new CappuccinoAPIV0HeaderFieldsImpl(
          prng.nextInt(),
          prng.nextInt(),
          prng.nextInt(),
          new CappuccinoL1Finalized(
            prng.nextInt(),
            '0x1234567890abcdef',
            '0x1234567890abcdef',
          ),
          new TaggedBase64('PAYLOAD', prng.fillBytes(20)),
          new TaggedBase64('BUILDER', prng.fillBytes(20)),
          new CappuccinoNamespaceTable(prng.fillBytes(20)),
          new TaggedBase64('BLOCK', prng.fillBytes(20)),
          new TaggedBase64('FEE', prng.fillBytes(20)),
          new CappuccinoFeeInfo(prng.fillBytes(20), prng.fillBytes(20)),
          new CappuccinoBuilderSignature(
            prng.fillBytes(20),
            prng.fillBytes(20),
            prng.nextInt(),
          ),
        ),
      ),
      new CappuccinoAPIPayload([
        new CappuccinoAPITransactionNMTEntry(
          prng.nextInt(),
          Array.from(new Uint8Array(prng.fillBytes(20))),
        ),
      ]),
      Array.from(new Uint8Array(prng.fillBytes(20))),
      prng.nextInt(),
      prng.fillBytes(20),
    );

    const qc = new CappuccinoAPIQuorumCertificate(
      new CappuccinoAPIBQuorumCertificateData(
        new TaggedBase64('QC', prng.fillBytes(20)),
      ),
      new TaggedBase64('VOTE', prng.fillBytes(20)),
      prng.nextInt(),
      new CappuccinoAPIQuorumCertificateSignatures(
        new TaggedBase64('SIG', prng.fillBytes(20)),
        new CappuccinoAPIBitVec(
          CappuccinoAPIBitVecOrder.lsb0,
          new CappuccinoAPIBitVecHead(prng.nextInt(), prng.nextInt()),
          prng.nextInt(),
          Array.from(new BigUint64Array(prng.fillBytes(24))),
        ),
      ),
      false,
      null,
    );

    const response = new CappuccinoAPILeafResponse(leaf, qc);

    it('should encode and decode to the same values', () => {
      expect(
        cappuccinoAPILeafResponseCodec.decode(
          cappuccinoAPILeafResponseCodec.encode(response),
        ),
      ).deep.equals(response);
    });
  }
});
