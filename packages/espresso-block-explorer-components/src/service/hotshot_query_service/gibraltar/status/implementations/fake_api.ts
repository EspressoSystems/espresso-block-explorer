import { generateAllBlocks } from '../../../../../data_source/fake_data_source/generateFakeData';
import { lastAsyncIterator } from '../../../../../functional/functional_async';
import { GibraltarHotShotQueryServiceStatusAPI } from '../status_api';

export class FakeDataGibraltarHotShotQueryServiceStatusAPI
  implements GibraltarHotShotQueryServiceStatusAPI
{
  async blockHeight(): Promise<number> {
    const lastBlock = await lastAsyncIterator(generateAllBlocks());

    return lastBlock.height;
  }
}
