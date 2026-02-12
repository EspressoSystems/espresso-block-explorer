import { assert } from '@/assert/assert';
import MoneyText from '@/components/text/money_text';
import PercentageText from '@/components/text/percentage_text';
import Text from '@/components/text/text';
import WalletAddressText from '@/components/text/wallet_address_text';
import CheckCircle from '@/components/visual/icons/sharp_line/check_circle';
import LinkShare2 from '@/components/visual/icons/sharp_line/link_share_2';
import { filterIterable } from '@/functional/functional';
import MonetaryValue from '@/models/block_explorer/monetary_value';
import WalletAddress from '@/models/wallet_address/wallet_address';
import React from 'react';
import {
  AllValidatorsContext,
  NodeAddressListContext,
} from '../contexts/all_validators_context';
import { NodeAddressContext } from '../contexts/node_address_context';
import { RankMapContext } from '../contexts/rank_map_context';
import {
  ProvideSearchFilter,
  SearchFilterContext,
} from '../contexts/search_filter_context';
import {
  ProvideValidatorNodeContext,
  ValidatorNodeContext,
} from '../contexts/validator_node_context';
import {
  ValidatorConfirmed,
  ValidatorSelected,
  ValidatorSelectionContext,
} from '../contexts/validator_selection_context';
import ButtonLarge from '../elements/buttons/button_large';
import { applySearchTermNodeFilter } from '../search_term_node_filter';
import { SearchValidator } from '../search_validator';
import { NodeNameCell } from '../validator_nodes_table/common/cells/node_name_cell';
import { RankCell } from '../validator_nodes_table/common/cells/rank_cell';
import { CloseStakingModalButton } from './close_staking_modal';
import { StakingModalHistoryControlsContext } from './contexts/staking_modal_history_context';
import { LabelValueSplit } from './label_value_split';
import { StakingContent } from './staking_content';
import { StakingHeader } from './staking_header';
import { StakingModalTitle } from './staking_modal_title';
import { ValidatorDisplayArea } from './validator_display_area';
import './validator_selection_needed_content.css';

/**
 * ValidatorSelectionNeededContent is the content to display when the user
 * indicates that he/she wishes to choose a modal, but no specific selection
 * has been made.
 *
 * This indicates that the user wishes to perform a delegation, but has not
 * specified a specific validator to make the decision with.  As a result,
 * we need to display additional information to the user so he/she can
 * make a confirmed decision with regard to which Validator he/she wishes
 * to perform an action.
 */
export const ValidatorSelectionNeededContent: React.FC = () => {
  return (
    <>
      <StakingHeader>
        <StakingModalTitle>
          <Text text="Select a Validator" />
        </StakingModalTitle>
        <CloseStakingModalButton />
      </StakingHeader>
      <StakingContent>
        <ValidatorSelection />
      </StakingContent>
    </>
  );
};

/**
 * ValidatorSelection splits the content of the Validator selection between
 * a list of validators to select, and the details concerning that validator
 * selection.
 *
 * NOTE: design has requested that this selection always be populated. This
 * is not always possible, but where we have a list of validators, we will
 * always select one for the user.  If this is not possible, we will end
 * up with "no selection" as a failsafe fallback.
 */
const ValidatorSelection: React.FC = () => {
  return (
    <div className="validator-selection-split">
      <ProvideSearchFilter>
        <ProvideNodeList>
          <div className="validator-selection-split-start">
            <SearchValidator />
            <ValidatorSelectionList />
          </div>
        </ProvideNodeList>
      </ProvideSearchFilter>
      <ValidatorSelectionDetails />
    </div>
  );
};

/**
 * ProvideNodeList provides a sorted list of node addresses based on stake.
 * This is done as the order of this list is independent of the one on the
 * main page.
 */
const ProvideNodeList: React.FC<React.PropsWithChildren> = ({ children }) => {
  const nodeList = React.useContext(NodeAddressListContext);
  const allValidators = React.useContext(AllValidatorsContext);
  // Make sure that the validators are sorted by stake

  const sortedList = Array.from(nodeList).sort((a, b) => {
    const stakeA = allValidators.get(a)?.stake ?? 0n;
    const stakeB = allValidators.get(b)?.stake ?? 0n;
    return Number(stakeB - stakeA);
  });

  return (
    <NodeAddressListContext.Provider value={sortedList}>
      {children}
    </NodeAddressListContext.Provider>
  );
};

/**
 * ValidatorSelectionList filters the provided Node Address List based on
 * the user input, and displays the validator list to the user.
 */
const ValidatorSelectionList: React.FC = () => {
  return (
    <div className="validator-selection-list">
      <FilteredValidatorList>
        <ValidatorList />
      </FilteredValidatorList>
    </div>
  );
};

/**
 * FilteredValidatorList filters the provided Node Address List based on
 * the search filter the user has provided.
 */
const FilteredValidatorList: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const nodeAddresses = React.useContext(NodeAddressListContext);
  const allValidators = React.useContext(AllValidatorsContext);
  const searchFilter = React.useContext(SearchFilterContext);
  const rankMap = React.useContext(RankMapContext);

  const filteredNodes = Array.from(
    filterIterable(
      nodeAddresses,
      applySearchTermNodeFilter(searchFilter, allValidators),
    ),
  ).sort((a, b) => {
    const rankA = rankMap.get(a) ?? Number.MAX_SAFE_INTEGER;
    const rankB = rankMap.get(b) ?? Number.MAX_SAFE_INTEGER;
    return rankA - rankB;
  });

  return (
    <NodeAddressListContext.Provider value={filteredNodes}>
      {children}
    </NodeAddressListContext.Provider>
  );
};

