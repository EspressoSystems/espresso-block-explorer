import NumberText from '@/components/text/NumberText';
import Text from '@/components/text/Text';
import TimeLeftText from '@/components/text/TimeLeftText';
import { ActiveValidatorsContext } from '@/sites/delegation_ui/contexts/active_validators_context';
import React from 'react';
import { NetworkStatValue } from './network_stat_value';

export const EpochEndsIn: React.FC = () => {
  const activeValidators = React.useContext(ActiveValidatorsContext);
  if (activeValidators === null || activeValidators === undefined) {
    return (
      <NetworkStatValue>
        <h2>
          <Text text="Epoch" />
          &nbsp;
          <span className="accent">
            <Text text="-" />
          </span>
          &nbsp;
          <Text text="ends in" />
        </h2>
        <Text text="-" />
      </NetworkStatValue>
    );
  }

  const epochAndBlock = activeValidators.espressoBlock;
  const block = epochAndBlock.block;
  const blocksPerEpoch = epochAndBlock.blocksPerEpoch;
  const blockInEpoch = block % blocksPerEpoch;
  const blocksLeft = blocksPerEpoch - blockInEpoch;

  const timeLeft = Number(blocksLeft) * 6 * 1000;

  return (
    <NetworkStatValue>
      <h2>
        <Text text="Epoch" />
        &nbsp;
        <span className="accent">
          <NumberText number={activeValidators?.espressoBlock.epoch ?? 0n} />
        </span>
        &nbsp;
        <Text text="ends in" />
      </h2>
      <TimeLeftText durationInMilliseconds={timeLeft} />
    </NetworkStatValue>
  );
};
