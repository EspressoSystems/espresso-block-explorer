import { lastEpochMissedRate } from './reliability';
import { RainbowKitAccountAddressContext } from '@/components/rainbowkit';
import { MoneyText, PercentageText, Text } from '@/components/text';
import { ArrowLeft } from '@/components/visual/icons';
import { CurrentLocale } from '@/contexts/locale_provider';
import { MonetaryValue } from '@/models/block_explorer';
import { default as React } from 'react';
import { DelegationUIBaseHrefContext } from '../contexts/validator_details_context';
import { SegmentedButton } from '../elements/buttons/segmented_button';
import { InAppLink } from '../elements/link/in_app_link';
import { ValidatorImage48x48 } from '../elements/validator/validator_image';
import { StakeHistoryChart } from './charts';
import {
  ESTIMATED_APR_LABEL,
  ESTIMATED_APR_NOTE,
  MEASURED_APR_LABEL,
  MEASURED_APR_NOTE,
} from './participation';
import {
  ProvideValidatorHistory,
  useDelegatorAPR,
  useValidatorFacts,
  ValidatorHistoryContext,
} from './validator_details_contexts';
import './validator_details_page.css';
import { EarningsSection, ReliabilitySection } from './performance_view';
import {
  CommissionHistoryTable,
  delegatorsNote,
  HistoryEmpty,
  HistoryLoading,
  ValidatorActivityTable,
} from './validator_history';
import {
  SampleDataChip,
  ValidatorAddress,
  ValidatorRankChip,
  ClaimNotice,
  CommissionWarning,
  ExitNotice,
  NodeVersionChip,
  UndelegationNote,
  ValidatorStakeActions,
  ValidatorStatusChip,
  ValidatorWebsiteLink,
} from './validator_summary';

const Dash: React.FC = () => <Text text="-" />;

interface FactProps {
  label: string;
  children: React.ReactNode;
  sample?: boolean;
  /** title explains the fact on hover. */
  title?: string;
}

const Fact: React.FC<FactProps> = ({ label, children, sample, title }) => (
  <div title={title}>
    <dt>
      <Text text={label} />
      {sample && (
        <span className="sample-mark" title="Sample data">
          *
        </span>
      )}
    </dt>
    <dd>{children}</dd>
  </div>
);

/**
 * ValidatorFacts lists the validator's key values in the sidebar.
 */
