import { Text } from '@/components/text';
import { CurrentLocale } from '@/contexts/locale_provider';
import { default as React } from 'react';
import { ActivityEntry, ValidatorHistory } from './sample_history';
import './validator_history.css';

function useESPFormatter(): (value: number) => string {
  const locale = React.useContext(CurrentLocale);
  const formatter = React.useMemo(
    () =>
      new Intl.NumberFormat(locale, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }),
    [locale],
  );
  return (value: number) => `ESP ${formatter.format(value)}`;
}

function useDateFormatter(): Intl.DateTimeFormat {
  const locale = React.useContext(CurrentLocale);
  return React.useMemo(
    () =>
      new Intl.DateTimeFormat(locale, {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
    [locale],
  );
}

function shortAddress(address: `0x${string}`): string {
  return `${address.slice(0, 6)}…${address.slice(-4)}`;
}

function percent(value: number): string {
  return `${(value * 100).toFixed(2)}%`;
}

/**
 * delegatorsNote explains the validator's number of delegators where it
 * isn't simply the count from the stake table: why it is unknown, or where
 * it comes from for a validator outside the active set. It is null when
 * there is nothing to add.
 */
export function delegatorsNote(history: ValidatorHistory): null | string {
  switch (history.delegatorsUnknown) {
    case 'loading':
      return 'Loading delegators…';
    case 'error':
      return "Delegators couldn't be loaded right now.";
    case 'inactive': {
      const epoch =
        history.delegatorsEpoch === null
          ? ''
          : ` for epoch ${history.delegatorsEpoch}`;
      return history.delegatorCount === null
        ? `This validator isn't in the active set${epoch}, so its delegators aren't known.`
        : `This validator isn't in the active set${epoch}. These are the wallets with stake in it, from its history.`;
    }
    default:
      return null;
  }
}

const ActivityKindChip: React.FC<{ entry: ActivityEntry }> = ({ entry }) =>
  entry.kind === 'delegate' ? (
    <span className="bchip active">
      <Text text="Delegate" />
    </span>
  ) : (
    <span className="bchip validator-details-undelegate-chip">
      <Text text="Undelegate" />
    </span>
  );

/**
 * HistoryEmpty explains why a history section has nothing to show.
 */
export const HistoryEmpty: React.FC<{
  history: ValidatorHistory;
  nothingYet: string;
}> = ({ history, nothingYet }) => (
  <p className="validator-details-empty">
    <Text
      text={
        history.status === 'error'
          ? "Validator history couldn't be loaded right now."
          : history.status === 'missing'
            ? 'No history for this validator yet.'
            : history.status === 'unavailable'
              ? "Validator history isn't available on this network."
              : nothingYet
      }
    />
  </p>
);

/**
 * HistoryLoading stands in for a history section while the validator's
 * history file is loading.
 */
export const HistoryLoading: React.FC<{ height?: number }> = ({
  height = 120,
}) => (
  <div
    className="validator-details-history-loading"
    role="status"
    aria-label="Loading validator history"
    style={{ height }}
  />
);

/**
 * TxLink links a transaction hash to the L1 block explorer when one is
 * known.
 */
const TxLink: React.FC<{
  history: ValidatorHistory;
  hash: null | `0x${string}`;
}> = ({ history, hash }) => {
  if (!hash) {
    return <Text text="-" />;
  }
  if (!history.txExplorerURL) {
    return <Text text={shortAddress(hash)} />;
  }
  return (
    <a
      href={`${history.txExplorerURL}${hash}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {shortAddress(hash)}
    </a>
  );
};

/**
 * ValidatorActivityTable lists recent delegations and undelegations.
 */
export const ValidatorActivityTable: React.FC<{
  history: ValidatorHistory;
  limit?: number;
  compact?: boolean;
}> = ({ history, limit, compact }) => {
  const formatESP = useESPFormatter();
  const formatDate = useDateFormatter();
  const entries = history.activity.slice(0, limit);

  if (entries.length === 0) {
    return <HistoryEmpty history={history} nothingYet="No delegations yet." />;
  }

  return (
    <table className={`validator-details-table${compact ? ' compact' : ''}`}>
      {!compact && (
        <thead>
          <tr>
            <th>
              <Text text="Date" />
            </th>
            <th>
              <Text text="Event" />
            </th>
            <th>
              <Text text="Delegator" />
            </th>
            <th className="end">
              <Text text="Amount" />
            </th>
            <th className="end">
              <Text text="Transaction" />
            </th>
          </tr>
        </thead>
      )}
      <tbody>
        {entries.map((entry, i) => (
          <tr key={entry.txHash ? `${entry.txHash}-${i}` : i}>
            <td>{formatDate.format(entry.date)}</td>
            <td>
              <ActivityKindChip entry={entry} />
            </td>
            <td className="address">{shortAddress(entry.delegator)}</td>
            <td
              className={`end${entry.kind === 'undelegate' ? ' negative' : ''}`}
            >
              {entry.kind === 'delegate' ? '+' : '−'}
              {formatESP(entry.amount)}
            </td>
            {!compact && (
              <td className="end">
                <TxLink history={history} hash={entry.txHash} />
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

/**
 * CommissionHistoryTable lists the validator's commission changes.
 */
export const CommissionHistoryTable: React.FC<{
  history: ValidatorHistory;
}> = ({ history }) => {
  const formatDate = useDateFormatter();

  if (history.commissionChanges.length === 0) {
    return (
      <HistoryEmpty history={history} nothingYet="No commission changes yet." />
    );
  }

  return (
    <table className="validator-details-table">
      <thead>
        <tr>
          <th>
            <Text text="Date" />
          </th>
          <th>
            <Text text="Change" />
          </th>
          <th className="end">
            <Text text="Rate" />
          </th>
          <th className="end">
            <Text text="Transaction" />
          </th>
        </tr>
      </thead>
      <tbody>
        {history.commissionChanges.map((change, i) => (
          <tr key={change.txHash ? `${change.txHash}-${i}` : i}>
            <td>{formatDate.format(change.date)}</td>
            <td>
              <Text
                text={
                  change.from === null
                    ? 'Registered'
                    : change.to < change.from
                      ? 'Commission decreased'
                      : 'Commission increased'
                }
              />
            </td>
            <td className="end">
              {change.from !== null && (
                <span className="muted">{percent(change.from)} → </span>
              )}
              {percent(change.to)}
            </td>
            <td className="end">
              <TxLink history={history} hash={change.txHash} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
