import { SkeletonContent, WithLoadingShimmer } from '@/components/loading';
import { RainbowKitAccountAddressContext } from '@/components/rainbowkit';
import { NumberText, Text } from '@/components/text';
import {
  Ratio,
  RatioRational,
} from '@/service/espresso_staking_api_service/common/ratio';
import { default as React } from 'react';
import { AllValidatorsContext } from '../contexts/all_validators_context';
import { ConsensusMapContext } from '../contexts/consensus_map_context';
import { FullNodeSetSnapshotContext } from '../contexts/full_node_set_snapshot_context';
import { ProvideDialogModalControls } from '../contexts/modal_context';
import { NodeAddressContext } from '../contexts/node_address_context';
import {
  ProvideValidatorNodeContext,
  ValidatorNodeContext,
} from '../contexts/validator_node_context';
import { LabeledCardValue } from '../elements/card/labeled_card_value';
import { InternalLink } from '../elements/link/link';
import { StakingModal } from '../staking_modal/staking_modal';
import { ValidatorDisplayArea } from '../staking_modal/validator_display_area';
import { ActionsCell } from '../validator_nodes_table/common/cells/actions_cell';
import { EstimatedAPRCell } from '../validator_nodes_table/common/cells/estimated_apr_cell';
import { EstimatedAPRHeadCell } from '../validator_nodes_table/common/cells/estimated_apr_head_cell';
import { FeeCell } from '../validator_nodes_table/common/cells/fee_cell';
import { FeeHeadCell } from '../validator_nodes_table/common/cells/fee_head_cell';
import { MissedSlotsCell } from '../validator_nodes_table/common/cells/missed_slot_cell';
import { MissedSlotsHeadCell } from '../validator_nodes_table/common/cells/missed_slots_head_cell';
import { MyStakeCell } from '../validator_nodes_table/common/cells/my_stake_cell';
import { ParticipationRateCell } from '../validator_nodes_table/common/cells/participation_rate_cell';
import { ParticipationRateHeadCell } from '../validator_nodes_table/common/cells/participation_rate_head_cell';
import { RankCell } from '../validator_nodes_table/common/cells/rank_cell';
import { RankHeadCell } from '../validator_nodes_table/common/cells/rank_head_cell';
import { TotalStakeCell } from '../validator_nodes_table/common/cells/total_stake_cell';
import { TotalStakeHeadCell } from '../validator_nodes_table/common/cells/total_stake_head_cell';
import './validator_detail_content.css';

export interface ValidatorDetailContentProps {
  /**
   * The address of the validator to display, as taken from the URL. It is
   * null when the URL does not carry a well formed address.
   */
  address: null | `0x${string}`;
}

/**
 * ValidatorDetailContent is the main content area of the validator detail
 * page. It shows everything the Delegation UI knows about a single validator,
 * and lets the user delegate to it or manage an existing delegation through
 * the same Staking Modal used by the validator table.
 */
export const ValidatorDetailContent: React.FC<ValidatorDetailContentProps> = ({
  address,
}) => {
  return (
    <ProvideDialogModalControls>
      <StakingModal />
      <section className="delegation-ui-content validator-detail">
        <InternalLink className="validator-detail-back" href="/">
          <Text text="← All Validators" />
        </InternalLink>

        <ValidatorDetailGuard address={address}>
          <ValidatorDetailBody />
        </ValidatorDetailGuard>
      </section>
    </ProvideDialogModalControls>
  );
};

interface ValidatorDetailGuardProps extends React.PropsWithChildren {
  address: null | `0x${string}`;
}

/**
 * ValidatorDetailGuard only renders its children once the full node set has
 * loaded and contains the requested validator. Until then it shows a
 * placeholder of the page, or a message when the address is invalid or not a
 * validator. It provides the validator to its descendants through the same
 * Contexts the validator table rows use.
 */
const ValidatorDetailGuard: React.FC<ValidatorDetailGuardProps> = ({
  address,
  children,
}) => {
  const snapshot = React.useContext(FullNodeSetSnapshotContext);
  const allValidators = React.useContext(AllValidatorsContext);

  if (address === null) {
    return (
      <ValidatorDetailMessage text="No valid validator address was given." />
    );
  }

  if (!snapshot) {
    return <ValidatorDetailPlaceholder />;
  }

  if (!allValidators.has(address)) {
    return (
      <ValidatorDetailMessage text="This address is not a registered validator." />
    );
  }

  return (
    <NodeAddressContext.Provider value={address}>
      <ProvideValidatorNodeContext>{children}</ProvideValidatorNodeContext>
    </NodeAddressContext.Provider>
  );
};

interface ValidatorDetailMessageProps {
  text: string;
}

/**
 * ValidatorDetailMessage displays a single status line in place of the
 * validator details.
 */
const ValidatorDetailMessage: React.FC<ValidatorDetailMessageProps> = ({
  text,
}) => {
  return (
    <p className="validator-detail-message">
      <Text text={text} />
    </p>
  );
};

/**
 * ValidatorDetailBody lays out the sections of the validator detail page.
 */
