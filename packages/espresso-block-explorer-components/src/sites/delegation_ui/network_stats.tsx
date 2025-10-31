import Text from '@/components/text/Text';
import { CurrentStakeCard } from './elements/card/current_stake_card';
import { EstimatedAPRCard } from './elements/card/estimated_apr_card';
import { TimeToNextEpochCard } from './elements/card/time_to_epoch_card';
import './network_stats.css';

/**
 * NetworkStats component displays key statistics about the chain.
 */
export const NetworkStats: React.FC = () => {
  return (
    <>
      <h1>
        <Text text="Network Stats" />
      </h1>
      <div className="network-stats-grid">
        <CurrentStakeCard />
        <EstimatedAPRCard />
        <TimeToNextEpochCard />
      </div>
    </>
  );
};
