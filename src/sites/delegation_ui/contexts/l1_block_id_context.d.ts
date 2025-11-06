import { L1BlockID } from '../../../../../../../../../../../src/service/espresso_l1_validator_service/common/l1_block_id';
import { default as React } from 'react';
/**
 * L1BlockIDContext defines a React Context for the current L1 Block ID.
 */
export declare const L1BlockIDContext: React.Context<L1BlockID | null>;
/**
 * RetrieveLatestL1BlockID is a React Component that retrieves
 * the latest L1 Block ID and provides it via the L1BlockIDContext
 * to its children.
 */
export declare const RetrieveLatestL1BlockID: React.FC<React.PropsWithChildren>;
