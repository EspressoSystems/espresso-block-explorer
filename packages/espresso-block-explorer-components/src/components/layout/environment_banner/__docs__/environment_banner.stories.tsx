import { EnvironmentContext } from '@/components/config';
import { Environment } from '@/models/config/environment/environment';
import { environmentControlArgType } from '@/models/config/storybook/controls';
import { Meta, StoryObj } from '@storybook/react-vite';
import { EnvironmentBanner } from '../environment_banner';

interface ExampleProps {
  environment?: Environment;
}

const Example: React.FC<ExampleProps> = (props) => {
  const { environment = Environment.fakeData } = props;
  return (
    <EnvironmentContext.Provider value={environment}>
      <EnvironmentBanner />
    </EnvironmentContext.Provider>
  );
};

const meta: Meta<typeof Example> = {
  title: 'Page Components/Environment Banner/States',
  component: Example,
  argTypes: {
    environment: environmentControlArgType,
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

export const FakeData: Story = {
  args: {
    environment: Environment.fakeData,
  },
};

export const Decaf: Story = {
  args: {
    environment: Environment.decaf,
  },
};

export const Mainnet: Story = {
  args: {
    environment: Environment.mainnet,
  },
};

export const Milk: Story = {
  args: {
    environment: Environment.milk,
  },
};

export const Water: Story = {
  args: {
    environment: Environment.water,
  },
};

export const LocalDevNet: Story = {
  args: {
    environment: Environment.localDevNet,
  },
};
