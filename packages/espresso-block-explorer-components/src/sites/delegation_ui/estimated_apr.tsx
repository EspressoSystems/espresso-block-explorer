import PercentageText from '@/components/text/percentage_text';
import Text from '@/components/text/text';
import { NetworkStatValue } from './network_stat_value';

/**
 * EstimatedAPRCard displays the estimated annual percentage rate (APR).
 * The APR is currently hardcoded to 3.5%.
 */
export const EstimatedAPR: React.FC = () => {
  return (
    <NetworkStatValue>
      <h2>
        <Text text="Estimated APR" />
      </h2>
      <PercentageText percentage={0.035} />
    </NetworkStatValue>
  );
};
