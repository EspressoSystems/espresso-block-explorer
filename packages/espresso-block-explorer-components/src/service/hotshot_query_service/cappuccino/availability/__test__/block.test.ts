import { describe, expect, it } from 'vitest';
import { PseudoRandomNumberGenerator } from '../../../../../data_source/fake_data_source/prng';
import { TaggedBase64 } from '../../../../../models/espresso/tagged_base64/TaggedBase64';
import { CappuccinoAPIBlock, cappuccinoAPIBlockCodec } from '../block';
import { CappuccinoAPIHeader } from '../block_header';
import { CappuccinoBuilderSignature } from '../builder_signature';
import { CappuccinoFeeInfo } from '../fee_info';
import { CappuccinoL1Finalized } from '../l1_finalized';
import { CappuccinoNamespaceTable } from '../namespace_table';
import { CappuccinoAPIPayload } from '../payload';
import { CappuccinoAPITransactionNMTEntry } from '../transaction_nmt_entry';

describe('CappuccinoAPIBlock', () => {
  const prng = new PseudoRandomNumberGenerator();
  for (let i = 0; i < 10; i++) {
    const block = new CappuccinoAPIBlock(
      new CappuccinoAPIHeader(
        prng.nextInt(),
        prng.nextInt(),
        prng.nextInt(),
        new CappuccinoL1Finalized(
          prng.nextInt(),
          '0x1234567890abcdef',
          '0x1234567890abcdef',
        ),
        Array.from(new Uint8Array(prng.fillBytes(20))),
        new CappuccinoNamespaceTable(prng.fillBytes(20)),
        new TaggedBase64('STATE', prng.fillBytes(20)),
        new TaggedBase64('MERKLE', prng.fillBytes(20)),
        new CappuccinoBuilderSignature(
          prng.fillBytes(20),
          prng.fillBytes(20),
          prng.nextInt(),
        ),
        new CappuccinoFeeInfo(prng.fillBytes(20), prng.fillBytes(20)),
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
