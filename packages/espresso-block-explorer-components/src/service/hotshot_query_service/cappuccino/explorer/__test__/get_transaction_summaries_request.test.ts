import { PseudoRandomNumberGenerator } from '@/data_source/fake_data_source/prng';
import { TaggedBase64 } from '@/models/espresso/tagged_base64/TaggedBase64';
import { describe, expect, it } from 'vitest';
import { CappuccinoExplorerGetTransactionSummariesFilter } from '../get_transaction_summaries_filter';
import {
  CappuccinoExplorerGetTransactionSummariesRequest,
  cappuccinoExplorerGetTransactionSummariesRequestCodec,
} from '../get_transaction_summaries_request';
import { CappuccinoExplorerGetTransactionSummariesTarget } from '../get_transaction_summaries_target';

describe('CappuccinoExplorerGetTransactionSummariesRequest', () => {
  const prng = new PseudoRandomNumberGenerator();

  const targets: (() => CappuccinoExplorerGetTransactionSummariesTarget)[] = [
    () =>
      CappuccinoExplorerGetTransactionSummariesTarget.latest(prng.nextInt()),
    () =>
      CappuccinoExplorerGetTransactionSummariesTarget.heightAndOffset(
        prng.nextInt(),
        prng.nextInt(),
        prng.nextInt(),
      ),
    () =>
      CappuccinoExplorerGetTransactionSummariesTarget.hash(
        new TaggedBase64('COMMIT', prng.fillBytes(20)),
        prng.nextInt(),
      ),
  ];

  const filters: (() => CappuccinoExplorerGetTransactionSummariesFilter)[] = [
    () => CappuccinoExplorerGetTransactionSummariesFilter.none(),
    () => CappuccinoExplorerGetTransactionSummariesFilter.block(prng.nextInt()),
    () =>
      CappuccinoExplorerGetTransactionSummariesFilter.namespace(prng.nextInt()),
  ];

  {
    for (let k = 0; k < targets.length; k++) {
      for (let j = 0; j < filters.length; j++) {
        for (let i = 0; i < 10; i++) {
          const request = new CappuccinoExplorerGetTransactionSummariesRequest(
            targets[k](),
            filters[j](),
          );

          it('should encode and decode to the same values', () => {
            expect(request.toJSON()).deep.equals(
              cappuccinoExplorerGetTransactionSummariesRequestCodec.encode(
                request,
              ),
            );

            expect(
              cappuccinoExplorerGetTransactionSummariesRequestCodec.decode(
                cappuccinoExplorerGetTransactionSummariesRequestCodec.encode(
                  request,
                ),
              ),
            ).deep.equals(request);
          });
        }
      }
    }
  }
});
