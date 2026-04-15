import { PromiseResolver } from '@/components/data/async_data';
import {
  DataTableState,
  DataTableStateContext,
} from '@/components/data/data_table/data_table';
import { SortDirection } from '@/components/data/types';
import { default as React } from 'react';
import { BlockSummaryColumn } from '../block_summary_data_table/block_summary_data_loader';

export interface RollUpSummary {
  namespace: number;
  transactions: number;
}

export interface RollUpsSummaryDataTableState extends DataTableState<BlockSummaryColumn> {}

const LoadRollUpsSummaryDataTableData: React.FC<React.PropsWithChildren> = (
  props,
) => {
  // Need to retrieve the actual data source

  return (
    <PromiseResolver promise={Promise.resolve([])}>
      {props.children}
    </PromiseResolver>
  );
};

export interface RollUpsSummaryLoaderProps {
  children: React.ReactNode | React.ReactNode[];
}

export const RollUpsSummaryLoader: React.FC<RollUpsSummaryLoaderProps> = (
  props,
) => {
  // Create the Data Table State
  const initialState = React.useMemo(
    (): RollUpsSummaryDataTableState => ({
      sortColumn: BlockSummaryColumn.height,
      sortDir: SortDirection.desc,
    }),
    [],
  );

  return (
    <DataTableStateContext.Provider value={initialState}>
      {React.createElement(LoadRollUpsSummaryDataTableData, props)}
    </DataTableStateContext.Provider>
  );
};
