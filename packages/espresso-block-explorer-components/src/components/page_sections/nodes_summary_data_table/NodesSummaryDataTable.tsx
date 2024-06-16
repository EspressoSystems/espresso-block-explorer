import { DataContext } from '@/components/contexts/DataProvider';
import FullHexText from '@/components/text/FullHexText';
import { iota } from '@/functional/functional';
import SkeletonContent from '@/loading/SkeletonContent';
import { BlockSummaryColumn } from '@/models/block_explorer/block_summary';
import Text from '@/text/Text';
import React from 'react';
import DataTable, {
  DataTableRowContext,
} from '../../data/data_table/DataTable';
import Link from '../../links/link/Link';
import { NodeSummaryData } from './NodesSummaryLoader';

const NameCell: React.FC = () => {
  const row = React.useContext(DataTableRowContext) as NodeSummaryData;

  return <Text text={row.name} />;
};

const AddressCell: React.FC = () => {
  const row = React.useContext(DataTableRowContext) as NodeSummaryData;

  return <FullHexText value={row.address} />;
};

const CompanyName: React.FC = () => {
  const row = React.useContext(DataTableRowContext) as NodeSummaryData;

  return <Text text={row.companyDetails.name} />;
};

const WebSiteCell: React.FC = () => {
  const row = React.useContext(DataTableRowContext) as NodeSummaryData;

  if (!row.companyDetails.website) {
    return <Text text="-" />;
  }

  return (
    <Link href={row.companyDetails.website} target="_blank">
      <Text text={row.companyDetails.website} />
    </Link>
  );
};

const LatLng: React.FC = () => {
  const row = React.useContext(DataTableRowContext) as NodeSummaryData;

  return (
    <Text
      text={`${row.location.coords[0]}, ${row.location.coords[1]} ${row.location.country}`}
    />
  );
};

interface NodesSummaryDataTableLayoutProps {
  components: [
    React.ComponentType,
    React.ComponentType,
    React.ComponentType,
    React.ComponentType,
    React.ComponentType,
  ];
}

const NodesSummaryDataTableLayout: React.FC<
  NodesSummaryDataTableLayoutProps
> = (props) => {
  return (
    <DataTable
      columns={[
        {
          label: 'Name',
          columnType: BlockSummaryColumn.height,
          buildCell: props.components[0],
        },
        {
          label: 'Address',
          columnType: BlockSummaryColumn.proposer,
          buildCell: props.components[1],
        },
        {
          label: 'Company',
          columnType: BlockSummaryColumn.transactions,
          buildCell: props.components[2],
        },
        {
          label: 'Website',
          columnType: BlockSummaryColumn.size,
          buildCell: props.components[3],
        },
        {
          label: 'Location',
          columnType: BlockSummaryColumn.size,
          buildCell: props.components[4],
        },
      ]}
    />
  );
};

interface NodesSummaryDataTablePlaceholderProps {
  numElements?: number;
}

export const NodesSummaryDataTablePlaceholder: React.FC<
  NodesSummaryDataTablePlaceholderProps
> = (props) => {
  const { numElements = 20 } = props;

  return (
    <DataContext.Provider value={Array.from(iota(numElements))}>
      <NodesSummaryDataTableLayout
        components={[
          SkeletonContent,
          SkeletonContent,
          SkeletonContent,
          SkeletonContent,
          SkeletonContent,
        ]}
      />
    </DataContext.Provider>
  );
};

export const NodesSummaryDataTable: React.FC = () => {
  return (
    <NodesSummaryDataTableLayout
      components={[NameCell, AddressCell, CompanyName, WebSiteCell, LatLng]}
    />
  );
};
