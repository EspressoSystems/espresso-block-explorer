import NotFoundError from '@/errors/not_found_error';
import { neverPromise } from '@/functional/functional_async';
import CircularProgressIndicator from '@/loading/circular_progress_indicator';
import Text from '@/text/text';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { AsyncState } from '../async_snapshot';
import { AsyncSnapshotContext } from '../async_snapshot_context';
import PromiseResolverComp from '../promise_resolver';

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
    promise: neverPromise as Promise<string>,
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
