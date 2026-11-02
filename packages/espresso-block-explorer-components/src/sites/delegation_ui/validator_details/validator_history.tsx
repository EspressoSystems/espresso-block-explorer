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
 * TopDelegatorsTable lists the largest delegators and their share of the
 * validator's stake.
 */
export const TopDelegatorsTable: React.FC<{
  history: ValidatorHistory;
}> = ({ history }) => {
  const formatESP = useESPFormatter();

  if (history.delegatorsEpoch !== null && history.topDelegators.length === 0) {
    return (
      <p className="validator-details-empty">
        <Text
          text={`No delegators in the stake table for epoch ${history.delegatorsEpoch}.`}
        />
      </p>
    );
  }

  const totalStake = history.delegatedTotal;
  const listed = history.topDelegators.reduce((sum, d) => sum + d.amount, 0);
  const others = Math.max(0, totalStake - listed);
  const otherCount = Math.max(
    0,
    history.delegatorCount - history.topDelegators.length,
  );

  const rows = [
    ...history.topDelegators.map((d) => ({
      key: d.address,
      label: shortAddress(d.address),
      isAddress: true,
      amount: d.amount,
    })),
    ...(otherCount > 0
      ? [
          {
            key: 'others',
            label: `${otherCount.toLocaleString()} others`,
            isAddress: false,
            amount: others,
          },
        ]
      : []),
  ];

  return (
    <>
      <table className="validator-details-table">
        <thead>
          <tr>
            <th>
              <Text text="Delegator" />
            </th>
            <th className="end">
              <Text text="Amount" />
            </th>
            <th>
              <Text text="Share of stake" />
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            const share = totalStake > 0 ? row.amount / totalStake : 0;
            return (
              <tr key={row.key}>
                <td className={row.isAddress ? 'address' : 'muted'}>
                  {row.label}
                </td>
                <td className="end">{formatESP(row.amount)}</td>
                <td>
                  <span className="share-bar">
                    <span style={{ width: `${Math.max(1, share * 100)}%` }} />
                  </span>
                  <span className="share-value">{percent(share)}</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {history.delegatorsEpoch !== null && (
        <p className="validator-details-table-note">
          <Text
            text={`Delegators in the stake table for epoch ${history.delegatorsEpoch}.`}
          />
        </p>
      )}
    </>
  );
};

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
            : nothingYet
      }
    />
  </p>
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
