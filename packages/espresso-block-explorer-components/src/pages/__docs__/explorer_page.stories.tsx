import { ExplorerSummaryLoader } from '@/components/page_sections/explorer_summary/ExplorerSummaryLoader';
import { ProvideTickEverySecond } from '@/contexts/NowProvider';
import { OverridePathResolver } from '@/contexts/PathResolverProvider';
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
import { ProvideCappuccinoHotShotQueryServiceAPIContext } from 'pages/CappuccinoHotShotQueryServiceAPIContext';
import React from 'react';
import { EnvironmentBanner } from '../../components/layout/environment_banner/environment_banner';
import { ProvideCappuccinoExplorerSummaryAsyncStream } from '../CappuccinoHotShotQueryServiceAdapters';
import ExplorerPage from '../ExplorerPage';
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
          <ProvideCappuccinoExplorerSummaryAsyncStream>
            <ExplorerSummaryLoader>
              <ExplorerPage {...rest} />
            </ExplorerSummaryLoader>
          </ProvideCappuccinoExplorerSummaryAsyncStream>
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
  argTypes: environmentArgTypes,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {};

export const Milk: Story = {
  args: environmentArgsMilk,
};

export const Water: Story = {
  args: environmentArgsWater,
};

export const Decaf: Story = {
  args: environmentArgsDecaf,
};

export const Mainnet: Story = {
  args: environmentArgsMainnet,
};

export const FakeData: Story = {
  args: environmentArgsFakeData,
};

export const LocalDevNet: Story = {
  args: environmentArgsLocalDevNet,
};
