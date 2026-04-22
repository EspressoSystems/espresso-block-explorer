import { ExplorerSummaryLoader } from '@/block_explorer/components/page_sections/explorer_summary/explorer_summary_loader';
import { OverridePathResolver } from '@/block_explorer/contexts/path_resolver_provider';
import { ProvideHotShotQueryServiceAPIContext } from '@/contexts/hot_shot_query_service_api_context';
import { ProvideTickEverySecond } from '@/contexts/now_provider';
import { EnvironmentBanner } from '@/layout/environment_banner/environment_banner';
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
import { default as React } from 'react';
import { default as ExplorerPage } from '../explorer_page';
import { ProvideExplorerSummaryAsyncStream } from '../hot_shot_query_service_adapters';
import { StoryBookPathResolver } from '../story_book_path_resolver';
import { parameters } from './meta_parameters';

interface ExampleProps {
  environment: Environment;
  hotshotQueryServiceURL?: string;
  nodeValidatorWebSocketURL?: string;
  stakingAPIServiceURL?: string;
}

const Example: React.FC<ExampleProps> = ({
  environment,
  hotshotQueryServiceURL,
  nodeValidatorWebSocketURL,
  stakingAPIServiceURL,
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
    stakingAPIServiceURL={extractURLWithEncodedFallback(stakingAPIServiceURL)}
  >
    <EnvironmentBanner />
    <ProvideTickEverySecond>
      <OverridePathResolver pathResolver={new StoryBookPathResolver()}>
        <ProvideHotShotQueryServiceAPIContext>
          <ProvideExplorerSummaryAsyncStream>
            <ExplorerSummaryLoader>
              <ExplorerPage {...rest} />
            </ExplorerSummaryLoader>
          </ProvideExplorerSummaryAsyncStream>
        </ProvideHotShotQueryServiceAPIContext>
      </OverridePathResolver>
    </ProvideTickEverySecond>
  </StoryBookSpecifyEnvironment>
);

const meta: Meta = {
  title: 'Block Explorer/Pages/Explorer',
  component: Example,
  parameters,
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
