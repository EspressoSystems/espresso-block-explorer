import { DataContext } from '@/components/contexts/DataProvider';
import { NumberText } from '@/components/text';
import FullHexText from '@/components/text/FullHexText';
import PercentageText from '@/components/text/PercentageText';
import TaggedBase64Text from '@/components/text/TaggedBase64Text';
import { iota } from '@/functional/functional';
import SkeletonContent from '@/loading/SkeletonContent';
import Text from '@/text/Text';
import React from 'react';
import DataTable, {
  DataTableIndexContext,
  DataTableRowContext,
} from '../../data/data_table/DataTable';
import Link from '../../links/link/Link';
import {
  NodeSummaryColumn,
  NodeSummaryData,
  VotersParticipationStatsContext,
} from './NodesSummaryLoader';

const NameCell: React.FC = () => {
  const row = React.useContext(DataTableRowContext) as NodeSummaryData;

  if (row.name === null || row.name === '') {
    return <Text text="-" />;
  }

  return <Text text={row.name} />;
};

const PubKey: React.FC = () => {
  const row = React.useContext(DataTableRowContext) as NodeSummaryData;

  return <TaggedBase64Text value={row.publicKey} />;
};

const AddressCell: React.FC = () => {
  const row = React.useContext(DataTableRowContext) as NodeSummaryData;

  if (row.address === null) {
    return <Text text="-" />;
  }

  return <FullHexText value={row.address} />;
};

const CompanyName: React.FC = () => {
  const row = React.useContext(DataTableRowContext) as NodeSummaryData;

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
  const row = React.useContext(DataTableRowContext) as NodeSummaryData;

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
//   const row = React.useContext(DataTableRowContext) as NodeSummaryData;

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
  const allNodesVoteStats = React.useContext(VotersParticipationStatsContext);
  // const row = React.useContext(DataTableRowContext) as NodeSummaryData;
  const index = React.useContext(DataTableIndexContext);

  const voterStats = allNodesVoteStats[index] ?? null;

  if (voterStats === null) {
    // This is entirely possible.
    return <Text text="?" />;
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
          label: 'Address',
          columnType: NodeSummaryColumn.address,
          buildCell: props.components[2],
        },
        {
          label: 'Company',
          columnType: NodeSummaryColumn.companyName,
          buildCell: props.components[3],
        },
        {
          label: 'Website',
          columnType: NodeSummaryColumn.companyWebSite,
          buildCell: props.components[4],
        },
        {
          label: 'Vote Participation',
          columnType: NodeSummaryColumn.voteParticipation,
          buildCell: props.components[5],
        },
        // {
        //   label: 'Location',
        //   columnType: NodeSummaryColumn.location,
        //   buildCell: props.components[5],
        // },
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
          SkeletonContent,
        ]}
      />
    </DataContext.Provider>
  );
};

export const NodesSummaryDataTable: React.FC = () => {
  return (
    <NodesSummaryDataTableLayout
      components={[
        PubKey,
        NameCell,
        AddressCell,
        CompanyName,
        WebSiteCell,
        VoterParticipation,
      ]}
    />
  );
};
