import NumberText from '@/text/NumberText';
import Text from '@/text/Text';
import React from 'react';
import { Meta, StoryObj } from 'storybook';
import PromiseResolver from '../../async_data/PromiseResolver';
import { SortDirection, reverseSortDir } from '../../types';
import DataTableComp, {
  DataTableRowContext,
  DataTableSetStateContext,
  DataTableState,
  DataTableStateContext,
} from '../DataTable';

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

function sortOne(a: ExampleData, b: ExampleData) {
  return a.one - b.one;
}

function sortTwo(a: ExampleData, b: ExampleData) {
  return a.two.localeCompare(b.two);
}

function getSortFunctionForColumn(state: DataTableState<ExampleColumns>) {
  switch (state.sortColumn) {
    case ExampleColumns.one:
      return sortOne;
    case ExampleColumns.two:
      return sortTwo;

    default:
      break;
  }

  return sortOne;
}

function getSortFunction(state: DataTableState<ExampleColumns>) {
  const func = getSortFunctionForColumn(state);
  switch (state.sortDir) {
    case SortDirection.desc:
      return reverseSortDir(func);

    default:
      break;
  }

  return func;
}

async function retrieveData(state: DataTableState<unknown>) {
  return exampleData
    .slice()
    .sort(getSortFunction(state as DataTableState<ExampleColumns>));
}

const OneCell: React.FC = () => {
  const data = React.useContext(DataTableRowContext) as ExampleData;

  return <NumberText number={data.one} />;
};

const TwoCell: React.FC = () => {
  const data = React.useContext(DataTableRowContext) as ExampleData;

  return <Text text={data.two} />;
};

interface ExampleProps {}

const Example: React.FC<ExampleProps> = (props) => {
  // Create the Data Table State
  const [initialState, setState] = React.useState<
    DataTableState<ExampleColumns> & { page: number }
  >({
    sortColumn: ExampleColumns.one,
    sortDir: SortDirection.asc,
    page: 0,
  });

  return (
    <DataTableStateContext.Provider value={initialState}>
      <DataTableSetStateContext.Provider
        value={
          setState as React.Dispatch<
            React.SetStateAction<DataTableState<unknown>>
          >
        }
      >
        <LoadExampleDataTableData {...props} />
      </DataTableSetStateContext.Provider>
    </DataTableStateContext.Provider>
  );
};

const LoadExampleDataTableData: React.FC = (props) => {
  // Need to retrieve the actual data source
  const dataTableState = React.useContext(DataTableStateContext);

  const data = retrieveData(dataTableState);

  return (
    <PromiseResolver promise={data}>
      <ExampleDataTable {...props} />
    </PromiseResolver>
  );
};

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
