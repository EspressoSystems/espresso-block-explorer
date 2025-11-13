import UnimplementedError from '@/errors/UnimplementedError';
import { WalletAPI } from '../wallet_api';
import { WalletSnapshot } from '../wallet_snapshot';
import { WalletUpdate } from '../wallet_update';

/**
 * UnimplementedWalletAPI is a stub implementation of the
 * WalletAPI interface that throws UnimplementedError for all methods.
 *
 * It is provided for convenience to serve as a default, and to allow partial
 * implementations to extend it without having to implement all methods.
 */
export class UnimplementedWalletAPI implements WalletAPI {
  async snapshot(): Promise<WalletSnapshot> {
    throw new UnimplementedError();
  }

  async updates(): Promise<WalletUpdate> {
    throw new UnimplementedError();
  }
}
