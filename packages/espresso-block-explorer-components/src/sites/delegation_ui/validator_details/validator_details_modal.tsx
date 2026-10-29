import { lastEpochMissedRate } from './reliability';
import { RainbowKitAccountAddressContext } from '@/components/rainbowkit';
import { MoneyText, PercentageText, Text } from '@/components/text';
import { Close, LinkShare2 } from '@/components/visual/icons';
import { MonetaryValue } from '@/models/block_explorer';
import { default as React } from 'react';
import { NodeAddressContext } from '../contexts/node_address_context';
import {
  validatorDetailsPageHref,
  ValidatorDetailsLinksContext,
  ValidatorDetailsModalContext,
  ValidatorDetailsModalControls,
} from '../contexts/validator_details_context';
import { ProvideValidatorNodeContext } from '../contexts/validator_node_context';
import { SegmentedButton } from '../elements/buttons/segmented_button';
import { InAppLink } from '../elements/link/in_app_link';
import { ValidatorImage24x24 } from '../elements/validator/validator_image';
import { StakeHistoryChart } from './charts';
import {
  ProvideValidatorHistory,
  useValidatorFacts,
  ValidatorHistoryContext,
} from './validator_details_contexts';
import { ValidatorHistorySources } from './sample_history';
import { ReliabilityOverview } from './reliability_view';
import './validator_details_modal.css';
import { HistoryEmpty, ValidatorActivityTable } from './validator_history';
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

/**
 * EnableValidatorDetailsLinks makes validator names within its children link
 * to the validator details page.
 */
export const EnableValidatorDetailsLinks: React.FC<React.PropsWithChildren> = ({
  children,
}) => (
  <ValidatorDetailsLinksContext.Provider value={true}>
    {children}
  </ValidatorDetailsLinksContext.Provider>
);

/**
 * ProvideValidatorDetailsModal provides the ValidatorDetailsModalContext and
 * renders the modal itself. It must be rendered inside of the staking modal's
 * ProvideDialogModalControls so the modal can hand off to it.
 */
export const ProvideValidatorDetailsModal: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const ref = React.useRef<HTMLDialogElement>(null);
  const [address, setAddress] = React.useState<null | `0x${string}`>(null);

  const controls = React.useMemo<ValidatorDetailsModalControls>(
    () => ({
      open: (nextAddress) => {
        setAddress(nextAddress);
        if (ref.current && !ref.current.open) {
          ref.current.showModal?.();
        }
      },
      close: () => {
        ref.current?.close?.();
      },
    }),
    [],
  );

  return (
    <ValidatorDetailsModalContext.Provider value={controls}>
      {children}
      <dialog
        ref={ref}
        className="validator-details-modal"
        aria-labelledby="validator-details-modal-title"
        onClose={() => setAddress(null)}
        onClick={(event) => {
          // Clicking the backdrop targets the dialog element itself.
          if (event.target === event.currentTarget) {
            controls.close();
          }
        }}
      >
        {address && (
          <NodeAddressContext.Provider value={address}>
            <ProvideValidatorNodeContext>
              <ProvideValidatorHistory>
                <ValidatorDetailsModalContent />
              </ProvideValidatorHistory>
            </ProvideValidatorNodeContext>
          </NodeAddressContext.Provider>
        )}
      </dialog>
    </ValidatorDetailsModalContext.Provider>
  );
};

const OverviewItem: React.FC<{
  label: string;
  highlight?: boolean;
  children: React.ReactNode;
}> = ({ label, highlight, children }) => (
  <div className={highlight ? 'highlight' : undefined}>
    <span>
      <Text text={label} />
    </span>
    <span className="value">{children}</span>
  </div>
);

const Dash: React.FC = () => <Text text="-" />;

const ModalOverview: React.FC = () => {
  const facts = useValidatorFacts();
  const history = React.useContext(ValidatorHistoryContext);
  const estimatedAPR =
    history?.delegatorAPR ?? facts.estimatedAPRAfterCommission;
  const missedSlotRate = history ? lastEpochMissedRate(history.epochs) : null;
  const account = React.useContext(RainbowKitAccountAddressContext);

  return (
    <div className="validator-details-modal-overview">
      <OverviewItem label="Validator stake">
        <MoneyText money={MonetaryValue.ESP(facts.stake)} />
      </OverviewItem>
      <OverviewItem label="Share of network">
        {facts.stakeShare === null ? (
          <Dash />
        ) : (
          <PercentageText percentage={facts.stakeShare} />
        )}
      </OverviewItem>
      <OverviewItem label="Commission">
        <PercentageText percentage={facts.commission} />
      </OverviewItem>
      <OverviewItem label="Est. APR after commission">
        {estimatedAPR === null ? (
          <Dash />
        ) : (
          <PercentageText percentage={estimatedAPR} />
        )}
      </OverviewItem>
      <OverviewItem label="Missed slots (last epoch)">
        {missedSlotRate === null ? (
          <Dash />
        ) : (
          <PercentageText percentage={missedSlotRate} />
        )}
      </OverviewItem>
      <OverviewItem label="Vote participation (last epoch)">
        {history?.lastEpochVote ? (
          <PercentageText percentage={history.lastEpochVote.rate} />
        ) : (
          <Dash />
        )}
      </OverviewItem>
      {account && (
        <>
          <OverviewItem label="My delegation" highlight>
            <MoneyText money={MonetaryValue.ESP(facts.myDelegation ?? 0n)} />
          </OverviewItem>
          <OverviewItem label="Undelegating" highlight>
            <MoneyText
              money={MonetaryValue.ESP(facts.myPendingUndelegation ?? 0n)}
            />
            <UndelegationNote />
          </OverviewItem>
        </>
      )}
    </div>
  );
};

