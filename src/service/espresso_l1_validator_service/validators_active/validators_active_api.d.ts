import { ActiveValidatorSetSnapshot } from './active_validator_set_snapshot';
import { ActiveValidatorSetUpdate } from './active_validator_set_update';
/**
 * ValidatorsActiveAPI defines the interface for interacting with the
 * active validator set API.
 *
 * This interface represents the endpoints that are available from
 * via the /validators/active API path.
 */
export interface ValidatorsActiveAPI {
    /**
     * active retrieves a snapshot of the active validator set at
     * the current L1 block.
     *
     * NOTE: This endpoint may be cached and not up-to-date with the tip of
     * the L1 chain.
     */
    active(): Promise<ActiveValidatorSetSnapshot>;
    /**
     * updatesSince retrieves all updates to the active validator set since the
     * provided block number.
     */
    updatesSince(number: bigint): Promise<ActiveValidatorSetUpdate>;
}
