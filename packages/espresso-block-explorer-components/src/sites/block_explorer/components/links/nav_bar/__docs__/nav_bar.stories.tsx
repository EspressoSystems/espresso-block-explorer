import {
  OverridePagePath,
  PageType,
} from '@/block_explorer/contexts/page_path_provider';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { default as React } from 'react';
import { default as NavBarComp } from '../nav_bar';

interface ExampleProps {}

const Example: React.FC<ExampleProps> = (props) => (
  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
    <OverridePagePath page={PageType.blocks}>
      <NavBarComp {...props} />
    </OverridePagePath>
  </div>
);

const meta: Meta<typeof Example> = {
  title: 'Block Explorer/Components/Links/Nav Bar',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const NavBar: Story = {
  args: {},
};
