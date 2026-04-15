import { DataContext } from '@/contexts/data_provider';
import { ErrorContext } from '@/contexts/error_provider';
import { ExplorerSummaryContext } from '@/contexts/explorer_api_contexts';
import { ExplorerSummary } from '@/service/hotshot_query_service/explorer/explorer_summary';
import { default as React } from 'react';

export const ExplorerSummaryLoader: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const error = React.useContext(ErrorContext);
  const data = React.useContext(DataContext) as
    | null
    | undefined
    | ExplorerSummary;

  if (error) {
    // TODO: Handle the error state appropriately.
  }

  return (
    <ExplorerSummaryContext.Provider value={data ?? null}>
      {children}
    </ExplorerSummaryContext.Provider>
  );
};