const ValidatorFactsList: React.FC = () => {
  const facts = useValidatorFacts();
  const locale = React.useContext(CurrentLocale);
  const registeredFormatter = React.useMemo(
    () =>
      new Intl.DateTimeFormat(locale, {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
    [locale],
  );
  const history = React.useContext(ValidatorHistoryContext);
  const apr = useDelegatorAPR();
  // Sample epochs are made up, so they don't get to be a fact.
  const missedSlotRate =
    history?.sources.epochs === 'live'
      ? lastEpochMissedRate(history.epochs)
      : null;
  const delegators = history ? delegatorsNote(history) : null;

  return (
    <dl className="validator-details-facts">
      <Fact label="Commission">
        <PercentageText percentage={facts.commission} />
      </Fact>
      <Fact
        label={apr?.measured ? MEASURED_APR_LABEL : ESTIMATED_APR_LABEL}
        title={apr?.measured ? MEASURED_APR_NOTE : ESTIMATED_APR_NOTE}
      >
        {apr === null ? <Dash /> : <PercentageText percentage={apr.rate} />}
      </Fact>
      <Fact label="Missed slots (last epoch)">
        {missedSlotRate === null ? (
          <Dash />
        ) : (
          <PercentageText percentage={missedSlotRate} />
        )}
      </Fact>
      <Fact label="Vote participation (last epoch)">
        {history?.lastEpochVote ? (
          <PercentageText percentage={history.lastEpochVote.rate} />
        ) : (
          <Dash />
        )}
      </Fact>
      <Fact
        label="Delegators"
        sample={history?.sources.delegators === 'sample'}
        title={delegators ?? undefined}
      >
        {/* Unknown is a dash, never 0: see ValidatorHistory.delegatorCount. */}
        {typeof history?.delegatorCount === 'number' ? (
          <Text text={history.delegatorCount.toLocaleString()} />
        ) : (
          <Dash />
        )}
      </Fact>
      {history?.registeredAt && (
        <Fact label="Registered">
          <Text text={registeredFormatter.format(history.registeredAt)} />
        </Fact>
      )}
      <Fact label="Node version">
        {history?.nodeVersion ? (
          <>
            <Text text={history.nodeVersion} />
            <NodeVersionChip />
          </>
        ) : (
          <Dash />
        )}
      </Fact>
    </dl>
  );
};

/**
 * YourPosition shows the connected wallet's stake with this validator.
 */
const YourPosition: React.FC = () => {
  const account = React.useContext(RainbowKitAccountAddressContext);
  const facts = useValidatorFacts();

  if (!account) {
    return null;
  }

  const delegated = facts.myDelegation ?? 0n;
  const shareOfValidator =
    facts.stake > 0n
      ? Number((delegated * 1_000_000n) / facts.stake) / 1_000_000
      : 0;

  return (
    <div className="bcard validator-details-position">
      <h2>
        <Text text="Your position" />
      </h2>
      <div className="rows">
        <div>
          <span>
            <Text text="Delegated" />
          </span>
          <MoneyText money={MonetaryValue.ESP(delegated)} />
        </div>
        <div>
          <span>
            <Text text="Share of validator" />
          </span>
          <PercentageText percentage={shareOfValidator} />
        </div>
        <div>
          <span>
            <Text text="Undelegating" />
          </span>
          <span className="end">
            <MoneyText
              money={MonetaryValue.ESP(facts.myPendingUndelegation ?? 0n)}
            />
            <UndelegationNote />
          </span>
        </div>
      </div>
    </div>
  );
};

/**
 * ValidatorProfileSidebar is the sticky identity column of the page.
 */
const ValidatorProfileSidebar: React.FC = () => {
  const facts = useValidatorFacts();
  const baseHref = React.useContext(DelegationUIBaseHrefContext);

  return (
    <aside className="validator-details-sidebar">
      <InAppLink className="validator-details-back" href={baseHref}>
        <ArrowLeft />
        <Text text="All validators" />
      </InAppLink>

      <div className="validator-details-identity">
        <ValidatorImage48x48 />
        <div>
          <h1>
            <Text text={facts.name ?? 'Unnamed validator'} />
          </h1>
          <div className="chips">
            <ValidatorStatusChip />
            <ValidatorRankChip />
          </div>
        </div>
      </div>

      <p
        className={`validator-details-about${facts.description ? '' : ' empty'}`}
      >
        <Text
          text={
            facts.description ??
            'This validator has not added a description yet.'
          }
        />
      </p>

      <div className="validator-details-links">
        <ValidatorWebsiteLink className="validator-details-website" />
        <ValidatorAddress className="validator-details-address" />
      </div>

      <CommissionWarning className="validator-details-page-claim" />
      <ExitNotice className="validator-details-page-claim" />
      <ClaimNotice className="validator-details-page-claim" />
      <ValidatorStakeActions className="validator-details-actions" />

      <ValidatorFactsList />
      <YourPosition />
    </aside>
  );
};

type StakeRange = 30 | 90;

/**
 * STAKE_CHART_HEIGHT matches the earnings chart below it, so neither
 * outweighs the other.
 */
const STAKE_CHART_HEIGHT = 180;

/**
 * StakeSection shows total stake over time.
 */
const StakeSection: React.FC = () => {
  const facts = useValidatorFacts();
  const history = React.useContext(ValidatorHistoryContext);
  const [range, setRange] = React.useState<StakeRange>(90);

  const points = history ? history.stake.slice(-range) : [];
  const change =
    points.length > 1 ? points[points.length - 1].stake - points[0].stake : 0;

  return (
    <section
      className="validator-details-section"
      aria-labelledby="validator-details-stake"
    >
      <div className="section-head">
        <div>
          <h2 id="validator-details-stake">
            <Text text="Total stake" />
          </h2>
          <div className="validator-details-total">
            <MoneyText money={MonetaryValue.ESP(facts.stake)} />
            {facts.stakeShare !== null && (
              <small>
                <PercentageText percentage={facts.stakeShare} />
                <Text text=" of network" />
              </small>
            )}
          </div>
          {history && (
            <div className="validator-details-delta">
              <span className={change >= 0 ? 'positive' : 'negative'}>
                {change >= 0 ? '+' : '−'}
                {Math.abs(change).toLocaleString(undefined, {
                  notation: 'compact',
                  maximumFractionDigits: 2,
                })}
              </span>
              <Text text={` over ${range} days`} />
            </div>
          )}
        </div>
        <div className="section-controls">
          {history?.sources.stake === 'sample' && <SampleDataChip />}
          <SegmentedButton<StakeRange>
            selected={range}
            onSelectionChange={setRange}
            segments={[
              { value: 30, label: <Text text="30D" /> },
              { value: 90, label: <Text text="90D" /> },
            ]}
          />
        </div>
      </div>

      {!history ? (
        <HistoryLoading height={STAKE_CHART_HEIGHT} />
      ) : points.length > 1 ? (
        <StakeHistoryChart points={points} height={STAKE_CHART_HEIGHT} />
      ) : (
        <HistoryEmpty history={history} nothingYet="No stake changes yet." />
      )}
    </section>
  );
};

enum InfoTab {
  activity = 'activity',
  commission = 'commission',
}

/**
 * ValidatorInfoSection holds the tabbed tables of the validator's
 * delegation activity and commission history.
 */
const ValidatorInfoSection: React.FC = () => {
  const history = React.useContext(ValidatorHistoryContext);
  const [tab, setTab] = React.useState(InfoTab.activity);

  return (
    <section
      className="validator-details-section"
      aria-labelledby="validator-details-info"
    >
      <div className="section-head">
        <h2 id="validator-details-info">
          <Text text="Validator info" />
        </h2>
        <div className="section-controls">
          {history?.sources[tab] === 'sample' && <SampleDataChip />}
          <SegmentedButton<InfoTab>
            selected={tab}
            onSelectionChange={setTab}
            segments={[
              { value: InfoTab.activity, label: <Text text="Activity" /> },
              {
                value: InfoTab.commission,
                label: <Text text="Commission" />,
              },
            ]}
          />
        </div>
      </div>
      {!history ? (
        <HistoryLoading />
      ) : (
        <div className="validator-details-table-scroll">
          {tab === InfoTab.activity && (
            <ValidatorActivityTable history={history} />
          )}
          {tab === InfoTab.commission && (
            <CommissionHistoryTable history={history} />
          )}
        </div>
      )}
    </section>
  );
};

/**
 * ValidatorDetailsPage is the full page view of a single validator. It
 * expects the validator to be provided by ValidatorNodeContext and
 * NodeAddressContext.
 */
export const ValidatorDetailsPage: React.FC = () => {
  return (
    <ProvideValidatorHistory>
      <div className="validator-details-page">
        <ValidatorProfileSidebar />
        <div className="validator-details-content">
          <StakeSection />
          <EarningsSection />
          <ReliabilitySection />
          <ValidatorInfoSection />
        </div>
      </div>
    </ProvideValidatorHistory>
  );
};
