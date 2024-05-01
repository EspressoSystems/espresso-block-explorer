import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {
  InitialSearchState,
  SearchInput as SearchInputComp,
} from '../SearchInput';

interface ExampleProps {
  initialState?: InitialSearchState;
  forceFocusState?: boolean;
}

const Example: React.FC<ExampleProps> = (props) => {
  return <SearchInputComp {...props} />;
};

const meta: Meta<typeof Example> = {
  title: 'Components/Page Sections/Search Input',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {},
};
