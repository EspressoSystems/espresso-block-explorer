import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import HexText from '../hex_text';

interface ExampleProps {
  hex: number[];
}
const Example: React.FC<ExampleProps> = (props) => (
  <HexText value={new Uint8Array(props.hex).buffer} />
);

const meta: Meta<typeof Example> = {
  title: 'Components/Text/Hex',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Hex: Story = {
  args: {
    hex: [0x01, 0x23, 0x45, 0x67, 0x89, 0xab, 0xcd, 0xef],
  },
};
