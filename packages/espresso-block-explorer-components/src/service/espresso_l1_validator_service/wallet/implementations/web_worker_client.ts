import { hexArrayBufferCodec } from '@/convert/codec';
import { Codec } from '@/convert/codec/convert';
import { AsyncRequestHelper } from '../../web_worker_types';
import { WalletAPI } from '../wallet_api';
import { WalletSnapshot, walletSnapshotJSONCodec } from '../wallet_snapshot';
import { WalletUpdate, walletUpdateJSONCodec } from '../wallet_update';

/**
 * WebWorkerClientBasedWalletAPI is an implementation of
 * WalletAPI that uses a Web Worker to communicate with the
 * `wallet` endpoints for the Validator Service API.
 */
export class WebWorkerClientBasedWalletAPI implements WalletAPI {
  private helper: AsyncRequestHelper;
  constructor(helper: AsyncRequestHelper) {
    this.helper = helper;
  }

  /**
   * sendRequest sends a request to the Web Worker encoded specifically
   * for the WalletAPI, and returns the decoded response.
   */
  private async sendRequest<
    T,
    Method extends keyof WalletAPI = keyof WalletAPI,
    Param = unknown,
  >(codec: Codec<T, unknown>, method: Method, ...param: Param[]): Promise<T> {
    return this.helper.submitRequest<T>(codec, 'wallet', method, param);
  }

  async snapshot(
    address: ArrayBuffer,
    hash: ArrayBuffer,
  ): Promise<WalletSnapshot> {
    return await this.sendRequest(
      walletSnapshotJSONCodec,
      'snapshot',
      hexArrayBufferCodec.encode(address),
      hexArrayBufferCodec.encode(hash),
    );
  }

  async updates(
    address: ArrayBuffer,
    hash: ArrayBuffer,
  ): Promise<WalletUpdate> {
    return await this.sendRequest(
      walletUpdateJSONCodec,
      'updates',
      hexArrayBufferCodec.encode(address),
      hexArrayBufferCodec.encode(hash),
    );
  }
}
