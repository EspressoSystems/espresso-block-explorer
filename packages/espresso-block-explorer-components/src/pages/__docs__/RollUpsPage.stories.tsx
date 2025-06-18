import { ProvideTickEverySecond } from '@/components/contexts/NowProvider';
import { OverridePathResolver } from '@/contexts/PathResolverProvider';
import { Environment } from '@/models/config/environment/environment';
import {
  environmentArgsDecaf,
  environmentArgsFakeData,
  environmentArgsMainnet,
  environmentArgsMilk,
  environmentArgsWater,
  environmentArgTypes,
} from '@/models/config/storybook/controls';
import { StoryBookSpecifyEnvironment } from '@/models/config/storybook/storybook';
import { ProvideCappuccinoHotShotQueryServiceAPIContext } from 'pages/CappuccinoHotShotQueryServiceAPIContext';
import React from 'react';
import { Meta, StoryObj } from 'storybook';
import { ProvideCappuccinoRollUpsSummaryDataSource } from '../CappuccinoHotShotQueryServiceAdapters';
import FakeDataNotice from '../FakeDataNotice';
import RollUpsPage from '../RollUpsPage';
import { StoryBookPathResolver } from '../StoryBookPathResolver';

interface ExampleProps {
  environment: Environment;
  hotshotQueryServiceURL?: string;
  nodeValidatorWebSocketURL?: string;
  namespace: number;
}

const Example: React.FC<ExampleProps> = ({
  environment,
  hotshotQueryServiceURL,
  nodeValidatorWebSocketURL,
  namespace,
  ...rest
}) => (
  <StoryBookSpecifyEnvironment
    environment={environment}
    hotshotQueryServiceURL={hotshotQueryServiceURL}
    nodeValidatorWebSocketURL={nodeValidatorWebSocketURL}
  >
    <FakeDataNotice />
    <ProvideTickEverySecond>
      <OverridePathResolver pathResolver={new StoryBookPathResolver()}>
        <ProvideCappuccinoHotShotQueryServiceAPIContext>
          <ProvideCappuccinoRollUpsSummaryDataSource>
            <RollUpsPage {...rest} />
          </ProvideCappuccinoRollUpsSummaryDataSource>
        </ProvideCappuccinoHotShotQueryServiceAPIContext>
      </OverridePathResolver>
    </ProvideTickEverySecond>
  </StoryBookSpecifyEnvironment>
);

const meta: Meta = {
  title: 'Pages/Rollups',
  component: Example,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

interface RollUpsPageArgs {}

const defaultRollUpsPageArgs: RollUpsPageArgs = {};

const rollupsPageArgTypes = {};

export const Default: Story = {
  args: {
    ...defaultRollUpsPageArgs,
  },
  argTypes: {
    ...environmentArgTypes,
    ...rollupsPageArgTypes,
  },
};

export const Milk: Story = {
  args: {
    ...environmentArgsMilk,
    ...defaultRollUpsPageArgs,
  },
  argTypes: {
    ...environmentArgTypes,
    ...rollupsPageArgTypes,
  },
};

export const Water: Story = {
  args: {
    ...environmentArgsWater,
    ...defaultRollUpsPageArgs,
  },

  argTypes: {
    ...environmentArgTypes,
    ...rollupsPageArgTypes,
  },
};

export const Decaf: Story = {
  args: {
    ...environmentArgsDecaf,
    ...defaultRollUpsPageArgs,
  },

  argTypes: {
    ...environmentArgTypes,
    ...rollupsPageArgTypes,
  },
};

export const Mainnet: Story = {
  args: {
    ...environmentArgsMainnet,
    ...defaultRollUpsPageArgs,
  },

  argTypes: {
    ...environmentArgTypes,
    ...rollupsPageArgTypes,
  },
};

export const FakeData: Story = {
  args: {
    ...environmentArgsFakeData,
    ...defaultRollUpsPageArgs,
  },

  argTypes: {
    ...environmentArgTypes,
    ...rollupsPageArgTypes,
  },
};
