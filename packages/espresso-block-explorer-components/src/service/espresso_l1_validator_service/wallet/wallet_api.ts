import { WalletSnapshot } from './wallet_snapshot';
import { WalletUpdate } from './wallet_update';

/**
 * WalletAPI defines the interface for interacting with wallet data.
 */
export interface WalletAPI {
  /**
   * snapshot returns a snapshot of the wallet identified by the given address
   * at a specific block hash.
   */
  snapshot(address: ArrayBuffer, hash: ArrayBuffer): Promise<WalletSnapshot>;

  /**
   * updates returns the updates that affected the wallet identified by the
   * given address at a specific block hash.
   */
  updates(address: ArrayBuffer, hash: ArrayBuffer): Promise<WalletUpdate>;
}
