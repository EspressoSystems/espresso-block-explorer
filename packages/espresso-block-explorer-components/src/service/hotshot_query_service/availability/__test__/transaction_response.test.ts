import { PseudoRandomNumberGenerator } from '@/data_source/fake_data_source/prng';
import { TaggedBase64 } from '@/models/espresso/tagged_base64/tagged_base64';
import { describe, expect, it } from 'vitest';
import {
  AvailabilityAPIMerkleTreeBranchProof,
  AvailabilityAPIMerkleTreeEmptyProof,
  AvailabilityAPIMerkleTreeLeafProof,
} from '../merkle_tree_proof';
import { AvailabilityAPITransactionNMTEntry } from '../transaction_nmt_entry';
import { AvailabilityAPITransactionProof } from '../transaction_proof';
import {
  AvailabilityAPITransactionResponse,
  availabilityAPITransactionResponseCodec,
} from '../transaction_response';

describe('CappuccinoAPILeafResponse', () => {
  const prng = new PseudoRandomNumberGenerator();
  for (let i = 0; i < 10; i++) {
    const response = new AvailabilityAPITransactionResponse(
      new AvailabilityAPITransactionNMTEntry(
        prng.nextInt(),
        Array.from(new Uint8Array(prng.fillBytes(20))),
      ),
      new TaggedBase64('BLOCK', prng.fillBytes(20)),
      new AvailabilityAPITransactionProof(
        new TaggedBase64('PROOF', prng.fillBytes(20)),
        [
          new AvailabilityAPIMerkleTreeBranchProof(
            new TaggedBase64('BRANCH', prng.fillBytes(20)),
            [
              new AvailabilityAPIMerkleTreeLeafProof(
                new TaggedBase64('LEAF', prng.fillBytes(20)),
                new TaggedBase64('HASH', prng.fillBytes(20)),
                new TaggedBase64('SIBLING', prng.fillBytes(20)),
              ),
              new AvailabilityAPIMerkleTreeEmptyProof(),
            ],
          ),
        ],
      ),
      prng.nextInt(),
      new TaggedBase64('STATE', prng.fillBytes(20)),
    );

    it('should encode and decode to the same values', () => {
      expect(
        availabilityAPITransactionResponseCodec.decode(
          availabilityAPITransactionResponseCodec.encode(response),
        ),
      ).deep.equals(response);
    });
  }
});
