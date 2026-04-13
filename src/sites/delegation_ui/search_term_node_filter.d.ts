import { TextEditingValue } from '../../../../../../../../../../src/components/input/text/types';
import { NodeSetEntry } from '../../../../../../../../../../src/service/espresso_staking_api_service/common/node_set_entry';
/**
 * applySearchTermNodeFilter creates a filter function based on the search term.
 */
export declare function applySearchTermNodeFilter(searchTerm: TextEditingValue, allValidators: Map<`0x${string}`, NodeSetEntry>): (address: `0x${string}`) => boolean;
