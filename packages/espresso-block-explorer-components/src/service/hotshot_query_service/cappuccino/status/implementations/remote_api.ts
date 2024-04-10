import { validateAndExpandResponse } from '../../../../../async/fetch/response_validators';
import InvalidTypeError from '../../../../../errors/InvalidTypeError';
import { CappuccinoHotShotQueryServiceStatusAPI } from '../status_api';

export class FetchBasedCappuccinoHotShotQueryServiceStatusAPI
  implements CappuccinoHotShotQueryServiceStatusAPI
{
  private readonly fetcher: typeof fetch;
  private readonly baseURL: URL;
  private readonly blockHeightURL: URL;
  private readonly blockHeightResponseValidator = validateAndExpandResponse({
    convert(a) {
      if (typeof a !== 'number') {
        throw new InvalidTypeError(typeof a, 'number');
      }

      return a;
    },
  });

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
