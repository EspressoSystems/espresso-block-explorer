/**
 * EspressoAddresses defines the addresses of the Espresso contracts we will
 * need to interact with.
 *
 * These addresses are used to interact with the Espresso contracts
 * on the Espresso blockchain.
 */
export interface EspressoAddresses {
    espTokenContractAddress: `0x${string}` | null;
    stakeTableContractAddress: `0x${string}` | null;
}
