import { LoadingContext } from '@/components/contexts';
import { DataContext } from '@/components/contexts/DataProvider';
import { SortDirection } from '@/components/data/types';
import { NumberText } from '@/components/text';
import CopyTaggedBase64 from '@/components/text/CopyTaggedBase64';
import PercentageText from '@/components/text/PercentageText';
import TaggedBase64Text from '@/components/text/TaggedBase64Text';
import { compareArrayBuffer, iota } from '@/functional/functional';
import SkeletonContent from '@/loading/SkeletonContent';
import Text from '@/text/Text';
import React from 'react';
import DataTable, {
  DataTableRowContext,
  DataTableSetStateContext,
  DataTableState,
  DataTableStateContext,
} from '../../data/data_table/DataTable';
import Link from '../../links/link/Link';
import {
  NodeSummaryColumn,
  NodeSummaryData,
  NodeVoteParticipationStats,
  VotersParticipationStatsContext,
} from './NodesSummaryLoader';

type NodeSummaryDataPair = [NodeSummaryData, NodeVoteParticipationStats];

const NameCell: React.FC = () => {
  const [row] = React.useContext(DataTableRowContext) as NodeSummaryDataPair;

  if (row.name === null || row.name === '') {
    return <Text text="-" />;
  }

  return <Text text={row.name} />;
};

const PubKey: React.FC = () => {
  const [row] = React.useContext(DataTableRowContext) as NodeSummaryDataPair;

  return (
    <CopyTaggedBase64 value={row.publicKey}>
      <TaggedBase64Text value={row.publicKey} />
    </CopyTaggedBase64>
  );
};

const CompanyName: React.FC = () => {
  const [row] = React.useContext(DataTableRowContext) as NodeSummaryDataPair;

  if (
    row.companyDetails === null ||
    row.companyDetails.name === null ||
    row.companyDetails.name === ''
  ) {
    return <Text text="-" />;
  }

  return <Text text={row.companyDetails.name} />;
};

const WebSiteCell: React.FC = () => {
  const [row] = React.useContext(DataTableRowContext) as NodeSummaryDataPair;

  if (
    row.companyDetails === null ||
    row.companyDetails.website === null ||
    row.companyDetails?.website === ''
  ) {
    return <Text text="-" />;
  }

  if (!row.companyDetails.website) {
    return <Text text="-" />;
  }

  return (
    <Link href={row.companyDetails.website} target="_blank">
      <Text text={row.companyDetails.website} />
    </Link>
  );
};

// const LatLng: React.FC = () => {
//   const [row] = React.useContext(DataTableRowContext) as NodeSummaryDataPair;

//   if (row.location === null) {
//     return <Text text="-" />;
//   }

//   if (row.location.coords === null) {
//     return <Text text="-" />;
//   }

//   return (
//     <Text
//       text={`${row.location.coords[0]}, ${row.location.coords[1]} ${row.location.country}`}
//     />
//   );
// };

const VoterParticipation: React.FC = () => {
  const [, voterStats] = React.useContext(
    DataTableRowContext,
  ) as NodeSummaryDataPair;

  if (voterStats === null) {
    // This is entirely possible.
    return <Text text="?" />;
  }

  if (voterStats.totalVotes === 0) {
    return <NumberText number={voterStats.voteParticipation} />;
  }

  return (
    <>
      <NumberText number={voterStats.voteParticipation} /> (
      <PercentageText
        percentage={voterStats.voteParticipation / voterStats.totalVotes}
      />
      )
    </>
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
          label: 'Public Key',
          columnType: NodeSummaryColumn.publicKey,
          buildCell: props.components[0],
        },
        {
          label: 'Name',
          columnType: NodeSummaryColumn.name,
          buildCell: props.components[1],
        },
        {
          label: 'Company',
          columnType: NodeSummaryColumn.companyName,
          buildCell: props.components[2],
        },
        {
          label: 'Website',
          columnType: NodeSummaryColumn.companyWebSite,
          buildCell: props.components[3],
        },
        {
          label: 'Vote Participation',
          columnType: NodeSummaryColumn.voteParticipation,
          buildCell: props.components[4],
        },
      ]}
    />
  );
};

interface NodesSummaryDataTablePlaceholderProps {
  numElements?: number;
}

/**
 * NodesSummaryDataTablePlaceholder is a component that renders a placeholder
 * version of the Node Summary Data Table.
 */
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

/**
 * NodesSummaryDataTablePopulated is a component that renders the populated
 * version of the Node Summary Data Table.
 */
export const NodesSummaryDataTablePopulated: React.FC = () => {
  return (
    <NodesSummaryDataTableLayout
      components={[
        PubKey,
        NameCell,
        CompanyName,
        WebSiteCell,
        VoterParticipation,
      ]}
    />
  );
};

/**
 * sortPublicKey sorts the data by the node public key.
 */
function sortPublicKey(
  aPair: NodeSummaryDataPair,
  bPair: NodeSummaryDataPair,
): number {
  const [a] = aPair;
  const [b] = bPair;
  return compareArrayBuffer(a.publicKey.data, b.publicKey.data);
}

/**
 * sortName sorts the data by the node name.
 */
function sortName(
  aPair: NodeSummaryDataPair,
  bPair: NodeSummaryDataPair,
): number {
  const [a] = aPair;
  const [b] = bPair;
  if (a.name === null && b.name === null) {
    return 0;
  }

  if (a.name === null) {
    return 1;
  }

  if (b.name === null) {
    return -1;
  }

  return a.name.localeCompare(b.name);
}

/**
 * sortCompanyName sorts the data by the company name.
 */
