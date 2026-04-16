import { DataContext } from '@/contexts/data_provider';
import {
  ExplorerGenesisOverviewContext,
  ExplorerSummaryContext,
} from '@/contexts/explorer_api_contexts';
import { default as React } from 'react';

export const ExplorerOverviewLoader: React.FC<React.PropsWithChildren> = (
  props,
) => {
  const data = React.useContext(ExplorerSummaryContext);
  const genesisOverview = data?.genesisOverview ?? null;

  return (
    <DataContext.Provider value={genesisOverview}>
      <ExplorerGenesisOverviewContext.Provider value={genesisOverview}>
        {props.children}
      </ExplorerGenesisOverviewContext.Provider>
    </DataContext.Provider>
  );
};
