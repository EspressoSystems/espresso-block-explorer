import { collectAsyncIterable, iotaAsync } from '@/functional/functional_async';
import '@testing-library/jest-dom';
import { describe, expect, it } from 'vitest';
import { mapAsyncIterable } from '../map';

describe('mapAsyncIterable', () => {
  it('should contain the element sequence expected', async () => {
    await expect(
      collectAsyncIterable(
        mapAsyncIterable(iotaAsync(10), (n) => Promise.resolve(n * n)),
      ),
    ).resolves.deep.equal([0, 1, 4, 9, 16, 25, 36, 49, 64, 81]);
  });
});
