import { PercentageText, Text } from '@/components/text';
import { default as React } from 'react';
import { ActiveValidatorsContext } from './contexts/active_validators_context';
import { MoreInfoElement } from './elements/tooltip/more_info';
import { NetworkStatValue } from './network_stat_value';

/**
 * EstimatedAPRCard displays the estimated annual percentage rate (APR).
 * The APR is currently hardcoded to 3.5%.
 */
export const EstimatedAPR: React.FC = () => {
  const activeNodesSnapshot = React.useContext(ActiveValidatorsContext);

  const percentageText = activeNodesSnapshot ? (
    <PercentageText percentage={activeNodesSnapshot.apr.ratio} />
  ) : (
    <Text text="-" />
  );

  return (
    <NetworkStatValue>
      <h2>
        <Text text="Estimated APR" />
        <MoreInfoElement>
          <p>
            <Text text="Informational, and not a guarantee of returns." />
            <br />
            <br />
            <Text text="The estimated yearly return on staked tokens." />
          </p>
        </MoreInfoElement>
      </h2>
      {percentageText}
    </NetworkStatValue>
  );
};
