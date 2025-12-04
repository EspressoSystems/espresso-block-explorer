import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import FullHexText from '../full_hex_text';

interface ExampleProps {
  hex: number[];
}
const Example: React.FC<ExampleProps> = (props) => (
  <FullHexText value={new Uint8Array(props.hex).buffer} />
);

const meta: Meta<typeof Example> = {
  title: 'Components/Text/Full Hex',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const FullHex: Story = {
  args: {
    hex: [0x01, 0x23, 0x45, 0x67, 0x89, 0xab, 0xcd, 0xef],
  },
};
