import { default as NumberText } from '@/text/number_text';
import { default as Text } from '@/text/text';
import { Meta, StoryObj } from '@storybook/react-vite';
import { default as React } from 'react';
import { default as PromiseResolver } from '../../async_data/promise_resolver';
import { default as DataTableComp, DataTableRowContext } from '../data_table';

enum ExampleColumns {
  one = 'one',
  two = 'two',
}

interface ExampleData {
  one: number;
  two: string;
}

const exampleData: ExampleData[] = [
  {
    one: 1,
    two: 'one',
  },
  {
    one: 2,
    two: 'two',
  },
  {
    one: 3,
    two: 'three',
  },
  {
    one: 4,
    two: 'four',
  },
  {
    one: 5,
    two: 'five',
  },
  {
    one: 6,
    two: 'six',
  },
  {
    one: 7,
    two: 'seven',
  },
  {
    one: 8,
    two: 'eight',
  },
  {
    one: 9,
    two: 'nine',
  },
  {
    one: 10,
    two: 'ten',
  },
];

const exampleDataPromise = Promise.resolve(exampleData);

const OneCell: React.FC = () => {
  const data = React.useContext(DataTableRowContext) as ExampleData;

  return <NumberText number={data.one} />;
};

const TwoCell: React.FC = () => {
  const data = React.useContext(DataTableRowContext) as ExampleData;

  return <Text text={data.two} />;
};

interface ExampleProps {}

const Example: React.FC<ExampleProps> = (props) => (
  <PromiseResolver promise={exampleDataPromise}>
    <ExampleDataTable {...props} />
  </PromiseResolver>
);

const ExampleDataTable: React.FC = (props) => (
  <DataTableComp
    {...props}
    columns={[
      {
        label: 'One',
        columnType: ExampleColumns.one,
        buildCell: OneCell,
      },
      {
        label: 'Two',
        columnType: ExampleColumns.two,
        buildCell: TwoCell,
      },
    ]}
  />
);

const meta: Meta = {
  title: 'components/Data/Data Table',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const DataTable: Story = {
  args: {},
};
