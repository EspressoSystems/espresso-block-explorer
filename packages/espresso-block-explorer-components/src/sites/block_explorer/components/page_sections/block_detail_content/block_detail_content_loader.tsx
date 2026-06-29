import { PromiseResolver } from '@/components/data/async_data';
import { HotShotQueryServiceAPIContext } from '@/contexts/hot_shot_query_service_api_context';
import { ExplorerGetBlockDetailRequest } from '@/service/hotshot_query_service/explorer/get_block_detail_request';
import { ExplorerGetBlockDetailResponse } from '@/service/hotshot_query_service/explorer/get_block_detail_response';
import { default as React } from 'react';
import './block_detail_content.css';
import { ExplorerBlockDetailContext } from '@/contexts/explorer_api_contexts';
import { DataContext } from '@/contexts/data_provider';

export const BlockNumberContext = React.createContext(0);

/**
 * BlockDetails kicks off the retrieval of the details for the individual
 * Block, and ensures that the data is available for BlockDetailsContent
 */
export const ExplorerBlockDetailsLoader: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const service = React.useContext(HotShotQueryServiceAPIContext);
  const blockID = React.useContext(BlockNumberContext);

  const request = ExplorerGetBlockDetailRequest.height(blockID);
  return (
    <PromiseResolver promise={service.explorer.getBlockDetail(request)}>
      <ExplorerBlockDetailResolver>{children}</ExplorerBlockDetailResolver>
    </PromiseResolver>
  );
};

const ExplorerBlockDetailResolver: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const data = React.useContext(DataContext) as
    | null
    | undefined
    | ExplorerGetBlockDetailResponse;

  const blockDetail = data?.blockDetail ?? null;

  return (
    <ExplorerBlockDetailContext.Provider value={blockDetail}>
      <DataContext.Provider value={blockDetail}>
        {children}
      </DataContext.Provider>
    </ExplorerBlockDetailContext.Provider>
  );
};
