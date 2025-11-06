import Text from '@/components/text/Text';
import { CurrentlyStaked } from './currently_staked';
import { EpochEndsIn } from './epoch_ends_in';
import { EstimatedAPR } from './estimated_apr';
import './network_stats.css';

/**
 * NetworkStats component displays key statistics about the chain.
 */
export const NetworkStats: React.FC = () => {
  return (
    <div className="network-stats">
      <h1>
        <Text text="ESP Delegation" />
      </h1>
      <div className="network-stats-grid">
        <CurrentlyStaked />
        <EstimatedAPR />
        <EpochEndsIn />
      </div>
    </div>
  );
};