/**
 * ValidatorList displays the list of validators available for selection.
 */
const ValidatorList: React.FC = () => {
  // const nodeList = React.useContext(NodeListContext);
  const nodeListAddresses = React.useContext(NodeAddressListContext);

  return (
    <table className="validator-list">
      <tbody>
        {nodeListAddresses.map((entry, index) => (
          <NodeAddressContext.Provider key={index} value={entry}>
            <ProvideValidatorNodeContext>
              <NodeRow />
            </ProvideValidatorNodeContext>
          </NodeAddressContext.Provider>
        ))}
      </tbody>
    </table>
  );
};

/**
 * NodeRow displays a single Validator entry with the relevant details.
 * It will also indicate whether the specific row matches the user's
 * selection or not.
 */
const NodeRow: React.FC = () => {
  const node = React.useContext(ValidatorNodeContext);
  const selection = React.useContext(ValidatorSelectionContext);
  const historyControls = React.useContext(StakingModalHistoryControlsContext);

  const isSelected =
    selection instanceof ValidatorSelected &&
    selection.validatorAddress === node.addressText;

  const select = () => {
    historyControls.replace(new ValidatorSelected(node.addressText));
  };

  return (
    <tr data-selected={isSelected} onClick={select}>
      <td className="node-rank" onClick={select}>
        <RankCell />
      </td>
      <td className="node-name" onClick={select}>
        <NodeNameCell />
      </td>
      <td className="node-selected" onClick={select}>
        <CheckCircle />
      </td>
    </tr>
  );
};

/**
 * ValidatorSelectionDetails reflects the details of the user's current
 * selected validator, should there be one.
 */
const ValidatorSelectionDetails: React.FC = () => {
  return (
    <ProvideSelectedNode>
      <div className="validator-selection-split-end">
        <div className="selection-details">
          <EmptySelectionGuard>
            <div className="node-summary-area">
              <ValidatorDisplayArea />
            </div>
            <ValidatorDetailsArea />
            <div className="flex" />
            <ValidatorConfirmArea />
          </EmptySelectionGuard>
        </div>
      </div>
    </ProvideSelectedNode>
  );
};

/**
 * ProvideSelectedNode provides the context for the currently selected
 * node. If there is not current selection the default NodeAddressContext
 * is not overwritten.
 */
const ProvideSelectedNode: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const selection = React.useContext(ValidatorSelectionContext);

  if (!(selection instanceof ValidatorSelected)) {
    return children;
  }

  return (
    <NodeAddressContext.Provider value={selection.validatorAddress}>
      <ProvideValidatorNodeContext>{children}</ProvideValidatorNodeContext>
    </NodeAddressContext.Provider>
  );
};

/**
 * EmptySelectionGuard prevents rendering of children if there is no
 * active selection. This is done as a fail safe, as the details require
 * an active selection to display the details properly.
 */
const EmptySelectionGuard: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const node = React.useContext(ValidatorNodeContext);

  if (node.address.byteLength <= 0) {
    return null;
  }

  return children;
};

const ValidatorDetailsArea: React.FC = () => {
  return (
    <div className="staking-modal-staking-overview-area">
      <TotalStake />
      <CommissionRate />
      <Address />
      <Website />
    </div>
  );
};

/**
 * ValidatorConfirmArea provides the area where the user can confirm
 * the specified Validator as his/her confirmed selection.
 */
const ValidatorConfirmArea: React.FC = () => {
  const selection = React.useContext(
    ValidatorSelectionContext,
  ) as ValidatorSelected;
  const historyControls = React.useContext(StakingModalHistoryControlsContext);
  assert(selection instanceof ValidatorSelected);

  return (
    <div className="validator-confirm-area">
      <ButtonLarge
        onClick={() =>
          historyControls.push(
            new ValidatorConfirmed(selection.validatorAddress),
          )
        }
      >
        <Text text="Next" />
      </ButtonLarge>
    </div>
  );
};

const TotalStake: React.FC = () => {
  const validator = React.useContext(ValidatorNodeContext);

  return (
    <LabelValueSplit>
      <Text text="Total Stake" />
      <MoneyText money={MonetaryValue.ESP(validator.stake)} />
    </LabelValueSplit>
  );
};

const CommissionRate: React.FC = () => {
  const validator = React.useContext(ValidatorNodeContext);

  return (
    <LabelValueSplit>
      <Text text="Commission" />
      <PercentageText percentage={validator.commission.ratio} />
    </LabelValueSplit>
  );
};
const Address: React.FC = () => {
  const validator = React.useContext(ValidatorNodeContext);

  return (
    <LabelValueSplit>
      <Text text="Address" />
      <WalletAddressText value={new WalletAddress(validator.address)} />
    </LabelValueSplit>
  );
};

interface WebsiteLinkProps {
  href: null | URL;
}

const WebsiteLink: React.FC<WebsiteLinkProps> = ({ href }) => {
  if (!href || (href.protocol !== 'http:' && href.protocol !== 'https:')) {
    return <Text text="-" />;
  }

  return (
    <a href={href.toString()} target="_blank" rel="noopener noreferrer">
      <Text text="Visit URL" />
      &nbsp;
      <LinkShare2 />
    </a>
  );
};

const Website: React.FC = () => {
  const validator = React.useContext(ValidatorNodeContext);
  const website = validator.metadata?.content?.companyWebsite ?? null;

  return (
    <LabelValueSplit>
      <Text text="Website" />
      <WebsiteLink href={website} />
    </LabelValueSplit>
  );
};
