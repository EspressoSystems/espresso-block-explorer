import { Text } from '@/components/text';
import { default as React } from 'react';
import { BlocksPerEpochContext } from '../contexts/blocks_per_epoch_context';
import {
  MillisecondsPerBlockContext,
  MillisecondsPerBlockMeasuredContext,
} from '../contexts/milliseconds_per_block_context';
import { EpochReliabilityGrid, EpochReliabilityLegend } from './charts';
import {
  compareWithNetwork,
  EpochDuration,
  HEADLINE_HOURS,
  NetworkComparison,
  RELIABILITY_STATUS_LABEL,
  ReliabilityStatus,
  STRIP_EPOCHS,
  summarizeWindow,
} from './reliability';
import './reliability_view.css';
import { ValidatorHistory } from './sample_history';
import { ValidatorHistoryContext } from './validator_details_contexts';

/**
 * percent formats a rate with two decimals, showing a tiny non-zero rate as
 * "<0.01%" so it never reads as zero next to a status that says otherwise.
 */
function percent(value: number): string {
  if (value > 0 && value < 0.0001) {
    return '<0.01%';
  }
  return `${(value * 100).toFixed(2)}%`;
}

/**
 * useEpochDuration converts epochs to time. It uses the epoch length from
 * the validator history file, which is there as soon as the file loads, or
 * else the network's blocks per epoch and its measured block time. It is
 * null until one of them is known, since the default block time can be off
 * several times over, which would put the wrong epochs in "the last 24
 * hours".
 */
export function useEpochDuration(): null | EpochDuration {
  const history = React.useContext(ValidatorHistoryContext);
  const blocksPerEpoch = React.useContext(BlocksPerEpochContext);
  const msPerBlock = React.useContext(MillisecondsPerBlockContext);
  const measured = React.useContext(MillisecondsPerBlockMeasuredContext);
  const msPerEpoch =
    history?.msPerEpoch ?? (measured ? Number(blocksPerEpoch) * msPerBlock : 0);
  return React.useMemo(
    () => (msPerEpoch > 0 ? new EpochDuration(msPerEpoch) : null),
    [msPerEpoch],
  );
}

const StatusIcon: React.FC<{ status: ReliabilityStatus }> = ({ status }) => {
  switch (status) {
    case 'clean':
    case 'good':
      return (
        <svg viewBox="0 0 12 12" aria-hidden="true">
          <path d="M2 6.5 4.8 9 10 3" />
        </svg>
      );
    case 'fair':
      return (
        <svg viewBox="0 0 12 12" aria-hidden="true">
          <circle cx="6" cy="6" r="2.5" />
        </svg>
      );
    case 'poor':
      return (
        <svg viewBox="0 0 12 12" aria-hidden="true">
          <path d="M6 2v5M6 9.2v.8" />
        </svg>
      );
  }
};

/**
 * ReliabilityStatusChip labels a status with an icon and text, so it never
 * relies on color alone. Other views reuse the steps with their own labels.
 */
export const ReliabilityStatusChip: React.FC<{
  status: ReliabilityStatus;
  label?: string;
}> = ({ status, label }) => (
  <span className={`validator-details-status ${status}`}>
    <StatusIcon status={status} />
    <Text text={label ?? RELIABILITY_STATUS_LABEL[status]} />
  </span>
);

/**
 * StatusVerdict is a status chip next to a one-line headline and a line of
 * detail.
 */
export const StatusVerdict: React.FC<{
  status: null | ReliabilityStatus;
  label?: string;
  headline: string;
  detail?: string;
}> = ({ status, label, headline, detail }) => (
  <div className="validator-details-verdict">
    {status && <ReliabilityStatusChip status={status} label={label} />}
    <div className="text">
      <Text text={headline} />
      {detail && (
        <small>
          <Text text={detail} />
        </small>
      )}
    </div>
  </div>
);

export const joined = (parts: (null | false | string)[]) =>
  parts.filter((part): part is string => Boolean(part)).join(' · ');

export const capitalized = (text: string) =>
  text.charAt(0).toUpperCase() + text.slice(1);

/**
 * RecentEpochStrip shows the latest epochs as cells, oldest first, with the
 * latest epoch on the right.
 */
const RecentEpochStrip: React.FC<{
  history: ValidatorHistory;
  duration: null | EpochDuration;
  epochs?: number;
}> = ({ history, duration, epochs: count = STRIP_EPOCHS }) => {
  const recent = history.epochs.slice(-count);
  if (recent.length === 0) {
    return null;
  }
  const last = recent.length - 1;
  const middle = Math.floor(last / 2);
  const when = (epochsAgo: number) =>
    epochsAgo === 0
      ? 'latest'
      : duration
        ? duration.ago(epochsAgo)
        : `${epochsAgo} epochs ago`;

  return (
    <div className="validator-details-strip">
      <EpochReliabilityGrid
        epochs={recent}
        columns={recent.length}
        gap={3}
        highlightLast
        whenFor={(i) => when(last - i)}
        networkRates={history.networkMissedRates}
      />
      <div className="axis">
        {duration && last > 0 && (
          <span>
            <Text text={duration.ago(last)} />
          </span>
        )}
        {duration && middle > 0 && (
          <span>
            <Text text={duration.ago(last - middle)} />
          </span>
        )}
        <span className="latest">
          <Text text="Latest" />
        </span>
      </div>
    </div>
  );
};

const NETWORK_COMPARISON: Record<NetworkComparison, string> = {
  above: 'above the network average',
  below: 'below the network average',
  at: 'at the network average',
};

/**
 * ReliabilityHeadline says how many leader slots the validator missed in
 * the past week, and how that compares with the network average.
 */
const ReliabilityHeadline: React.FC<{
  history: ValidatorHistory;
  duration: null | EpochDuration;
}> = ({ history, duration }) => {
  const count = duration
    ? duration.epochsIn(HEADLINE_HOURS, STRIP_EPOCHS)
    : STRIP_EPOCHS;
  const recent = history.epochs.slice(-count);
  const summary = summarizeWindow(recent, history.networkMissedRates);
  const period =
    recent.length >= count && duration && duration.msPerEpoch > 0
      ? 'the past week'
      : duration && duration.msPerEpoch > 0
        ? `the past ${duration.span(recent.length)}`
        : `the last ${recent.length} epochs`;

  const headline =
    summary.missed === 0
      ? `No missed slots in ${period}`
      : `Missed ${summary.missed.toLocaleString()} of ${summary.slots.toLocaleString()} slots in ${period}`;
  const detail = capitalized(
    joined([
      `${percent(summary.rate)} missed`,
      summary.networkRate !== null &&
        `network average ${percent(summary.networkRate)}`,
      summary.networkRate !== null &&
        NETWORK_COMPARISON[
          compareWithNetwork(summary.rate, summary.networkRate)
        ],
    ]),
  );

  return (
    <StatusVerdict
      status={summary.status}
      headline={headline}
      detail={detail}
    />
  );
};

/**
 * ReliabilityOverview is the reliability view: how many slots the
 * validator missed in the past week against the network, then the latest
 * epochs as cells with the latest on the right. The compact form, for the popup, adds
 * the legend.
 */
export const ReliabilityOverview: React.FC<{
  history: ValidatorHistory;
  compact?: boolean;
}> = ({ history, compact }) => {
  const duration = useEpochDuration();

  return (
    <div className="validator-details-reliability">
      <ReliabilityHeadline history={history} duration={duration} />
      <RecentEpochStrip history={history} duration={duration} />
      {compact && <EpochReliabilityLegend />}
    </div>
  );
};
