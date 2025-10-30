import { generateAllEspressoBlocks } from '@/data_source/fake_data_source/espresso/blocks';
import { lastAsyncIterator } from '@/functional/functional_async';
import { CappuccinoHotShotQueryServiceStatusAPI } from '../status_api';

export class FakeDataCappuccinoHotShotQueryServiceStatusAPI
  implements CappuccinoHotShotQueryServiceStatusAPI
{
  async blockHeight(): Promise<number> {
    const lastBlock = await lastAsyncIterator(generateAllEspressoBlocks());

    return lastBlock.height;
  }
}
