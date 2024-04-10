import { generateAllBlocks } from '../../../../../data_source/fake_data_source/generateFakeData';
import { lastAsyncIterator } from '../../../../../functional/functional_async';
import { CappuccinoHotShotQueryServiceStatusAPI } from '../status_api';

export class FakeDataCappuccinoHotShotQueryServiceStatusAPI
  implements CappuccinoHotShotQueryServiceStatusAPI
{
  async blockHeight(): Promise<number> {
    const lastBlock = await lastAsyncIterator(generateAllBlocks());

    return lastBlock.height;
  }
}
