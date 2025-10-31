import NumberText from '@/components/text/NumberText';
import Text from '@/components/text/Text';
import TimeLeftText from '@/components/text/TimeLeftText';
import React from 'react';
import { ActiveValidatorsContext } from 'sites/delegation_ui/contexts/active_validators_context';
import { CardContentValue } from './card_content_value';
import { CardValue } from './card_value';

/**
 * TimeToNextEpochCard displays the time remaining until the next epoch ends.
 * It calculates the time left based on the current block and epoch information
 * from the active validators context, and is an estimate.
 */
export const TimeToNextEpochCard: React.FC = () => {
  const activeValidators = React.useContext(ActiveValidatorsContext);
  if (activeValidators === null || activeValidators === undefined) {
    return (
      <CardValue className="time-to-next-epoch-card">
        <h2>
          <Text text="Epoch" />
          &nbsp;
          <span className="accent">
            <Text text="-" />
          </span>
          &nbsp;
          <Text text="ends in" />
        </h2>
        <CardContentValue>
          <Text text="-" />
        </CardContentValue>
      </CardValue>
    );
  }

  const epoch = activeValidators.espressoBlock.epoch;
  const block = activeValidators.espressoBlock.block;
  const blocksPerEpoch = block / epoch;
  const blockInEpoch = block % blocksPerEpoch;
  const blocksLeft = blocksPerEpoch - blockInEpoch;

  const timeLeft = Number(blocksLeft) * 6 * 1000;

  return (
    <CardValue className="time-to-next-epoch-card">
      <h2>
        <Text text="Epoch" />
        &nbsp;
        <span className="accent">
          <NumberText number={activeValidators?.espressoBlock.epoch ?? 0n} />
        </span>
        &nbsp;
        <Text text="ends in" />
      </h2>
      <CardContentValue>
        <TimeLeftText durationInMilliseconds={timeLeft} />
      </CardContentValue>
    </CardValue>
  );
};
