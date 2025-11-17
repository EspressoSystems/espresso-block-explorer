import { nodeList } from '@/data_source/fake_data_source';
import { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { ActiveValidatorsContext } from 'sites/delegation_ui/contexts/active_validators_context';
import { AllValidatorsContext } from 'sites/delegation_ui/contexts/all_validators_context';
import { DeriveConsensusSet } from 'sites/delegation_ui/contexts/consensus_map_context';
import { ESPBalanceContext } from 'sites/delegation_ui/contexts/esp_balance_context';
import { DialogModal } from 'sites/delegation_ui/contexts/modal_context';
import { DeriveRank } from 'sites/delegation_ui/contexts/rank_map_context';
import {
  NoValidatorSelected,
  ProvideValidatorSelection,
  ValidatorSelected,
  ValidatorSelectionContext,
  ValidatorSelectionEnum,
} from 'sites/delegation_ui/contexts/validator_selection_context';
import {
  activeValidatorSet,
  fullValidatorSet,
} from '../__shared__/example_data';
import { ProvideStakingHistory } from '../contexts/staking_modal_history_context';
import { StakingModalContent } from '../staking_modal_content';

interface ExampleProps {
  selection: ValidatorSelectionEnum;
}

const Example: React.FC<ExampleProps> = (props) => {
  return (
    <>
      <ESPBalanceContext.Provider value={5_000_000_000_000_000_000_000_000n}>
        <ProvideValidatorSelection>
          <ValidatorSelectionContext.Provider value={props.selection}>
            <AllValidatorsContext.Provider value={fullValidatorSet}>
              <ActiveValidatorsContext.Provider value={activeValidatorSet}>
                <DeriveRank>
                  <DeriveConsensusSet>
                    <DialogModal className="staking-modal" open>
                      <ProvideStakingHistory>
                        <StakingModalContent />
                      </ProvideStakingHistory>
                    </DialogModal>
                  </DeriveConsensusSet>
                </DeriveRank>
              </ActiveValidatorsContext.Provider>
            </AllValidatorsContext.Provider>
          </ValidatorSelectionContext.Provider>
        </ProvideValidatorSelection>
      </ESPBalanceContext.Provider>
    </>
  );
};

const meta: Meta = {
  title: 'Sites/Delegation UI/Staking Modal/States',
  component: Example,
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
  argTypes: {
    selection: { table: { disable: true } },
  },

  globals: {
    background: 'light',
    parameters: {
      backgrounds: {
        default: 'light',
        options: {
          light: { name: 'Light', value: '#f8fafcff' },
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

export const NodeSelectionNeeded: Story = {
  args: {
    selection: new NoValidatorSelected(),
  },
};

const INDEX_SELECTION = 3;

export const NodeSelectionNodeSelected: Story = {
  args: {
    selection: new ValidatorSelected(nodeList[INDEX_SELECTION].address),
  },
};
