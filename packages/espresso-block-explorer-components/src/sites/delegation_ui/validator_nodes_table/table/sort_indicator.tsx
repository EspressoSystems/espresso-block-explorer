import ChevronDown from '@/components/visual/icons/sharp_line/chevron_down';
import VerticalScroll from '@/components/visual/icons/sharp_line/vertical_scroll';
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
