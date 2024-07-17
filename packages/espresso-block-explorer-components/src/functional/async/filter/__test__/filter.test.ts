import { collectAsyncIterable, iotaAsync } from '@/functional/functional_async';
import { filterAsyncIterable } from '../filter';

describe('filterAsyncIterable', () => {
  it('should contain the element sequence expected', async () => {
    await expect(
      collectAsyncIterable(
        filterAsyncIterable(iotaAsync(10), (n) => (n & 0x01) === 0),
      ),
    ).resolves.deep.equal([0, 2, 4, 6, 8]);
    await expect(
      collectAsyncIterable(
        filterAsyncIterable(iotaAsync(10), (n) => (n & 0x01) === 1),
      ),
    ).resolves.deep.equal([1, 3, 5, 7, 9]);
    await expect(
      collectAsyncIterable(filterAsyncIterable(iotaAsync(10), () => false)),
    ).resolves.deep.equal([]);
  });
});