function sortCompanyName(
  aPair: NodeSummaryDataPair,
  bPair: NodeSummaryDataPair,
): number {
  const [a] = aPair;
  const [b] = bPair;

  if (a.companyDetails === null && b.companyDetails === null) {
    return 0;
  }

  if (a.companyDetails === null) {
    return 1;
  }

  if (b.companyDetails === null) {
    return -1;
  }

  if (a.companyDetails.name === null && b.companyDetails.name === null) {
    return 0;
  }

  if (a.companyDetails.name === null) {
    return 1;
  }

  if (b.companyDetails.name === null) {
    return -1;
  }

  return a.companyDetails.name.localeCompare(b.companyDetails.name);
}

/**
 * sortCompanyWebSite sorts the data by the company website.
 */
function sortCompanyWebSite(
  aPair: NodeSummaryDataPair,
  bPair: NodeSummaryDataPair,
): number {
  const [a] = aPair;
  const [b] = bPair;

  if (a.companyDetails === null && b.companyDetails === null) {
    return 0;
  }

  if (a.companyDetails === null) {
    return 1;
  }

  if (b.companyDetails === null) {
    return -1;
  }

  if (a.companyDetails.website === null && b.companyDetails.website === null) {
    return 0;
  }

  if (a.companyDetails.website === null) {
    return 1;
  }

  if (b.companyDetails.website === null) {
    return -1;
  }

  return a.companyDetails.website.localeCompare(b.companyDetails.website);
}

/**
 * sortVoteParticipation sorts the data by the vote participation.
 */
function sortVoteParticipation(
  aPair: NodeSummaryDataPair,
  bpair: NodeSummaryDataPair,
): number {
  const [, a] = aPair;
  const [, b] = bpair;

  return a.voteParticipation - b.voteParticipation;
}

/**
 * combineNodeIdentityAndVoterStats combines the node identity data with the
 * voter stats data, and turns them into a pair, in order to combine the
 * two pieces of data into one.
 */
function combineNodeIdentityAndVoterStats(
  nodeIdentities: NodeSummaryData[],
  voterData: NodeVoteParticipationStats[],
): NodeSummaryDataPair[] {
  return nodeIdentities.map((nodeIdentity, index) => [
    nodeIdentity,
    voterData[index] ?? {
      totalVotes: 0,
      voteParticipation: 0,
    },
  ]);
}

/**
 * nodeSummaryDataPairSortFunction returns a sort function that can be used to
 * sort the data pairs by the given column.
 */
function nodeSummaryDataPairSortFunction(
  column: NodeSummaryColumn,
): (a: NodeSummaryDataPair, b: NodeSummaryDataPair) => number {
  switch (column) {
    case NodeSummaryColumn.publicKey:
      return sortPublicKey;

    case NodeSummaryColumn.name:
      return sortName;

    case NodeSummaryColumn.companyName:
      return sortCompanyName;

    case NodeSummaryColumn.companyWebSite:
      return sortCompanyWebSite;

    case NodeSummaryColumn.voteParticipation:
      return sortVoteParticipation;

    default:
      return sortPublicKey;
  }
}

/**
 * applySortDirection wraps the given sortFunction with another function that
 * will reverse the sort, if the provided sort direction is descending.
 */
function applySortDirection(
  sortFunction: (a: NodeSummaryDataPair, b: NodeSummaryDataPair) => number,
  sortDir: SortDirection,
) {
  switch (sortDir) {
    case SortDirection.asc:
      return sortFunction;

    case SortDirection.desc:
      return (a: NodeSummaryDataPair, b: NodeSummaryDataPair) =>
        -sortFunction(a, b);

    default:
      return sortFunction;
  }
}

/**
 * sortDataWithColumnAndDirection sorts the data with the given column and
 * direction.
 *
 * The column and direction are meant to determine how the data gets sorted,
 * and are ultimately determined by user interaction with the table headers.
 */
function sortDataWithColumnAndDirection(
  data: NodeSummaryDataPair[],
  sortColumn: NodeSummaryColumn,
  sortDirection: SortDirection,
) {
  const sortFunction = applySortDirection(
    nodeSummaryDataPairSortFunction(sortColumn),
    sortDirection,
  );

  return data.sort(sortFunction);
}

/**
 * NodeSummaryDataTable handles the display of the Node Summary Data Table.
 * Additionally, it handles the sorting of the data via the manipulation of the
 * headers of the table data.
 */
export const NodesSummaryDataTable: React.FC = () => {
  const [initialState, setState] = React.useState<
    DataTableState<NodeSummaryColumn>
  >({
    sortColumn: NodeSummaryColumn.publicKey,
    sortDir: SortDirection.asc,
  });

  const loading = React.useContext(LoadingContext);
  const data = React.useContext(DataContext) as NodeSummaryData[];
  const voterData = React.useContext(VotersParticipationStatsContext);
  // Sort the data.

  if ((!data || (data instanceof Array && data.length <= 0)) && loading) {
    return <NodesSummaryDataTablePlaceholder />;
  }

  const dataPairs = combineNodeIdentityAndVoterStats(data, voterData);
  const { sortColumn, sortDir } = initialState;

  const sortedData = sortDataWithColumnAndDirection(
    dataPairs,
    sortColumn,
    sortDir,
  );

  return (
    <DataTableStateContext.Provider value={initialState}>
      <DataTableSetStateContext.Provider
        value={
          setState as React.Dispatch<
            React.SetStateAction<DataTableState<unknown>>
          >
        }
      >
        <DataContext.Provider value={sortedData}>
          <NodesSummaryDataTablePopulated />
        </DataContext.Provider>
      </DataTableSetStateContext.Provider>
    </DataTableStateContext.Provider>
  );
};
