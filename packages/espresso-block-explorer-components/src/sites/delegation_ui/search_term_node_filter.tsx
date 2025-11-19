import { TextEditingValue } from '@/components/input/text/types';
import { NodeSetEntry } from '@/service/espresso_l1_validator_service/common/node_set_entry';

/**
 * applySearchTermNodeFilter creates a filter function based on the search term.
 */
export function applySearchTermNodeFilter(searchTerm: TextEditingValue) {
  if (searchTerm.text.trim() === '') {
    return () => true;
  }

  return (node: NodeSetEntry) => {
    return node.addressText.indexOf(searchTerm.text.toLowerCase()) >= 0;
  };
}
