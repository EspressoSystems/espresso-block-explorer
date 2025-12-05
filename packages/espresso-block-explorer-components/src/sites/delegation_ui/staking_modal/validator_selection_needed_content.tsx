import { assert } from '@/assert/assert';
import MoneyText from '@/components/text/money_text';
import PercentageText from '@/components/text/percentage_text';
import Text from '@/components/text/text';
import WalletAddressText from '@/components/text/wallet_address_text';
import { Check } from '@/components/visual';
import { compareArrayBuffer, filterIterable } from '@/functional/functional';
import MonetaryValue from '@/models/block_explorer/monetary_value';
import WalletAddress from '@/models/wallet_address/wallet_address';
import { NodeSetEntry } from '@/service/espresso_l1_validator_service/common/node_set_entry';
import React from 'react';
import { AllValidatorsContext } from '../contexts/all_validators_context';
import { RankMapContext } from '../contexts/rank_map_context';
import {
  ProvideSearchFilter,
  SearchFilterContext,
} from '../contexts/search_filter_context';
import { ValidatorNodeContext } from '../contexts/validator_node_context';
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

const NodeListContext = React.createContext<NodeSetEntry[]>([]);

const ProvideNodeList: React.FC<React.PropsWithChildren> = ({ children }) => {
  const allValidators = React.useContext(AllValidatorsContext);
  const nodes = allValidators?.nodes ?? [];

  return (
    <NodeListContext.Provider value={nodes}>
      {children}
    </NodeListContext.Provider>
  );
};

const ValidatorSelectionList: React.FC = () => {
  return (
    <div className="validator-selection-list">
      <FilteredValidatorList>
        <ValidatorList />
      </FilteredValidatorList>
    </div>
  );
};

const FilteredValidatorList: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const nodes = React.useContext(NodeListContext);
  const searchFilter = React.useContext(SearchFilterContext);
  const rankMap = React.useContext(RankMapContext);

  const filteredNodes = Array.from(
    filterIterable(nodes, applySearchTermNodeFilter(searchFilter)),
  ).sort((a, b) => {
    const rankA = rankMap.get(a.addressText) ?? Number.MAX_SAFE_INTEGER;
    const rankB = rankMap.get(b.addressText) ?? Number.MAX_SAFE_INTEGER;
    return rankA - rankB;
  });

  return (
    <NodeListContext.Provider value={filteredNodes}>
      {children}
    </NodeListContext.Provider>
  );
};

const ValidatorList: React.FC = () => {
  const nodeList = React.useContext(NodeListContext);

  return (
    <table className="validator-list">
      <tbody>
        {nodeList.map((entry, index) => (
          <ValidatorNodeContext.Provider key={index} value={entry}>
            <NodeRow />
          </ValidatorNodeContext.Provider>
        ))}
      </tbody>
    </table>
  );
};

const NodeRow: React.FC = () => {
  const node = React.useContext(ValidatorNodeContext);
  const selection = React.useContext(ValidatorSelectionContext);
  const historyControls = React.useContext(StakingModalHistoryControlsContext);

  const isSelected =
    selection instanceof ValidatorSelected &&
    compareArrayBuffer(selection.validatorAddress, node.address) === 0;

  const select = () => {
    historyControls.replace(new ValidatorSelected(node.address));
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
        <Check />
      </td>
    </tr>
  );
};

const ValidatorSelectionDetails: React.FC = () => {
  return (
    <ProvideSelectedNode>
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
    </ProvideSelectedNode>
  );
};

const ProvideSelectedNode: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const selection = React.useContext(ValidatorSelectionContext);
  const allValidators = React.useContext(AllValidatorsContext);

  const selectedNode =
    !(selection instanceof ValidatorSelected) || !allValidators
      ? null
      : (allValidators.nodes.find(
          (node) =>
            compareArrayBuffer(node.address, selection.validatorAddress) === 0,
        ) ?? null);

  if (!selectedNode) {
    return children;
  }

  return (
    <ValidatorNodeContext.Provider value={selectedNode}>
      {children}
    </ValidatorNodeContext.Provider>
  );
};

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

const Website: React.FC = () => {
  return (
    <LabelValueSplit>
      <Text text="Website" />
      <Text text="-" />
    </LabelValueSplit>
  );
};