const ValidatorDetailBody: React.FC = () => {
  return (
    <>
      <div className="validator-detail-header">
        <ValidatorDisplayArea />
        <div className="validator-detail-header-actions">
          <ActionsCell />
        </div>
      </div>

      <ValidatorDescription />

      <h2>
        <Text text="Overview" />
      </h2>
      <div className="validator-detail-stats">
        <LabeledCardValue
          className="validator-detail-total-stake"
          title={<TotalStakeHeadCell />}
        >
          <TotalStakeCell />
        </LabeledCardValue>
        <LabeledCardValue title={<FeeHeadCell />}>
          <FeeCell />
        </LabeledCardValue>
        <LabeledCardValue title={<EstimatedAPRHeadCell />}>
          <EstimatedAPRCell />
        </LabeledCardValue>
        <LabeledCardValue title={<RankHeadCell />}>
          #<RankCell />
        </LabeledCardValue>
      </div>

      <h2>
        <Text text="Current Epoch Performance" />
      </h2>
      <div className="validator-detail-stats">
        <LabeledCardValue title={<MissedSlotsHeadCell />}>
          <MissedSlotsCell />
          <ParticipationCounts kind="missed" />
        </LabeledCardValue>
        <LabeledCardValue title={<ParticipationRateHeadCell />}>
          <ParticipationRateCell />
          <ParticipationCounts kind="votes" />
        </LabeledCardValue>
      </div>

      <MyDelegationSection />
    </>
  );
};

const ShimmerLabeledCardValue = WithLoadingShimmer(LabeledCardValue);

/**
 * ValidatorDetailPlaceholder mirrors the layout of the validator detail page
 * with skeleton values, and is shown while the validator is loading.
 */
export const ValidatorDetailPlaceholder: React.FC = () => {
  return (
    <>
      <div className="validator-detail-header validator-detail-header--placeholder">
        <SkeletonContent />
        <SkeletonContent />
      </div>

      <h2>
        <Text text="Overview" />
      </h2>
      <div className="validator-detail-stats">
        <ShimmerLabeledCardValue
          className="validator-detail-total-stake"
          title={<TotalStakeHeadCell />}
        >
          <SkeletonContent />
        </ShimmerLabeledCardValue>
        <ShimmerLabeledCardValue title={<FeeHeadCell />}>
          <SkeletonContent />
        </ShimmerLabeledCardValue>
        <ShimmerLabeledCardValue title={<EstimatedAPRHeadCell />}>
          <SkeletonContent />
        </ShimmerLabeledCardValue>
        <ShimmerLabeledCardValue title={<RankHeadCell />}>
          <SkeletonContent />
        </ShimmerLabeledCardValue>
      </div>

      <h2>
        <Text text="Current Epoch Performance" />
      </h2>
      <div className="validator-detail-stats">
        <ShimmerLabeledCardValue title={<MissedSlotsHeadCell />}>
          <SkeletonContent />
        </ShimmerLabeledCardValue>
        <ShimmerLabeledCardValue title={<ParticipationRateHeadCell />}>
          <SkeletonContent />
        </ShimmerLabeledCardValue>
      </div>
    </>
  );
};

interface ParticipationCountsProps {
  kind: 'missed' | 'votes';
}

/**
 * ParticipationCounts displays the counts behind a participation rate for
 * the current epoch, next to the rate: leader slots missed out of all leader
 * slots, or votes included out of all blocks. The validator table only shows
 * these counts on hover, which is not available on touch screens.
 */
const ParticipationCounts: React.FC<ParticipationCountsProps> = ({ kind }) => {
  const validator = React.useContext(ValidatorNodeContext);
  const consensusMap = React.useContext(ConsensusMapContext);
  const active = consensusMap.get(validator.addressText);
  const rate: undefined | Ratio =
    kind === 'missed'
      ? active?.leaderParticipation?.oneMinus()
      : active?.voterParticipation;

  // Hide the counts whenever RatioRationalText shows the rate as "-".
  if (!(rate instanceof RatioRational) || !Number.isFinite(rate.ratio)) {
    return null;
  }

  return (
    <span className="validator-detail-counts">
      <NumberText number={rate.numerator} />
      {' / '}
      <NumberText number={rate.denominator} />
    </span>
  );
};

/**
 * ValidatorDescription displays the free form description and company name
 * from the validator's self published metadata, when present.
 */
const ValidatorDescription: React.FC = () => {
  const validator = React.useContext(ValidatorNodeContext);
  const content = validator.metadata?.content;

  if (!content?.description && !content?.companyName) {
    return null;
  }

  return (
    <div className="validator-detail-description">
      {content.companyName && (
        <p className="validator-detail-company">
          <Text text={content.companyName} />
        </p>
      )}
      {content.description && (
        <p>
          <Text text={content.description} />
        </p>
      )}
    </div>
  );
};

/**
 * MyDelegationSection shows the connected wallet's delegation to this
 * validator. It is hidden when no wallet is connected.
 */
const MyDelegationSection: React.FC = () => {
  const account = React.useContext(RainbowKitAccountAddressContext);
  if (!account) {
    return null;
  }

  return (
    <>
      <h2>
        <Text text="My Delegation" />
      </h2>
      <div className="validator-detail-stats">
        <LabeledCardValue title={<Text text="Delegated" />}>
          <MyStakeCell />
        </LabeledCardValue>
      </div>
    </>
  );
};
