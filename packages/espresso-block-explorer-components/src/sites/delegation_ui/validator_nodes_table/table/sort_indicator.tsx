import { ChevronDown } from '@/components/visual';
import VerticalScroll from '@/components/visual/icons/feather/vertical-scroll';
import React from 'react';
import {
  TableColumnSortByContext,
  TableSortStateContext,
} from '../common/validator_table_sort_state';

/**
 * SortIndicator is a component that displays the sort indicator for the
 * table header based on the current sort state.
 */
export const SortIndicator: React.FC = () => {
  const { sortBy } = React.useContext(TableSortStateContext);
  const cellType = React.useContext(TableColumnSortByContext);

  if (sortBy === cellType) {
    return <ChevronDown />;
  }

  return <VerticalScroll />;
};
