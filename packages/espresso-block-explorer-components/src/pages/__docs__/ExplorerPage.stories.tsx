import { ExplorerSummaryLoader } from '@/components/page_sections/explorer_summary/ExplorerSummaryLoader';
import { ProvideTickEverySecond } from '@/contexts/NowProvider';
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
import { ProvideCappuccinoExplorerSummary } from '../CappuccinoHotShotQueryServiceAdapters';
import ExplorerPage from '../ExplorerPage';
import FakeDataNotice from '../FakeDataNotice';
import { StoryBookPathResolver } from '../StoryBookPathResolver';

interface ExampleProps {
  environment: Environment;
  hotshotQueryServiceURL?: string;
  nodeValidatorWebSocketURL?: string;
}

const Example: React.FC<ExampleProps> = ({
  environment,
  hotshotQueryServiceURL,
  nodeValidatorWebSocketURL,
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
          <ProvideCappuccinoExplorerSummary>
            <ExplorerSummaryLoader>
              <ExplorerPage {...rest} />
            </ExplorerSummaryLoader>
          </ProvideCappuccinoExplorerSummary>
        </ProvideCappuccinoHotShotQueryServiceAPIContext>
      </OverridePathResolver>
    </ProvideTickEverySecond>
  </StoryBookSpecifyEnvironment>
);

const meta: Meta = {
  title: 'Pages/Explorer',
  component: Example,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  argTypes: environmentArgTypes,
};

export const Milk: Story = {
  args: environmentArgsMilk,
  argTypes: environmentArgTypes,
};

export const Water: Story = {
  args: environmentArgsWater,
  argTypes: environmentArgTypes,
};

export const Decaf: Story = {
  args: environmentArgsDecaf,
  argTypes: environmentArgTypes,
};

export const Mainnet: Story = {
  args: environmentArgsMainnet,
  argTypes: environmentArgTypes,
};

export const FakeData: Story = {
  args: environmentArgsFakeData,
  argTypes: environmentArgTypes,
};
