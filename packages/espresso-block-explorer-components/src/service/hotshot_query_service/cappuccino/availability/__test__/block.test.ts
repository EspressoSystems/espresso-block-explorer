import { PseudoRandomNumberGenerator } from '@/data_source/fake_data_source/prng';
import { TaggedBase64 } from '@/models/espresso/tagged_base64/tagged_base64';
import { describe, expect, it } from 'vitest';
import { CappuccinoAPIBlock, cappuccinoAPIBlockCodec } from '../block';
import { CappuccinoAPIHeaderImpl } from '../block_header';
import { CappuccinoAPIV0HeaderFieldsImpl } from '../block_header_v0';
import { CappuccinoBuilderSignature } from '../builder_signature';
import { CappuccinoFeeInfo } from '../fee_info';
import { CappuccinoL1Finalized } from '../l1_finalized';
import { CappuccinoNamespaceTable } from '../namespace_table';
import { CappuccinoAPIPayload } from '../payload';
import { CappuccinoAPITransactionNMTEntry } from '../transaction_nmt_entry';
import { CappuccinoVersion, WrappedVersion } from '../version';

describe('CappuccinoAPIBlock', () => {
  const prng = new PseudoRandomNumberGenerator();
  for (let i = 0; i < 10; i++) {
    const block = new CappuccinoAPIBlock(
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
      new TaggedBase64('BLOCK', prng.fillBytes(20)),
      prng.nextInt(),
      prng.nextInt(),
    );

    it('should encode and decode to the same values', () => {
      expect(
        cappuccinoAPIBlockCodec.decode(cappuccinoAPIBlockCodec.encode(block)),
      ).deep.equals(block);
    });
  }
});
