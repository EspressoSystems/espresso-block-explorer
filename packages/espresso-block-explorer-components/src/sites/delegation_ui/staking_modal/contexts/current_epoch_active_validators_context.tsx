import { PromiseResolver } from '@/components/data';
import { DataContext } from '@/contexts/data_provider';
import { HotShotQueryServiceAPIContext } from '@/contexts/hot_shot_query_service_api_context';
import { neverPromise } from '@/functional/functional_async';
import { ActiveValidators } from '@/service/hotshot_query_service/node/active_validators';
import { default as React } from 'react';
import { EspressoCurrentEpochContext } from '../../contexts/espresso_current_epoch_context';

export const CurrentEpochActiveValidatorsContext =
  React.createContext<null | ActiveValidators>(null);

export const ProvideCurrentCurrentEpochActiveValidators: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const hotShotQueryService = React.useContext(HotShotQueryServiceAPIContext);
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
