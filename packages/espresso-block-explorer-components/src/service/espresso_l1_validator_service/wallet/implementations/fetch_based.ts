import { validateAndExpandResponse } from '@/async/fetch/response_validators';
import { hexArrayBufferCodec } from '@/convert/codec';
import { WalletAPI } from '../wallet_api';
import { WalletSnapshot, walletSnapshotJSONCodec } from '../wallet_snapshot';
import { WalletUpdate, walletUpdateJSONCodec } from '../wallet_update';

/**
 * FetchBasedWalletAPI is an implementation of WalletAPI
 * that uses the Fetch API to communicate with the `wallet` endpoints
 * for the Validator Service API as an external service over HTTP REST requests.
 */
export class FetchBasedWalletAPI implements WalletAPI {
  private readonly fetcher: typeof fetch;
  private readonly baseURL: URL;

  constructor(fetcher: typeof fetch, baseURL: URL) {
    this.fetcher = fetcher;
    this.baseURL = baseURL;
  }

  async snapshot(
    address: ArrayBuffer,
    hash: ArrayBuffer,
  ): Promise<WalletSnapshot> {
    const url = new URL(
      `./${hexArrayBufferCodec.encode(address)}/${hexArrayBufferCodec.encode(hash)}`,
      this.baseURL,
    );
    return this.fetcher(url).then(
      validateAndExpandResponse(walletSnapshotJSONCodec.decoder),
    );
  }

  async updates(
    address: ArrayBuffer,
    hash: ArrayBuffer,
  ): Promise<WalletUpdate> {
    const url = new URL(
      `./${hexArrayBufferCodec.encode(address)}/updates/${hexArrayBufferCodec.encode(hash)}`,
      this.baseURL,
    );
    return this.fetcher(url).then(
      validateAndExpandResponse(walletUpdateJSONCodec.decoder),
    );
  }
}
