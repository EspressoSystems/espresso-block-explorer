import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { OverridePagePath, PageType } from '../../../contexts/PagePathProvider';
import NavBarComp from '../NavBar';

interface ExampleProps {}

const Example: React.FC<ExampleProps> = (props) => (
  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
    <OverridePagePath page={PageType.blocks}>
      <NavBarComp {...props} />
    </OverridePagePath>
  </div>
);

const meta: Meta<typeof Example> = {
  title: 'Components/Links/Nav Bar',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const NavBar: Story = {
  args: {},
};
