/**
 * deriveAddressesWithEnvironmentFallback derives the addresses based on the
 * provided environment, and allows for overriding specific contract addresses.
 */
export function deriveAddressesWithEnvironmentFallback(
  espTokenContractAddress: null | `0x${string}` = null,
  stakeTableContractAddress: null | `0x${string}` = null,
) {
  return {
    espTokenContractAddress: espTokenContractAddress ?? null,
    stakeTableContractAddress: stakeTableContractAddress ?? null,
  };
}
