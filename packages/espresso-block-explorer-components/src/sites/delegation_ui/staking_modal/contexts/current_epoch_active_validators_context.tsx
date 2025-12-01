import { DataContext } from '@/components/contexts/DataProvider';
import { PromiseResolver } from '@/components/data';
import { neverPromise } from '@/functional/functional_async';
import { ActiveValidators } from '@/service/hotshot_query_service/cappuccino/node/active_validators';
import { CappuccinoHotShotQueryServiceAPIContext } from 'pages';
import React from 'react';
import { EspressoCurrentEpochContext } from '../../contexts/espresso_current_epoch_context';

export const CurrentEpochActiveValidatorsContext =
  React.createContext<null | ActiveValidators>(null);

export const ProvideCurrentCurrentEpochActiveValidators: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const hotShotQueryService = React.useContext(
    CappuccinoHotShotQueryServiceAPIContext,
  );
  const epoch = Number(React.useContext(EspressoCurrentEpochContext));

  const promise = React.useMemo(
    () =>
      !hotShotQueryService || !epoch
        ? neverPromise
        : hotShotQueryService.node.getValidatorsAtEpoch(epoch),

    [hotShotQueryService, epoch],
  );

  return (
    <PromiseResolver promise={promise}>
      <TransformDataToCurrentEpochActiveValidators>
        {children}
      </TransformDataToCurrentEpochActiveValidators>
    </PromiseResolver>
  );
};

const TransformDataToCurrentEpochActiveValidators: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const data = (React.useContext(DataContext) ??
    null) as null | ActiveValidators;

  return (
    <CurrentEpochActiveValidatorsContext.Provider value={data}>
      {children}
    </CurrentEpochActiveValidatorsContext.Provider>
  );
};
