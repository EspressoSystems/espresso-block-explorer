import { validateAndExpandResponse } from '@/async/fetch/response_validators';
import { numberCodec } from '@/convert/codec/number';
import { CappuccinoHotShotQueryServiceStatusAPI } from '../status_api';

export class FetchBasedCappuccinoHotShotQueryServiceStatusAPI
  implements CappuccinoHotShotQueryServiceStatusAPI
{
  private readonly fetcher: typeof fetch;
  private readonly baseURL: URL;
  private readonly blockHeightURL: URL;
  private readonly blockHeightResponseValidator = validateAndExpandResponse(
    numberCodec.decoder,
  );

  constructor(fetcher: typeof fetch, url: URL) {
    this.fetcher = fetcher;
    this.baseURL = url;
    this.blockHeightURL = new URL('block-height', this.baseURL);
  }

  blockHeight(): Promise<number> {
    return this.fetcher(this.blockHeightURL).then(
      this.blockHeightResponseValidator,
    );
  }
}
