import { HotShotQueryServiceAPIContext } from '@/contexts/hot_shot_query_service_api_context';
import { default as React } from 'react';

const kRefreshMilliseconds = 5000;

/**
 * useNewestBlockHeight returns the newest block's height, refreshed every few
 * seconds, or null until the query service has answered (and if it cannot).
 *
 * The service reports a block count, so the newest block is one below it. The
 * height never moves backwards, as replicas behind a load balancer can lag.
 */
export function useNewestBlockHeight(): null | number {
  const service = React.useContext(HotShotQueryServiceAPIContext);
  const [newest, setNewest] = React.useState<null | number>(null);

  React.useEffect(() => {
    let cancelled = false;
    const refresh = () =>
      service.status.blockHeight().then(
        (numberOfBlocks) => {
          if (!cancelled) {
            setNewest((seen) => Math.max(seen ?? -1, numberOfBlocks - 1));
          }
        },
        () => {}, // keep the last known height
      );

    refresh();
    const interval = setInterval(refresh, kRefreshMilliseconds);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, [service]);

  return newest;
}
