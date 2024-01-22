import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import TaggedBase64Text from '../TaggedBase64Text';
import { TaggedBase64 as TaggedBase64Object } from '../../../types/TaggedBase64';

interface ExampleProps {
  tag: string;
  hex: number[];
}
const Example: React.FC<ExampleProps> = (props) => (
  <TaggedBase64Text
    value={new TaggedBase64Object(props.tag, new Uint8Array(props.hex).buffer)}
  />
);

const meta: Meta<typeof Example> = {
  title: 'Components/Text/Tagged Base64',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const TaggedBase64: Story = {
  args: {
    tag: 'PUBKEY',
    hex: [
      0x01, 0x23, 0x45, 0x67, 0x89, 0xab, 0xcd, 0xef, 0xfe, 0xdc, 0xba, 0x98,
      0x76, 0x54, 0x32, 0x10,
    ],
  },
};
