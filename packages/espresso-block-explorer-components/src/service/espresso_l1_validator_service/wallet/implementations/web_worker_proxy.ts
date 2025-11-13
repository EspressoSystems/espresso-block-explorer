import { hexArrayBufferCodec } from '@/convert/codec';
import { WebWorkerRequest } from '../../web_worker_types';
import { WalletAPI } from '../wallet_api';
import { WalletSnapshot, walletSnapshotJSONCodec } from '../wallet_snapshot';
import { WalletUpdate, walletUpdateJSONCodec } from '../wallet_update';

/**
 * WalletAPIRequest represents a Web Worker request for the WalletAPI.
 */
export type WalletAPIRequest<Method extends keyof WalletAPI = keyof WalletAPI> =
  WebWorkerRequest<'wallet', Method, Parameters<WalletAPI[Method]>>;

/**
 * WebWorkerProxyWalletAPI is a proxy for the WalletAPI
 * that forwards requests to the underlying service implementation, it
 * handles the encoding and decoding of requests and responses.
 */
export class WebWorkerProxyWalletAPI {
  constructor(private readonly service: WalletAPI) {}

  async snapshot(
    address: ArrayBuffer,
    hash: ArrayBuffer,
  ): Promise<WalletSnapshot> {
    return this.service.snapshot(address, hash);
  }

  /**
   * updates returns the updates that affected the wallet identified by the
   * given address at a specific block hash.
   */
  async updates(
    address: ArrayBuffer,
    hash: ArrayBuffer,
  ): Promise<WalletUpdate> {
    return this.service.updates(address, hash);
  }

  async handleRequest(request: WalletAPIRequest) {
    switch (request.method) {
      case 'snapshot':
        return walletSnapshotJSONCodec.encode(
          await this.snapshot(
            hexArrayBufferCodec.decode(request.param[0]),
            hexArrayBufferCodec.decode(request.param[1]),
          ),
        );

      case 'updates':
        return walletUpdateJSONCodec.encode(
          await this.updates(
            hexArrayBufferCodec.decode(request.param[0]),
            hexArrayBufferCodec.decode(request.param[1]),
          ),
        );
    }
  }
}
