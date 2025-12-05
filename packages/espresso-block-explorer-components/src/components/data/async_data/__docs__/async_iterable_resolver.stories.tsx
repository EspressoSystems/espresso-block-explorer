import { sleep } from '@/async/sleep';
import CircularProgressIndicator from '@/loading/circular_progress_indicator';
import Text from '@/text/text';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import AsyncIterableResolverComp from '../async_iterable_resolver';
import { AsyncState } from '../async_snapshot';
import { AsyncSnapshotContext } from '../async_snapshot_context';

interface ExampleProps {
  asyncIterable: AsyncIterable<number>;
}

/**
 * ConsumeSnapshot is a simple component used to demonstrate the use of the
 * AsyncSnapshotContexts.
 */
const ConsumeSnapshot: React.FC = () => {
  const snapshot = React.useContext(AsyncSnapshotContext);

  if (snapshot.asyncState === AsyncState.waiting && !snapshot.data) {
    return <CircularProgressIndicator />;
  }

  if (snapshot.error) {
    // We have an error...
    return <Text text={'Error: ' + snapshot.error.toString()} />;
  }

  const data = snapshot.data;
  return <Text text={String(data)} />;
};

/**
 * Example is a component demonstrating the use of the AsyncIterableResolver,
 * and how one can use the resulting AsyncSnapshot information in order to
 * appropriately handle the update of asynchronous data.
 */
const Example: React.FC<ExampleProps> = (props) => {
  return (
    <AsyncIterableResolverComp asyncIterable={props.asyncIterable}>
      <ConsumeSnapshot />
    </AsyncIterableResolverComp>
  );
};

const meta: Meta<typeof Example> = {
  title: 'Components/Async/Async Iterable Resolver',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    asyncIterable: counter(),
  },
};

async function* counter(): AsyncGenerator<number> {
  for (let i = 0; i < 10; i++) {
    await sleep(1000);
    yield i;
  }
}
