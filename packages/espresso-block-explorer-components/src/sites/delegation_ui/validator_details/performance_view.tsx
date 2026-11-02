import { Text } from '@/components/text';
import { CurrentLocale } from '@/contexts/locale_provider';
import { default as React } from 'react';
import { ActiveValidatorsContext } from '../contexts/active_validators_context';
import {
  EarningsChart,
  EarningsLegend,
  EpochReliabilityLegend,
} from './charts';
import { EARNINGS_STATUS_LABEL, earningsStatus } from './participation';
import { joined, ReliabilityOverview, StatusVerdict } from './reliability_view';
import './performance_view.css';
import { ValidatorHistory } from './sample_history';
import {
  useValidatorFacts,
  ValidatorHistoryContext,
} from './validator_details_contexts';
import { HistoryEmpty } from './validator_history';
import { SampleDataChip } from './validator_summary';

/**
 * CHART_BARS is how many bars the earnings chart draws, about 30 days.
 */
const CHART_BARS = 30;

const percent2 = (value: number) => `${(value * 100).toFixed(2)}%`;

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

/**
 * SectionHead is a section title, with a chip when the section shows sample
 * data.
 */
const SectionHead: React.FC<{
  id: string;
  title: string;
  sample?: boolean;
}> = ({ id, title, sample }) => (
  <div className="section-head">
    <h2 id={id}>
      <Text text={title} />
    </h2>
    {sample && (
      <div className="section-controls">
        <SampleDataChip />
      </div>
    )}
  </div>
);

/**
 * ReliabilitySection shows missed leader slots over the latest epochs.
 */
export const ReliabilitySection: React.FC = () => {
  const history = React.useContext(ValidatorHistoryContext);
  if (!history) {
    return null;
  }

  return (
    <section
      className="validator-details-section"
      aria-labelledby="validator-details-reliability"
    >
      <SectionHead
        id="validator-details-reliability"
        title="Reliability"
        sample={history.sources.epochs === 'sample'}
      />
      {history.epochs.length > 0 ? (
        <>
          <ReliabilityOverview history={history} />
          <PanelFoot note="Missed leader slots per epoch">
            <EpochReliabilityLegend />
          </PanelFoot>
        </>
      ) : (
        <HistoryEmpty history={history} nothingYet="No epoch data yet." />
      )}
    </section>
  );
};

/**
 * EarningsSection shows the rewards the validator generated.
 */
export const EarningsSection: React.FC = () => {
  const history = React.useContext(ValidatorHistoryContext);
  if (!history) {
    return null;
  }

  return (
    <section
      className="validator-details-section"
      aria-labelledby="validator-details-earnings"
    >
      <SectionHead id="validator-details-earnings" title="Earnings" />
      <EarningsOverview history={history} />
    </section>
  );
};