enum HistoryTab {
  stake = 'stake',
  reliability = 'reliability',
  activity = 'activity',
}

const HISTORY_TAB_SOURCE: Record<HistoryTab, keyof ValidatorHistorySources> = {
  [HistoryTab.stake]: 'stake',
  [HistoryTab.reliability]: 'epochs',
  [HistoryTab.activity]: 'activity',
};

const ModalHistory: React.FC = () => {
  const history = React.useContext(ValidatorHistoryContext);
  const [tab, setTab] = React.useState(HistoryTab.stake);

  if (!history) {
    return null;
  }

  return (
    <div className="validator-details-modal-history">
      <div className="head">
        <div className="title">
          <h2>
            <Text text="History" />
          </h2>
          {history.sources[HISTORY_TAB_SOURCE[tab]] === 'sample' && (
            <SampleDataChip />
          )}
        </div>
        <SegmentedButton<HistoryTab>
          selected={tab}
          onSelectionChange={setTab}
          segments={[
            { value: HistoryTab.stake, label: <Text text="Stake" /> },
            {
              value: HistoryTab.reliability,
              label: <Text text="Reliability" />,
            },
            { value: HistoryTab.activity, label: <Text text="Activity" /> },
          ]}
        />
      </div>
      <div className="panel">
        {tab === HistoryTab.stake && (
          <>
            <h3>
              <Text text="Total stake, 90 days" />
            </h3>
            {history.stake.length > 1 ? (
              <StakeHistoryChart points={history.stake} height={170} />
            ) : (
              <HistoryEmpty
                history={history}
                nothingYet="No stake changes yet."
              />
            )}
          </>
        )}
        {tab === HistoryTab.reliability &&
          (history.epochs.length > 0 ? (
            <ReliabilityOverview history={history} compact />
          ) : (
            <HistoryEmpty history={history} nothingYet="No epoch data yet." />
          ))}
        {tab === HistoryTab.activity && (
          <ValidatorActivityTable history={history} limit={6} compact />
        )}
      </div>
    </div>
  );
};

/**
 * ValidatorDetailsModalContent is the body of the validator details modal.
 */
const ValidatorDetailsModalContent: React.FC = () => {
  const facts = useValidatorFacts();
  const history = React.useContext(ValidatorHistoryContext);
  const controls = React.useContext(ValidatorDetailsModalContext);
  const close = () => controls?.close();
  const name = facts.name ?? 'Unnamed validator';

  return (
    <div className="validator-details-modal-frame">
      <div className="validator-details-modal-header">
        <span />
        <h1 id="validator-details-modal-title">
          <span className="accent">
            <Text text="Validator /" />
          </span>
          <Text text={name} />
        </h1>
        <button
          className="validator-details-modal-close"
          aria-label="Close"
          onClick={close}
        >
          <Close />
        </button>
      </div>

      <div className="validator-details-modal-body">
        <div className="validator-details-modal-summary">
          <div className="identity">
            <div className="name-group">
              <ValidatorImage24x24 />
              <span className="name">
                <Text text={name} />
              </span>
              <ValidatorAddress className="address" />
            </div>
            <ValidatorWebsiteLink className="website" />
            <div className="chips">
              <ValidatorStatusChip />
              <ValidatorRankChip />
            </div>
          </div>
          <div className="about">
            <p className={facts.description ? undefined : 'empty'}>
              <Text
                text={
                  facts.description ??
                  'This validator has not added a description yet.'
                }
              />
            </p>
            {history?.nodeVersion && (
              <p className="note">
                <Text text={`Node ${history.nodeVersion}`} />
                <NodeVersionChip />
              </p>
            )}
          </div>
        </div>

        <CommissionWarning className="validator-details-modal-warning" />
        <ModalOverview />
        <ModalHistory />
        <ExitNotice
          className="validator-details-modal-claim"
          beforeOpen={close}
        />
        <ClaimNotice
          className="validator-details-modal-claim"
          beforeOpen={close}
        />
      </div>

      <div className="validator-details-modal-footer">
        <InAppLink
          className="validator-details-modal-full-link"
          href={validatorDetailsPageHref(facts.address)}
          onClick={close}
        >
          <Text text="Full validator page" />
          <LinkShare2 />
        </InAppLink>
        <ValidatorStakeActions
          className="validator-details-modal-actions"
          beforeOpen={close}
        />
      </div>
    </div>
  );
};
