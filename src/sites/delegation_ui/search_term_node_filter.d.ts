import { TextEditingValue } from '../../../../../../../../../../src/components/input/text/types';
import { NodeSetEntry } from '../../../../../../../../../../src/service/espresso_l1_validator_service/common/node_set_entry';
/**
 * applySearchTermNodeFilter creates a filter function based on the search term.
 */
export declare function applySearchTermNodeFilter(searchTerm: TextEditingValue): (node: NodeSetEntry) => boolean;
