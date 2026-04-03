import { generateAllEspressoBlocks } from '@/data_source/fake_data_source/espresso/blocks';
import { PseudoRandomNumberGenerator } from '@/data_source/fake_data_source/prng';
import { getStartingSeed } from '@/data_source/fake_data_source/seed';
import { lastAsyncIterable } from '@/functional/functional_async';
import { HotShotQueryServiceStatusAPI } from '../status_api';

export class FakeDataHotShotQueryServiceStatusAPI implements HotShotQueryServiceStatusAPI {
  async blockHeight(): Promise<number> {
    const now = Date.now();
    const prng = new PseudoRandomNumberGenerator(getStartingSeed());
    const lastBlock = await lastAsyncIterable(
      generateAllEspressoBlocks(prng, now),
    );

    return lastBlock.height;
  }
}
