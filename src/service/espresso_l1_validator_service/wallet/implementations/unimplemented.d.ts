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
export declare class UnimplementedWalletAPI implements WalletAPI {
    snapshot(): Promise<WalletSnapshot>;
    updates(): Promise<WalletUpdate>;
}
