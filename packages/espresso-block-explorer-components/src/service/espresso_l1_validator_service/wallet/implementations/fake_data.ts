import { L1BlockInfo } from '../../common/l1_block_info';
import { WalletAPI } from '../wallet_api';
import { WalletSnapshot } from '../wallet_snapshot';
import { WalletUpdate } from '../wallet_update';

/**
 * FakeDataWalletAPI is an implementation of WalletAPI
 * that uses fake data to simulate the `wallet` endpoints
 * for the Validator Service API.
 */
export class FakeDataWalletAPI implements WalletAPI {
  async snapshot(): Promise<WalletSnapshot> {
    return new WalletSnapshot(
      [],
      [],
      [],
      0n,
      new L1BlockInfo(0n, new ArrayBuffer(0), new Date(0)),
    );
  }

  async updates(): Promise<WalletUpdate> {
    return new WalletUpdate(
      new L1BlockInfo(0n, new ArrayBuffer(0), new Date(0)),
      [],
    );
  }
}
