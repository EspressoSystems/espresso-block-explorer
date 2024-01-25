import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import HexDumpComp from '../HexDump';

interface ExampleProps {
  numBytes: number;
}

const Example: React.FC<ExampleProps> = (props) => {
  const numBytes = Math.min(props.numBytes, 409600);
  const array = new Uint8Array(numBytes);

  for (let i = 0, l = array.byteLength; i < l; i++) {
    array[i] = Math.floor(Math.random() * 256);
  }

  return <HexDumpComp value={array.buffer} />;
};

const meta: Meta<typeof Example> = {
  title: 'Components/Page Section/Hex Dump',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const HexDump: Story = {
  args: {
    numBytes: 1024,
  },
};
