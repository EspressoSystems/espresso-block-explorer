import { ERC20UpgradableReadOnly, ERC20UpgradableWriteable } from '../erc20_upgradable/erc20_upgradable_interface';
import { GasEstimatorForContract } from '../l1/l1_interface';
/**
 * ESPTokenContractReadOnly defines the read-only methods of an
 * ESP token contract.
 */
export interface ESPTokenContractReadOnly extends ERC20UpgradableReadOnly {
    readonly address: `0x${string}`;
    getVersion(): Promise<readonly [number, number, number]>;
}
/**
 * ESPTokenContractWriteable defines the writeable methods of an
 * ESP token contract.
 */
export interface ESPTokenContractWriteable extends ERC20UpgradableWriteable {
}
/**
 * ESPTokenContract combines both read-only and writeable
 * methods of an ESP token contract.
 */
export interface ESPTokenContract extends ESPTokenContractReadOnly, ESPTokenContractWriteable {
}
/**
 * ESPTokenContractGasEstimator defines the gas estimator type for the
 * ESP token contract.
 */
export type ESPTokenContractGasEstimator = GasEstimatorForContract<ERC20UpgradableWriteable>;
