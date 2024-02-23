import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import CircularProgressIndicator from '../../../loading/CircularProgressIndicator';
import Text from '../../../text/Text';
import { AsyncState } from '../AsyncSnapshot';
import { AsyncSnapshotContext } from '../AsyncSnapshotContext';
import PromiseResolverComp from '../PromiseResolver';

async function sleep(milliseconds: number): Promise<void> {
  return new Promise((resolve) => {
    const timeout = setTimeout(() => {
      clearTimeout(timeout);

      resolve();
    }, milliseconds);
  });
}

interface ExampleProps {
  value: string;
  milliseconds: number;
}

const ConsumeSnapshot: React.FC = () => {
  const snapshot = React.useContext(AsyncSnapshotContext);

  if (snapshot.asyncState === AsyncState.waiting) {
    return <CircularProgressIndicator />;
  }

  const data = snapshot.data;
  return <Text text={String(data)} />;
};

const Example: React.FC<ExampleProps> = (props) => {
  return (
    <PromiseResolverComp
      promise={sleep(props.milliseconds).then(() => props.value)}
    >
      <ConsumeSnapshot />
    </PromiseResolverComp>
  );
};

const meta: Meta<typeof Example> = {
  title: 'Components/Async/Promise Resolver',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const PromiseResolver: Story = {
  args: {
    value: 'Done!',
    milliseconds: 2000,
  },
};
