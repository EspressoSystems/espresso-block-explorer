import { WalletAPI } from '../wallet_api';
import { WalletSnapshot } from '../wallet_snapshot';
import { WalletUpdate } from '../wallet_update';
/**
 * FakeDataWalletAPI is an implementation of WalletAPI
 * that uses fake data to simulate the `wallet` endpoints
 * for the Validator Service API.
 */
export declare class FakeDataWalletAPI implements WalletAPI {
    snapshot(): Promise<WalletSnapshot>;
    updates(): Promise<WalletUpdate>;
}
