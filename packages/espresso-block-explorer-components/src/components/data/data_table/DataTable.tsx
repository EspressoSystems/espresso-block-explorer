import React from 'react';
import { DataContext } from '../../contexts/DataProvider';
import Text from '../../text/Text';
import { WithUiSmall } from '../../typography/typography';
import ChevronUp from '../../visual/icons/ChevronUp';
import { SortDirection } from '../types';
import './data_table.css';

const TextSmallThead = WithUiSmall('thead');
const TextSmallTbody = WithUiSmall('tbody');

/**
 * DataTableState represents the underlying DataTableState. The DataTable
 * knows absolutely nothing about the Data being worked with or the ColumnType.
 * The only assumptions that are made is that the ColumnTypes are equatable and
 * distinct.
 */
export interface DataTableState<ColumnType> {
  sortColumn: ColumnType;
  sortDir: SortDirection;
}

/**
 * DataTableStateContext is a Context for passing the DataTableState.
 */
export const DataTableStateContext = React.createContext<
  DataTableState<unknown>
>({
  sortColumn: null,
  sortDir: SortDirection.asc,
});

/**
 * DataTableSetStateContext is a Context that wraps a function for changing
 * the table state.
 */
export const DataTableSetStateContext = React.createContext<
  React.Dispatch<React.SetStateAction<DataTableState<unknown>>>
>(() => {});

const DataTableSortColumnContext = React.createContext<
  (column: unknown) => void
>(() => {});

/**
 * DataTableRowContext is a Context that provides an individual row within
 * the DataTable.
 */
export const DataTableRowContext: React.Context<object> = React.createContext(
  {},
);

/**
 * ColumnData represents the minimum data needed to render a cell, and header
 * column.
 */
type ColumnData<ColumnType> = {
  label: string;
  columnType: ColumnType;
  buildCell: React.ComponentType;
};

/**
 * ColumnDataContext represents an individual column within the DataTable.
 */
const ColumnDataContext = React.createContext<ColumnData<unknown>>({
  label: '',
  columnType: null,
  buildCell: () => <div />,
});

const ColumnsContext: React.Context<ColumnData<unknown>[]> =
  React.createContext([] as ColumnData<unknown>[]);

export interface DataTableProps<ColumnType> {
  columns: ColumnData<ColumnType>[];
}

export interface SortDirectionComponent {}

const SortDirectionComponent: React.FC = () => (
  <ChevronUp className="icon--sort" />
);

export interface DataTableHeadProps {}

/**
 * DataTableHead represents a th element under the thead -> tr element of
 * the Data Table.  It handles the display of the column names in a consistent
 * manner that utilizes information from the Column data passed to the
 * DataTable, in addition to the the DataTableState, to render the th element
 * utilizing the label and sort information.
 */
const DataTableHead: React.FC = () => {
  const changeSortColumn = React.useContext(DataTableSortColumnContext);
  const column = React.useContext(ColumnDataContext);
  const state = React.useContext(DataTableStateContext);
  const isSortingColumn = state.sortColumn === column.columnType;

  return (
    <th
      data-sort-column-active={isSortingColumn}
      data-sort-column-dir={state.sortDir}
      onClick={() => {
        changeSortColumn(column.columnType);
      }}
    >
      <div>
        <Text text={column.label} />
        <SortDirectionComponent />
      </div>
    </th>
  );
};

/**
 * DataTableRow represents an individual tr element underneath a tbody element
 * within the Data Table.  This will build the relevant cell for the given
 * column by invoking the buildCell function called on the Column data.
 */
const DataTableRow: React.FC = () => {
  const columns = React.useContext(ColumnsContext);

  return (
    <tr>
      {columns.map((column, idx) => {
        const Comp = column.buildCell;
        return (
          <td key={idx}>
            <Comp />
          </td>
        );
      })}
    </tr>
  );
};

/**
 * DataTableTHead represents a thead element within the Data table. It contains
 * the entries for all of the column headings within the Data Table.
 */
const DataTableTHead: React.FC = () => {
  const columns = React.useContext(ColumnsContext);

  return (
    <TextSmallThead>
      <tr>
        {columns.map((column, idx) => (
          <ColumnDataContext.Provider key={idx} value={column}>
            <DataTableHead />
          </ColumnDataContext.Provider>
        ))}
      </tr>
    </TextSmallThead>
  );
};

/**
 * DataTableTBody represents a tbody element within the Data Table. It contains
 * all of the rows that occur within the Data Table. Before constructing each
 * Row, it creates a DataTableRowContext.Provider containing the relevant row
 * of data.
 */
const DataTableTBody: React.FC = () => {
  const data = React.useContext(DataContext);
  if (!(data instanceof Array)) {
    return <TextSmallTbody></TextSmallTbody>;
  }

  return (
    <TextSmallTbody>
      {data.map((row, idx) => (
        <DataTableRowContext.Provider key={idx} value={row}>
          <DataTableRow />
        </DataTableRowContext.Provider>
      ))}
    </TextSmallTbody>
  );
};

/**
 * DataTable is a component that is meant to display data in a tabular form.
 * The data layout is dictated by the columns passed to the DataTable in it's
 * props.
 *
 * The DataTable forwards this data to the Head element, and the body element
 * for display.  The DataTable is capable of handling sortable columns if
 * the need should arise.
 *
 * It records the current page, sorted column and direction in it's local
 * state for quick reference.
 *
 * The DataTable itself is not responsible for setting up it's own state,
 * but it does consume and attempt to modify the State. As such, in order
 * to effectively utilize the DataTable the DataTableStateContext.Provider,
 * and DataTableSetStateContext.Provider should be set as an ancestor above
 * the created DataTable.
 *
 * The DataTable Body gets it's data from a DataContext.  That DataContext
 * is expected to be an Array of data, but no other restrictions are imposed.
 *
 * The Cells that get rendered within the Body are provided via the data
 * passed into the column Props. These Cells are constructed with no props
 * being passed, instead a DataTableRowContext.Provider is created to wrap
 * every row. This should allow every cell to access any data they need for
 * that individual row.
 *
 */
const DataTable: React.FC<DataTableProps<unknown>> = ({
  columns,
  ...props
}) => {
  const state = React.useContext(DataTableStateContext);
  const setState = React.useContext(DataTableSetStateContext);

  const changeColumn = (columnName: unknown) => {
    if (state.sortColumn === columnName) {
      setState({
        ...state,
        sortDir: 1 - state.sortDir,
      });
      return;
    }

    setState({
      ...state,
      sortColumn: columnName,
    });
  };

  return (
    <DataTableStateContext.Provider value={state}>
      <DataTableSortColumnContext.Provider value={changeColumn}>
        <ColumnsContext.Provider value={columns}>
          <table {...props} className="data-table">
            <DataTableTHead />
            <DataTableTBody />
          </table>
        </ColumnsContext.Provider>
      </DataTableSortColumnContext.Provider>
    </DataTableStateContext.Provider>
  );
};

export default DataTable;
