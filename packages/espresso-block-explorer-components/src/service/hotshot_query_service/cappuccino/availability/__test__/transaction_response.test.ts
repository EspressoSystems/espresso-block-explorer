import { PseudoRandomNumberGenerator } from '@/data_source/fake_data_source/prng';
import { TaggedBase64 } from '@/models/espresso/tagged_base64/TaggedBase64';
import { describe, expect, it } from 'vitest';
import {
  CappuccinoAPIMerkleTreeBranchProof,
  CappuccinoAPIMerkleTreeEmptyProof,
  CappuccinoAPIMerkleTreeLeafProof,
} from '../merkle_tree_proof';
import { CappuccinoAPITransactionNMTEntry } from '../transaction_nmt_entry';
import { CappuccinoAPITransactionProof } from '../transaction_proof';
import {
  CappuccinoAPITransactionResponse,
  cappuccinoAPITransactionResponseCodec,
} from '../transaction_response';

describe('CappuccinoAPILeafResponse', () => {
  const prng = new PseudoRandomNumberGenerator();
  for (let i = 0; i < 10; i++) {
    const response = new CappuccinoAPITransactionResponse(
      new CappuccinoAPITransactionNMTEntry(
        prng.nextInt(),
        Array.from(new Uint8Array(prng.fillBytes(20))),
      ),
      new TaggedBase64('BLOCK', prng.fillBytes(20)),
      new CappuccinoAPITransactionProof(
        new TaggedBase64('PROOF', prng.fillBytes(20)),
        [
          new CappuccinoAPIMerkleTreeBranchProof(
            new TaggedBase64('BRANCH', prng.fillBytes(20)),
            [
              new CappuccinoAPIMerkleTreeLeafProof(
                new TaggedBase64('LEAF', prng.fillBytes(20)),
                new TaggedBase64('HASH', prng.fillBytes(20)),
                new TaggedBase64('SIBLING', prng.fillBytes(20)),
              ),
              new CappuccinoAPIMerkleTreeEmptyProof(),
            ],
          ),
        ],
      ),
      prng.nextInt(),
      new TaggedBase64('STATE', prng.fillBytes(20)),
    );

    it('should encode and decode to the same values', () => {
      expect(
        cappuccinoAPITransactionResponseCodec.decode(
          cappuccinoAPITransactionResponseCodec.encode(response),
        ),
      ).deep.equals(response);
    });
  }
});
