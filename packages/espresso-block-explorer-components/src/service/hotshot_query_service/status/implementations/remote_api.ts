import { validateAndExpandResponse } from '@/async/fetch/response_validators';
import { numberCodec } from '@/convert/codec/number';
import { HotShotQueryServiceStatusAPI } from '../status_api';

export class FetchBasedHotShotQueryServiceStatusAPI implements HotShotQueryServiceStatusAPI {
  private readonly blockHeightURL: URL;
  private readonly blockHeightResponseValidator = validateAndExpandResponse(
    numberCodec.decoder,
  );

  constructor(
    private readonly fetcher: typeof fetch,
    private readonly baseURL: URL,
  ) {
    this.blockHeightURL = new URL('block-height', this.baseURL);
  }

  blockHeight(): Promise<number> {
    return this.fetcher(this.blockHeightURL).then(
      this.blockHeightResponseValidator,
    );
  }
}
