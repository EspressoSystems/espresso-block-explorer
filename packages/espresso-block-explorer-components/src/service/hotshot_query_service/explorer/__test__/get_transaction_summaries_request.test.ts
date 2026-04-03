import { PseudoRandomNumberGenerator } from '@/data_source/fake_data_source/prng';
import { TaggedBase64 } from '@/models/espresso/tagged_base64/tagged_base64';
import { describe, expect, it } from 'vitest';
import { ExplorerGetTransactionSummariesFilter } from '../get_transaction_summaries_filter';
import {
  ExplorerGetTransactionSummariesRequest,
  explorerGetTransactionSummariesRequestCodec,
} from '../get_transaction_summaries_request';
import { ExplorerGetTransactionSummariesTarget } from '../get_transaction_summaries_target';

describe('ExplorerGetTransactionSummariesRequest', () => {
  const prng = new PseudoRandomNumberGenerator();

  const targets: (() => ExplorerGetTransactionSummariesTarget)[] = [
    () => ExplorerGetTransactionSummariesTarget.latest(prng.nextInt()),
    () =>
      ExplorerGetTransactionSummariesTarget.heightAndOffset(
        prng.nextInt(),
        prng.nextInt(),
        prng.nextInt(),
      ),
    () =>
      ExplorerGetTransactionSummariesTarget.hash(
        new TaggedBase64('COMMIT', prng.fillBytes(20)),
        prng.nextInt(),
      ),
  ];

  const filters: (() => ExplorerGetTransactionSummariesFilter)[] = [
    () => ExplorerGetTransactionSummariesFilter.none(),
    () => ExplorerGetTransactionSummariesFilter.block(prng.nextInt()),
    () => ExplorerGetTransactionSummariesFilter.namespace(prng.nextInt()),
  ];

  {
    for (let k = 0; k < targets.length; k++) {
      for (let j = 0; j < filters.length; j++) {
        for (let i = 0; i < 10; i++) {
          const request = new ExplorerGetTransactionSummariesRequest(
            targets[k](),
            filters[j](),
          );

          it('should encode and decode to the same values', () => {
            expect(request.toJSON()).deep.equals(
              explorerGetTransactionSummariesRequestCodec.encode(request),
            );

            expect(
              explorerGetTransactionSummariesRequestCodec.decode(
                explorerGetTransactionSummariesRequestCodec.encode(request),
              ),
            ).deep.equals(request);
          });
        }
      }
    }
  }
});
