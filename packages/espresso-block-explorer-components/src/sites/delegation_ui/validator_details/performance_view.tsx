import { Text } from '@/components/text';
import { CurrentLocale } from '@/contexts/locale_provider';
import { default as React } from 'react';
import { ActiveValidatorsContext } from '../contexts/active_validators_context';
import { SegmentedButton } from '../elements/buttons/segmented_button';
import {
  EarningsChart,
  EarningsLegend,
  EpochReliabilityLegend,
  EpochVoteChart,
  EpochVoteLegend,
} from './charts';
import {
  EARNINGS_STATUS_LABEL,
  earningsStatus,
  NOT_VOTING,
  VOTE_STATUS_LABEL,
  voteVerdict,
} from './participation';
import { FALLBACK_VERDICT_EPOCHS, VERDICT_HOURS } from './reliability';
import {
  capitalized,
  joined,
  ReliabilityOverview,
  StatusVerdict,
  useEpochDuration,
} from './reliability_view';
import './performance_view.css';
import { ValidatorHistory } from './sample_history';
import {
  useValidatorFacts,
  ValidatorHistoryContext,
} from './validator_details_contexts';
import { HistoryEmpty } from './validator_history';
import { SampleDataChip } from './validator_summary';

/**
 * CHART_BARS is how many bars the earnings and vote charts draw (about 30
 * days of earnings, and 30 epochs of votes), so both look alike.
 */
const CHART_BARS = 30;

const percent2 = (value: number) => `${(value * 100).toFixed(2)}%`;
const percent0 = (value: number) => `${Math.round(value * 100)}%`;

const PanelFoot: React.FC<React.PropsWithChildren<{ note?: string }>> = ({
  note,
  children,
}) => (
  <div className="validator-details-panel-foot">
    <span className="note">{note && <Text text={note} />}</span>
    {children}
  </div>
);

/**
 * VotingOverview is the voting view: how the validator's vote participation
 * over the last 24 hours compares with the network, and the latest epochs.
 */
const VotingOverview: React.FC<{ history: ValidatorHistory }> = ({
  history,
}) => {
  const duration = useEpochDuration();
  const votes = history.votes.slice(-CHART_BARS);
  if (votes.length === 0) {
    return <HistoryEmpty history={history} nothingYet="No vote data yet." />;
  }

  const recentCount = duration
    ? duration.epochsIn(VERDICT_HOURS, FALLBACK_VERDICT_EPOCHS)
    : FALLBACK_VERDICT_EPOCHS;
  const recentLabel =
    duration && duration.msPerEpoch > 0
      ? `${VERDICT_HOURS} hours`
      : `${recentCount} epochs`;
  const verdict = voteVerdict(history.votes, recentCount);
  const span = (epochs: number) =>
    duration ? duration.span(epochs) : `${epochs} epochs`;
  const last = votes.length - 1;
  const ago = (epochsAgo: number) =>
    epochsAgo === 0
      ? 'latest'
      : duration
        ? duration.ago(epochsAgo)
        : `${epochsAgo} epochs ago`;

  let headline = '';
  let detail = '';
  if (verdict?.kind === 'not-voting') {
    headline = `Not voting for the last ${span(verdict.epochs)}`;
    detail = joined([
      `Under ${percent0(NOT_VOTING)} of eligible blocks per epoch`,
      verdict.lastVoted && `last voted in epoch ${verdict.lastVoted.epoch}`,
      verdict.networkRate !== null &&
        `network average ${percent0(verdict.networkRate)}`,
    ]);
  } else if (verdict) {
    const difference =
      verdict.networkRate === null ? null : verdict.rate - verdict.networkRate;
    headline = `Voted on ${percent0(verdict.rate)} of eligible blocks over the last ${recentLabel}`;
    detail = capitalized(
      joined([
        difference !== null &&
          verdict.networkRate !== null &&
          (Math.abs(difference) < 0.02
            ? `about the network average (${percent0(verdict.networkRate)})`
            : `${Math.round(Math.abs(difference) * 100)} points ${difference > 0 ? 'above' : 'below'} the network average (${percent0(verdict.networkRate)})`),
        verdict.before !== null &&
          `${percent0(verdict.before)} the ${span(recentCount * 6)} before`,
      ]),
    );
  }

  return (
    <div className="validator-details-voting">
      {verdict && (
        <StatusVerdict
          status={verdict.status}
          label={VOTE_STATUS_LABEL[verdict.status]}
          headline={headline}
          detail={detail}
        />
      )}
      <EpochVoteChart
        votes={votes}
        whenFor={(i) => ago(last - i)}
        axisLabelFor={(i) => (duration ? duration.ago(last - i) : null)}
      />
      <PanelFoot note="Share of eligible blocks voted on per epoch">
        <EpochVoteLegend />
      </PanelFoot>
    </div>
  );
};

