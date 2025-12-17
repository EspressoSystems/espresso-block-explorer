import { CurrentNumberFormatters } from '@/components/contexts';
import { addClassToClassName } from '@/components/higher_order';
import NumberText from '@/components/text/number_text';
import Text from '@/components/text/text';
import TimeLeftText from '@/components/text/time_left_text';
import { filterIterable } from '@/functional/functional';
import { ActiveValidatorsContext } from '@/sites/delegation_ui/contexts/active_validators_context';
import React from 'react';
import { MoreInfoElement } from './elements/tooltip/more_info';
import './epoch_ends_in.css';
import { NetworkStatValue } from './network_stat_value';

/**
 * EpochEndsIn displays the current epoch number and the estimated time
 * remaining until the end of the current epoch.
 */
export const EpochEndsIn: React.FC = () => {
  return (
    <NetworkStatValue>
      <h2>
        <Text text="Epoch" />
        &nbsp;
        <CurrentEpochWrapper className="accent">
          <CurrentEpochNumber />
        </CurrentEpochWrapper>
        &nbsp;
        <Text text="ends in" />
        <MoreInfoElement>
          <p>
            <Text text="The estimated amount of time remaining until the start of the next epoch, which will determine the next set of active nodes." />
          </p>
        </MoreInfoElement>
      </h2>
      <span className="epoch-countdown">
        <EpochEndsInCountDown />
      </span>
    </NetworkStatValue>
  );
};

interface CurrentEpochWrapperProps extends React.PropsWithChildren {
  className?: string;
}

/**
 * CurrentEpochWrapper wraps the current epoch number with additional
 * information in a tooltip.
 */
const CurrentEpochWrapper: React.FC<CurrentEpochWrapperProps> = ({
  className,
  children,
}) => {
  const activeValidators = React.useContext(ActiveValidatorsContext);
  const numberFormatters = React.useContext(CurrentNumberFormatters);

  const blocksPerEpoch = !activeValidators
    ? null
    : activeValidators.espressoBlock.blocksPerEpoch;

  const titleParts = [
    !activeValidators
      ? null
      : `Block: ${numberFormatters.default.format(activeValidators.espressoBlock.block)}`,
    !blocksPerEpoch
      ? null
      : `Blocks per Epoch: ${numberFormatters.default.format(blocksPerEpoch)}`,
    !blocksPerEpoch || !activeValidators
      ? null
      : `Blocks Remaining: ${numberFormatters.default.format(blocksPerEpoch - (activeValidators.espressoBlock.block % blocksPerEpoch))}`,
  ];

  const titleContent = Array.from(
    filterIterable(titleParts, (part) => part !== null),
  ).join('\n');

  return (
    <span
      className={addClassToClassName(className, 'epoch-number')}
      title={titleContent}
    >
      {children}
    </span>
  );
};

/**
 * CurrentEpochNumber displays the current epoch number.
 */
const CurrentEpochNumber: React.FC = () => {
  const activeValidators = React.useContext(ActiveValidatorsContext);

  if (!activeValidators || !activeValidators) {
    return <Text text="-" />;
  }

  return <NumberText number={activeValidators.espressoBlock.epoch} />;
};

/**
 * EpochEndsInCountDown displays the estimated time remaining until the end
 * of the current epoch.
 */
const EpochEndsInCountDown: React.FC = () => {
  const activeValidators = React.useContext(ActiveValidatorsContext);

  if (!activeValidators) {
    return <Text text="-" />;
  }

  const epochAndBlock = activeValidators.espressoBlock;
  const block = epochAndBlock.block;
  const blocksPerEpoch = epochAndBlock.blocksPerEpoch;
  const blockInEpoch = block % blocksPerEpoch;
  const blocksLeft = blocksPerEpoch - blockInEpoch;

  const timeLeft = Number(blocksLeft) * 6 * 1000;
  return <TimeLeftText durationInMilliseconds={timeLeft} />;
};
