import { PromiseResolver } from '@/components/data';
import { DataContext } from '@/contexts/data_provider';
import { HotShotQueryServiceAPIContext } from '@/contexts/hot_shot_query_service_api_context';
import { neverPromise } from '@/functional/functional_async';
import { StakeTable } from '@/service/hotshot_query_service/node/stake_table';
import React from 'react';
import { ActiveValidatorsContext } from '../../contexts/active_validators_context';

export const CurrentStakeTableContext = React.createContext<null | StakeTable>(
  null,
);

export const ProvideCurrentStakeTable: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const hotShotQueryService = React.useContext(HotShotQueryServiceAPIContext);
  const activeValidators = React.useContext(ActiveValidatorsContext);

  const promise =
    !hotShotQueryService || !activeValidators
      ? neverPromise
      : hotShotQueryService.node.getStakeTableForEpoch(
          Number(activeValidators.espressoBlock.epoch),
        );

  return (
    <PromiseResolver promise={promise}>
      <TransformDataToCurrentStakeTable>
        {children}
      </TransformDataToCurrentStakeTable>
    </PromiseResolver>
  );
};

const TransformDataToCurrentStakeTable: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const data = (React.useContext(DataContext) ?? null) as null | StakeTable;

  return (
    <CurrentStakeTableContext.Provider value={data}>
      {children}
    </CurrentStakeTableContext.Provider>
  );
};
