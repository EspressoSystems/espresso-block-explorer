import { PseudoRandomNumberGenerator } from '@/data_source/fake_data_source/prng';
import { TaggedBase64 } from '@/models/espresso/tagged_base64/tagged_base64';
import { describe, expect, it } from 'vitest';
import { AvailabilityAPIBlock, availabilityAPIBlockCodec } from '../block';
import { AvailabilityAPIHeaderImpl } from '../block_header';
import { AvailabilityAPIV0HeaderFieldsImpl } from '../block_header_v0';
import { AvailabilityBuilderSignature } from '../builder_signature';
import { AvailabilityFeeInfo } from '../fee_info';
import { AvailabilityL1Finalized } from '../l1_finalized';
import { AvailabilityNamespaceTable } from '../namespace_table';
import { AvailabilityAPIPayload } from '../payload';
import { AvailabilityAPITransactionNMTEntry } from '../transaction_nmt_entry';
import { AvailabilityVersion, WrappedVersion } from '../version';

describe('CappuccinoAPIBlock', () => {
  const prng = new PseudoRandomNumberGenerator();
  for (let i = 0; i < 10; i++) {
    const block = new AvailabilityAPIBlock(
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
      new AvailabilityAPIPayload([
        new AvailabilityAPITransactionNMTEntry(
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
        availabilityAPIBlockCodec.decode(
          availabilityAPIBlockCodec.encode(block),
        ),
      ).deep.equals(block);
    });
  }
});
