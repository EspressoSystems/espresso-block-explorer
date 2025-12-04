import Text from '@/text/Text';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

const Swatch: React.FC<{ swatch: string }> = ({ swatch }) => (
  <div
    className="type--ui--base"
    style={{
      backgroundColor: `var(--color--${swatch})`,
      color: `var(--on-color--${swatch})`,
      padding: '16px 64px',
    }}
  >
    <div>
      <Text text={swatch} />
    </div>
    <div>
      <Text
        text={getComputedStyle(document.documentElement)
          .getPropertyValue(`--color--${swatch}`)
          .substring(0, 7)}
      />
    </div>
  </div>
);

const Example: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <div style={{ flex: '0 0 1', padding: '0 8px', textAlign: 'center' }}>
        <Swatch swatch="slate-950" />
        <Swatch swatch="slate-700" />
        <Swatch swatch="slate-500" />
        <Swatch swatch="slate-300" />
        <Swatch swatch="slate-200" />
        <Swatch swatch="slate-100" />
        <Swatch swatch="slate-50" />
      </div>

      <div style={{ flex: '0 0 1', padding: '0 8px', textAlign: 'center' }}>
        <Swatch swatch="green-800" />
        <Swatch swatch="green-700" />
        <Swatch swatch="green-600" />
        <Swatch swatch="green-100" />
        <Swatch swatch="green-50" />
      </div>

      <div style={{ flex: '0 0 1', padding: '0 8px', textAlign: 'center' }}>
        <Swatch swatch="amber-500" />
        <Swatch swatch="amber-300" />
        <Swatch swatch="amber-50" />
      </div>

      <div style={{ flex: '0 0 1', padding: '0 8px', textAlign: 'center' }}>
        <Swatch swatch="red-600" />
        <Swatch swatch="red-100" />
      </div>

      <div style={{ flex: '0 0 1', padding: '0 8px', textAlign: 'center' }}>
        <Swatch swatch="sky-700" />
      </div>
    </div>
  );
};

const meta: Meta<typeof Example> = {
  title: 'Style Guide/Swatches',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Swatches: Story = {
  args: {},
};
