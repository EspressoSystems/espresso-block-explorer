import { hexArrayBufferCodec } from '@/convert/codec/array_buffer_hex';
import { nodeList } from '@/data_source/fake_data_source';
import { ActiveValidatorsContext } from '@/sites/delegation_ui/contexts/active_validators_context';
import { DeriveNodeSetFromFullNodeSetSnapshot } from '@/sites/delegation_ui/contexts/all_validators_context';
import { DeriveConsensusSet } from '@/sites/delegation_ui/contexts/consensus_map_context';
import { ESPBalanceContext } from '@/sites/delegation_ui/contexts/esp_balance_context';
import { DialogModal } from '@/sites/delegation_ui/contexts/modal_context';
import { DeriveRank } from '@/sites/delegation_ui/contexts/rank_map_context';
import {
  NoValidatorSelected,
  ProvideValidatorSelection,
  ValidatorSelected,
  ValidatorSelectionContext,
  ValidatorSelectionEnum,
} from '@/sites/delegation_ui/contexts/validator_selection_context';
import { Meta, StoryObj } from '@storybook/react-vite';
import { default as React } from 'react';
import { FullNodeSetSnapshotContext } from '../../contexts/full_node_set_snapshot_context';
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
            <FullNodeSetSnapshotContext.Provider value={fullValidatorSet}>
              <DeriveNodeSetFromFullNodeSetSnapshot>
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
              </DeriveNodeSetFromFullNodeSetSnapshot>
            </FullNodeSetSnapshotContext.Provider>
          </ValidatorSelectionContext.Provider>
        </ProvideValidatorSelection>
      </ESPBalanceContext.Provider>
    </>
  );
};

const meta: Meta = {
  title: 'Delegation UI/Staking Modal/States',
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
    selection: new ValidatorSelected(
      hexArrayBufferCodec.encode(nodeList[INDEX_SELECTION].address),
    ),
  },
};
