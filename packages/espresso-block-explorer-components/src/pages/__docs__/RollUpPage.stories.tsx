import { ProvideTickEverySecond } from '@/components/contexts/NowProvider';
import { NamespaceContext } from '@/components/page_sections/rollup_detail_data_table/RollUpDetailLoader';
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
import { ProvideCappuccinoRollUpDetailDataSource } from '../CappuccinoHotShotQueryServiceAdapters';
import FakeDataNotice from '../FakeDataNotice';
import RollUpPage from '../RollUpPage';
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
          <ProvideCappuccinoRollUpDetailDataSource>
            <NamespaceContext.Provider value={namespace}>
              <RollUpPage {...rest} />
            </NamespaceContext.Provider>
          </ProvideCappuccinoRollUpDetailDataSource>
        </ProvideCappuccinoHotShotQueryServiceAPIContext>
      </OverridePathResolver>
    </ProvideTickEverySecond>
  </StoryBookSpecifyEnvironment>
);

const meta: Meta = {
  title: 'Pages/Rollup',
  component: Example,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

interface RollUpPageArgs {
  namespace: number;
  startAtBlock: undefined | number;
  offset: undefined | number;
}

const defaultRollUpPageArgs: RollUpPageArgs = {
  namespace: 0xc0ffee1,
  startAtBlock: undefined,
  offset: undefined,
};

const rollupPageArgTypes = {
  namespace: {
    control: 'number',
  },
  startAtBlock: {
    control: 'number',
  },
  offset: {
    control: 'number',
  },
};

export const Default: Story = {
  args: {
    ...defaultRollUpPageArgs,
  },
  argTypes: {
    ...environmentArgTypes,
    ...rollupPageArgTypes,
  },
};

export const Milk: Story = {
  args: {
    ...environmentArgsMilk,
    ...defaultRollUpPageArgs,
  },
  argTypes: {
    ...environmentArgTypes,
    ...rollupPageArgTypes,
  },
};

export const Water: Story = {
  args: {
    ...environmentArgsWater,
    ...defaultRollUpPageArgs,
  },

  argTypes: {
    ...environmentArgTypes,
    ...rollupPageArgTypes,
  },
};

export const Decaf: Story = {
  args: {
    ...environmentArgsDecaf,
    ...defaultRollUpPageArgs,
  },

  argTypes: {
    ...environmentArgTypes,
    ...rollupPageArgTypes,
  },
};

export const Mainnet: Story = {
  args: {
    ...environmentArgsMainnet,
    ...defaultRollUpPageArgs,
  },

  argTypes: {
    ...environmentArgTypes,
    ...rollupPageArgTypes,
  },
};

export const FakeData: Story = {
  args: {
    ...environmentArgsFakeData,
    ...defaultRollUpPageArgs,
  },

  argTypes: {
    ...environmentArgTypes,
    ...rollupPageArgTypes,
  },
};
