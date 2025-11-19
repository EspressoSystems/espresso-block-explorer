/**
 * deriveAddressesWithEnvironmentFallback derives the addresses based on the
 * provided environment, and allows for overriding specific contract addresses.
 */
export declare function deriveAddressesWithEnvironmentFallback(espTokenContractAddress?: null | `0x${string}`, stakeTableContractAddress?: null | `0x${string}`, rewardClaimContractAddress?: null | `0x${string}`): {
    espTokenContractAddress: `0x${string}` | null;
    stakeTableContractAddress: `0x${string}` | null;
    rewardClaimContractAddress: `0x${string}` | null;
};
