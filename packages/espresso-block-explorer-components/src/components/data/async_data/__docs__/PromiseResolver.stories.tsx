import NotFoundError from '@/errors/NotFoundError';
import CircularProgressIndicator from '@/loading/CircularProgressIndicator';
import Text from '@/text/Text';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
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
  promise: Promise<string>;
}

const ConsumeSnapshot: React.FC = () => {
  const snapshot = React.useContext(AsyncSnapshotContext);

  if (snapshot.asyncState === AsyncState.waiting) {
    return <CircularProgressIndicator />;
  }

  if (snapshot.error) {
    // We have an error...
    return <Text text={'Error: ' + snapshot.error.toString()} />;
  }

  const data = snapshot.data;
  return <Text text={String(data)} />;
};

const Example: React.FC<ExampleProps> = (props) => {
  return (
    <PromiseResolverComp promise={props.promise}>
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

export const Default: Story = {
  args: {
    promise: sleep(2000).then(() => 'Done!'),
  },
};

export const Loading: Story = {
  args: {
    promise: new Promise(() => {}),
  },
};

export const Resolved: Story = {
  args: {
    promise: Promise.resolve('Done!'),
  },
};

export const Rejected: Story = {
  args: {
    promise: Promise.reject(new NotFoundError('nothing')),
  },
};