/**
 * EarningsOverview is the earnings view: the APR delegators actually earned
 * and the rewards per day over the last 30 days, measured by espressonodes.
 */
const EarningsOverview: React.FC<{ history: ValidatorHistory }> = ({
  history,
}) => {
  const facts = useValidatorFacts();
  const activeValidators = React.useContext(ActiveValidatorsContext);
  const locale = React.useContext(CurrentLocale);
  const compact = React.useMemo(
    () =>
      new Intl.NumberFormat(locale, {
        notation: 'compact',
        maximumFractionDigits: 2,
      }),
    [locale],
  );
  const earnings = history.earnings;
  if (!earnings) {
    return (
      <HistoryEmpty history={history} nothingYet="No earnings data yet." />
    );
  }

  const name = facts.name ?? 'Validator';
  const networkAPR = activeValidators?.apr.ratio ?? null;
  const status = earningsStatus(earnings.last7Days, networkAPR);
  const last30 = earnings.last30Days;
  const last7 = earnings.last7Days;
  const periods = earnings.periods.slice(-CHART_BARS);
  const esp = (wei: bigint) => `${compact.format(Number(wei) / 1e18)} ESP`;

  return (
    <div className="validator-details-earnings">
      {last30?.delegatorNetAPR != null && (
        <StatusVerdict
          status={status}
          label={status ? EARNINGS_STATUS_LABEL[status] : undefined}
          headline={`${percent2(last30.delegatorNetAPR)} APR for delegators over the last 30 days`}
          detail={joined([
            last30.grossAPR !== null &&
              `${percent2(last30.grossAPR)} before commission`,
            last7?.delegatorNetAPR != null &&
              `last 7 days ${percent2(last7.delegatorNetAPR)}`,
            networkAPR !== null &&
              `network ${percent2(networkAPR)} before commission`,
          ])}
        />
      )}
      {periods.length > 0 ? (
        <EarningsChart periods={periods} validatorName={name} />
      ) : (
        <HistoryEmpty history={history} nothingYet="No rewards yet." />
      )}
      <p className="validator-details-streak">
        <span>
          <Text text="Lifetime rewards " />
          <b>{esp(earnings.lifetime.total)}</b>
        </span>
        <span>
          <Text text="To delegators " />
          <b>{esp(earnings.lifetime.delegators)}</b>
        </span>
        <span>
          <Text text={`Kept by ${name} `} />
          <b>{esp(earnings.lifetime.validator)}</b>
        </span>
      </p>
      <PanelFoot>
        <EarningsLegend validatorName={name} />
      </PanelFoot>
    </div>
  );
};

enum PerformanceView {
  reliability = 'reliability',
  earnings = 'earnings',
  voting = 'voting',
}

const VIEWS: { value: PerformanceView; label: string }[] = [
  { value: PerformanceView.reliability, label: 'Reliability' },
  { value: PerformanceView.earnings, label: 'Earnings' },
  { value: PerformanceView.voting, label: 'Voting' },
];

/**
 * PerformanceSection cycles between reliability, earnings, and voting in
 * one slot on the page, with tabs (laid out like the details section's) and
 * the left and right arrow keys.
 */
export const PerformanceSection: React.FC = () => {
  const history = React.useContext(ValidatorHistoryContext);
  const [view, setView] = React.useState(PerformanceView.reliability);
  if (!history) {
    return null;
  }

  const step = (by: number) => {
    const index = VIEWS.findIndex((v) => v.value === view);
    setView(VIEWS[(index + by + VIEWS.length) % VIEWS.length].value);
  };
  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      step(event.key === 'ArrowRight' ? 1 : -1);
    }
  };

  return (
    <section
      className="validator-details-section validator-details-performance"
      aria-labelledby="validator-details-performance"
      onKeyDown={onKeyDown}
    >
      <div className="section-head">
        <h2 id="validator-details-performance">
          <Text text="Performance" />
        </h2>
        <div className="section-controls">
          {history.sources.epochs === 'sample' && <SampleDataChip />}
          <SegmentedButton<PerformanceView>
            selected={view}
            onSelectionChange={setView}
            segments={VIEWS.map((v) => ({
              value: v.value,
              label: <Text text={v.label} />,
            }))}
          />
        </div>
      </div>
      <div className="validator-details-performance-panel">
        {view === PerformanceView.reliability &&
          (history.epochs.length > 0 ? (
            <>
              <ReliabilityOverview history={history} />
              <PanelFoot note="Missed leader slots per epoch">
                <EpochReliabilityLegend />
              </PanelFoot>
            </>
          ) : (
            <HistoryEmpty history={history} nothingYet="No epoch data yet." />
          ))}
        {view === PerformanceView.earnings && (
          <EarningsOverview history={history} />
        )}
        {view === PerformanceView.voting && (
          <VotingOverview history={history} />
        )}
      </div>
    </section>
  );
};
