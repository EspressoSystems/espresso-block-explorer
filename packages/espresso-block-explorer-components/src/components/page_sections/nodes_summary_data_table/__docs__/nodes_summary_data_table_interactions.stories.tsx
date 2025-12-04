import { DataContext } from '@/components/contexts';
import {
  getDataTable,
  selectAllTableHeaderCellsTwice,
} from '@/components/data/data_table/__shared__/data_table_shared';
import {
  generateAllNodeIdentityInformationData,
  GeneratedNodeIdentityInformation,
} from '@/data_source/fake_data_source';
import { dropIterable, mapIterable } from '@/functional/functional';
import { CommissionPercent } from '@/models/espresso/stake_table/commission_percent';
import { StakeTableEntry } from '@/models/espresso/stake_table/stake_table_entry';
import { StakeTableEntryWrapper } from '@/models/espresso/stake_table/stake_table_entry_wrapper';
import { Validator } from '@/models/espresso/stake_table/validator';
import WalletAddress from '@/models/wallet_address/wallet_address';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  CurrentStakeTableContext,
  CurrentValidatorsContext,
} from 'pages/cappuccino_node_validator_service_adapters';
import React from 'react';
import { NodesSummaryDataTable as NodesSummaryDataTableComponent } from '../nodes_summary_data_table';
import { NodeSummaryData } from '../nodes_summary_loader';

interface ExampleProps {
  validatorData: NodeSummaryData[];
  stakeTable: Map<string, StakeTableEntryWrapper>;
  validators: Map<string, Validator>;
}

const Example: React.FC<ExampleProps> = (props) => {
  return (
    <CurrentStakeTableContext.Provider value={props.stakeTable}>
      <CurrentValidatorsContext.Provider value={props.validators}>
        <DataContext.Provider value={props.validatorData}>
          <NodesSummaryDataTableComponent />
        </DataContext.Provider>
      </CurrentValidatorsContext.Provider>
    </CurrentStakeTableContext.Provider>
  );
};

const meta: Meta<typeof Example> = {
  title: 'components/Data/Nodes Summary Data Table/Interactions',
  component: Example,
  args: {
    validatorData: [],
    stakeTable: new Map<string, StakeTableEntryWrapper>(),
    validators: new Map<string, Validator>(),
  },
  argTypes: {
    validatorData: { control: 'object' },
    stakeTable: { control: 'object' },
    validators: { control: 'object' },
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

const nodeIdentities = Array.from(generateAllNodeIdentityInformationData());

function convertNodeIdentityToValidatorData(
  nodeIdentity: GeneratedNodeIdentityInformation,
  index: number,
): NodeSummaryData {
  const nullData = index % 10 === 0;
  return {
    publicKey: nodeIdentity.pubkey,
    name: nullData ? null : nodeIdentity.name,
    companyDetails: nullData ? null : nodeIdentity.company,
    location: nodeIdentity.location,
  };
}

const stakeTable = new Map(
  nodeIdentities.map((nodeIdentity) => [
    nodeIdentity.pubkey.toString(),
    new StakeTableEntryWrapper(
      new StakeTableEntry(nodeIdentity.pubkey, nodeIdentity.stake),
      nodeIdentity.stateVerKey,
    ),
  ]),
);

const validators = new Map(
  mapIterable(dropIterable(nodeIdentities, 2), (nodeIdentity) => [
    nodeIdentity.pubkey.toString(),
    new Validator(
      new WalletAddress(nodeIdentity.pubkey.data.slice(0, 20)),
      nodeIdentity.pubkey,
      nodeIdentity.stateVerKey,
      nodeIdentity.stake,
      new CommissionPercent(nodeIdentity.commission),
      new Map<string, bigint>([
        [
          new WalletAddress(nodeIdentity.pubkey.data.slice(0, 20)).toString(),
          nodeIdentity.stake,
        ],
      ]),
    ),
  ]),
);

export const Interactions: Story = {
  args: {
    validatorData: nodeIdentities.map(convertNodeIdentityToValidatorData),
    stakeTable,
    validators,
  },
  play: async ({ canvasElement, step }) => {
    await step('retrieve the data table element', async () => {
      await getDataTable(canvasElement);
    });

    await step('sort all columns', async () => {
      await selectAllTableHeaderCellsTwice(canvasElement);
    });
  },
};
