import { TextEditingValue } from '@/components/input/text/types';
import { filterIterable, mapIterable } from '@/functional/functional';
import { NodeSetEntry } from '@/service/espresso_staking_api_service/common/node_set_entry';

/**
 * applySearchTermNodeFilter creates a filter function based on the search term.
 */
export function applySearchTermNodeFilter(
  searchTerm: TextEditingValue,
  allValidators: Map<`0x${string}`, NodeSetEntry>,
) {
  if (searchTerm.text.trim() === '') {
    return () => true;
  }

  const regex = buildRegExpFromString(searchTerm.text);
  const filteredSet = new Set(
    mapIterable(
      filterIterable(allValidators, ([, node]) => {
        return (
          node.addressText.indexOf(searchTerm.text.toLowerCase()) >= 0 ||
          regex.test(node.metadata?.content?.name ?? '')
        );
      }),
      ([address]) => address,
    ),
  );

  return (address: `0x${string}`) => {
    return filteredSet.has(address);
  };
}

/**
 * buildRegExpFromString attempts to build a RegExp from the given string.
 * If it fails, it progressively shortens the string until a valid RegExp
 * can be constructed.
 */
function buildRegExpFromString(searchTerm: string): RegExp {
  for (let l = searchTerm.length; l >= 1; l--) {
    try {
      return new RegExp(searchTerm.substring(0, l), 'i');
    } catch {
      // Ignore errors and try again with a shorter string
      // we will eventually arrive at a RegExp that works.
      //
      // This is to handle cases where the user is in the middle of
      // constructing a regexp pattern, but their current construction
      // leads to an invalid RegExp.  Such as '\\'
    }
  }

  // Match Nothing
  return new RegExp('^$', 'i');
}
