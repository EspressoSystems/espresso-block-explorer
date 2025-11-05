/**
 * ERC20UpgradableReadOnly defines the read-only methods of an
 * ERC20 upgradable contract.
 */
export interface ERC20UpgradableReadOnly {
  name(): Promise<string>;
  symbol(): Promise<string>;
  decimals(): Promise<number>;
  totalSupply(): Promise<bigint>;
  balanceOf(account: `0x${string}`): Promise<bigint>;
  allowance(owner: `0x${string}`, spender: `0x${string}`): Promise<bigint>;
}

/**
 * ERC20UpgradableWriteable defines the writeable methods of an
 * ERC20 upgradable contract.
 */
export interface ERC20UpgradableWriteable {
  transfer(to: `0x${string}`, value: bigint): Promise<`0x${string}`>;
  approve(spender: `0x${string}`, value: bigint): Promise<`0x${string}`>;
  transferFrom(
    from: `0x${string}`,
    to: `0x${string}`,
    value: bigint,
  ): Promise<`0x${string}`>;
}

/**
 * ERC20UpgradableContract combines both read-only and writeable
 * methods of an ERC20 upgradable contract.
 */
export interface ERC20UpgradableContract
  extends ERC20UpgradableReadOnly,
    ERC20UpgradableWriteable {}
