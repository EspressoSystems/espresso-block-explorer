import { FullNodeSetSnapshot } from './full_node_set_snapshot';
import { FullNodeSetUpdate } from './full_node_set_update';
/**
 * ValidatorsAllAPI defines the interface for interacting with the
 * full validator set API.
 *
 * This interface represents the endpoints that are available from
 * via the /validators/all API path.
 */
export interface ValidatorsAllAPI {
    /**
     * snapshot retrieves a full snapshot of the validator set at
     * the current L1 block.
     *
     * NOTE: This endpoint may be cached and not up-to-date with the tip of
     * the L1 chain.
     */
    snapshot(): Promise<FullNodeSetSnapshot>;
    /**
     * updatesSince retrieves all updates to the validator set since the
     * provided hash.
     */
    updatesSince(hash: ArrayBuffer): Promise<FullNodeSetUpdate>;
}
