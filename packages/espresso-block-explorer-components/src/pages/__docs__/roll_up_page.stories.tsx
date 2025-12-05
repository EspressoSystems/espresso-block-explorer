import { ProvideTickEverySecond } from '@/components/contexts/now_provider';
import { NamespaceContext } from '@/components/page_sections/rollup_detail_data_table/roll_up_detail_loader';
import { OverridePathResolver } from '@/contexts/path_resolver_provider';
import { Environment } from '@/models/config/environment/environment';
import {
  environmentArgsDecaf,
  environmentArgsFakeData,
  environmentArgsLocalDevNet,
  environmentArgsMainnet,
  environmentArgsMilk,
  environmentArgsWater,
  environmentArgTypes,
  extractURLWithEncodedFallback,
} from '@/models/config/storybook/controls';
import { StoryBookSpecifyEnvironment } from '@/models/config/storybook/storybook';
import { Meta, StoryObj } from '@storybook/react-vite';
import { ProvideCappuccinoHotShotQueryServiceAPIContext } from 'pages/cappuccino_hot_shot_query_service_api_context';
import React from 'react';
import { EnvironmentBanner } from '../../components/layout/environment_banner/environment_banner';
import { ProvideCappuccinoRollUpDetailDataSource } from '../cappuccino_hot_shot_query_service_adapters';
import RollUpPage from '../roll_up_page';
import { StoryBookPathResolver } from '../story_book_path_resolver';

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
    hotshotQueryServiceURL={extractURLWithEncodedFallback(
      hotshotQueryServiceURL,
    )}
    nodeValidatorWebSocketURL={extractURLWithEncodedFallback(
      nodeValidatorWebSocketURL,
    )}
  >
    <EnvironmentBanner />
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
  argTypes: {
    ...environmentArgTypes,
    namespace: {
      control: 'number',
    },
    startAtBlock: {
      control: 'number',
    },
    offset: {
      control: 'number',
    },
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

export const Default: Story = {
  args: {
    ...defaultRollUpPageArgs,
  },
};

export const Milk: Story = {
  args: {
    ...environmentArgsMilk,
    ...defaultRollUpPageArgs,
  },
};

export const Water: Story = {
  args: {
    ...environmentArgsWater,
    ...defaultRollUpPageArgs,
  },
};

export const Decaf: Story = {
  args: {
    ...environmentArgsDecaf,
    ...defaultRollUpPageArgs,
  },
};

export const Mainnet: Story = {
  args: {
    ...environmentArgsMainnet,
    ...defaultRollUpPageArgs,
  },
};

export const FakeData: Story = {
  args: {
    ...environmentArgsFakeData,
    ...defaultRollUpPageArgs,
  },
};

export const LocalDevNet: Story = {
  args: {
    ...environmentArgsLocalDevNet,
    ...defaultRollUpPageArgs,
  },
};
