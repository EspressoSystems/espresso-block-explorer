import PercentageText from '@/components/text/percentage_text';
import Text from '@/components/text/text';
import React from 'react';
import { ActiveValidatorsContext } from './contexts/active_validators_context';
import { NetworkStatValue } from './network_stat_value';

/**
 * EstimatedAPRCard displays the estimated annual percentage rate (APR).
 * The APR is currently hardcoded to 3.5%.
 */
export const EstimatedAPR: React.FC = () => {
  const activeNodesSnapshot = React.useContext(ActiveValidatorsContext);

  if (!activeNodesSnapshot) {
    return (
      <NetworkStatValue>
        <h2>
          <Text text="Estimated APR" />
        </h2>
        <Text text="-" />
      </NetworkStatValue>
    );
  }

  return (
    <NetworkStatValue>
      <h2>
        <Text text="Estimated APR" />
      </h2>
      <PercentageText percentage={activeNodesSnapshot.apr.ratio} />
    </NetworkStatValue>
  );
};
