import { ErrorContext, LoadingContext } from '@/components/contexts';
import { DataContext } from '@/components/contexts/DataProvider';
import { SortDirection } from '@/components/data/types';
import { ErrorDisplay } from '@/components/error/ErrorDisplay';
import { MoneyText, NumberText } from '@/components/text';
import CopyTaggedBase64 from '@/components/text/CopyTaggedBase64';
import CopyWalletAddress from '@/components/text/CopyWalletAddress';
import PercentageText from '@/components/text/PercentageText';
import TaggedBase64Text from '@/components/text/TaggedBase64Text';
import WalletAddressText from '@/components/text/WalletAddressText';
import {
  compareArrayBuffer,
  foldRIterator,
  iota,
} from '@/functional/functional';
import SkeletonContent from '@/loading/SkeletonContent';
import MonetaryValue from '@/models/block_explorer/monetary_value';
import { StakeTableEntryWrapper } from '@/models/espresso/stake_table/stake_table_entry_wrapper';
import { Validator } from '@/models/espresso/stake_table/validator';
import WalletAddress from '@/models/wallet_address/wallet_address';
import Text from '@/text/Text';
import { CurrentStakeTableContext, CurrentValidatorsContext } from 'pages';
import React from 'react';
import DataTable, {
  Alignment,
  DataTableRowContext,
  DataTableSetStateContext,
  DataTableState,
  DataTableStateContext,
} from '../../data/data_table/DataTable';
import { EgressLink } from '../../links/link/Link';
import {
  NodeSummaryColumn,
  NodeSummaryData,
  NodeVoteParticipationStats,
  VotersParticipationStatsContext,
} from './NodesSummaryLoader';

/**
 * NodeSummaryDataTuple is a tuple that contains the data for a single
 * node summary row.
 */
type NodeSummaryDataTuple = [
  NodeSummaryData,
  NodeVoteParticipationStats,
  StakeTableEntryWrapper | null,
  Validator | null,
];

/**
 * NameCell is a component that will render the name of the node.
 *
 * This is expected to be a column in a DataTable.
 */
const NameCell: React.FC = () => {
  const [row] = React.useContext(DataTableRowContext) as NodeSummaryDataTuple;

  if (row.name === null || row.name === '') {
    return <Text text="-" />;
  }

  return <Text text={row.name} />;
};

/**
 * PubKey is a component that will render the public key of the node.
 *
 * This is expected to be a column in a DataTable.
 */
const PubKey: React.FC = () => {
  const [row] = React.useContext(DataTableRowContext) as NodeSummaryDataTuple;

  return (
    <CopyTaggedBase64 value={row.publicKey}>
      <TaggedBase64Text value={row.publicKey} />
    </CopyTaggedBase64>
  );
};

/**
 * ValidatorAddress is a component that will render the validator's
 * address, if it exists.
 *
 * This is expected to be a column in a DataTable.
 */
const ValidatorAddress: React.FC = () => {
  const [, , , row] = React.useContext(
    DataTableRowContext,
  ) as NodeSummaryDataTuple;
  const address = row?.account.address ?? null;

  if (address === null) {
    return <Text text="-" />;
  }

  const wallet = new WalletAddress(address);

  return (
    <CopyWalletAddress value={wallet}>
      <WalletAddressText value={wallet} />
    </CopyWalletAddress>
  );
};

/**
 * StakedCell is a component that will render the amount of stake
 * that the node has, as well as the percentage of the total stake.
 *
 * This is expected to be a column in a DataTable.
 */
const StakedCell: React.FC = () => {
  const totalStake = React.useContext(TotalStakeContext);
  const [, , , row] = React.useContext(
    DataTableRowContext,
  ) as NodeSummaryDataTuple;

  const stake = row?.stake ?? null;

  if (totalStake === null || stake === null) {
    return <Text text="-" />;
  }

  // We'll want to calculate the percentage using Bigints as much as possible.
  // Let's see if we can get 5 digits of precision.
  const precision = 1e5;
  const percentageStake =
    Number((stake * BigInt(precision)) / totalStake) / precision;

  return (
    <>
      <MoneyText money={MonetaryValue.ESP(stake)} /> (
      <PercentageText percentage={percentageStake} />)
    </>
  );
};

/**
 * CompanyName is a component that will render the company name of the node.
 *
 * This is expected to be a column in a DataTable.
 */
const CompanyName: React.FC = () => {
  const [row] = React.useContext(DataTableRowContext) as NodeSummaryDataTuple;

  if (
    row.companyDetails === null ||
    row.companyDetails.name === null ||
    row.companyDetails.name === ''
  ) {
    return <Text text="-" />;
  }

  return <Text text={row.companyDetails.name} />;
};

/**
 * WebSiteCell is a component that will render the website of the node's
 * company.
 *
 * This is expected to be a column in a DataTable.
 */
const WebSiteCell: React.FC = () => {
  const [row] = React.useContext(DataTableRowContext) as NodeSummaryDataTuple;

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
    <EgressLink href={row.companyDetails.website} target="_blank">
      <Text text={row.companyDetails.website} />
    </EgressLink>
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

/**
 * VoterParticipation is a component that will render the voter
 * participation of the node.
 *
 * This is expected to be a column in a DataTable.
 */
const VoterParticipation: React.FC = () => {
  const [, voterStats] = React.useContext(
    DataTableRowContext,
  ) as NodeSummaryDataTuple;

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
    React.ComponentType,
    React.ComponentType,
  ];
}

/**
 * NodesSummaryDataTableLayout is a component that renders the layout
 * of the Node Summary Data Table.
 */
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
          label: 'Address',
          columnType: NodeSummaryColumn.address,
          buildCell: props.components[1],
        },
        {
          label: 'Name',
          columnType: NodeSummaryColumn.name,
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
          label: 'Stake',
          columnType: NodeSummaryColumn.stake,
          buildCell: props.components[5],
          alignment: Alignment.end,
        },
        {
          label: 'Vote Participation',
          columnType: NodeSummaryColumn.voteParticipation,
          buildCell: props.components[6],
          alignment: Alignment.end,
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
  // We have an active wallet, versus we don't have an active wallet.
  return (
    <NodesSummaryDataTableLayout
      components={[
        PubKey,
        ValidatorAddress,
        NameCell,
        CompanyName,
        WebSiteCell,
        StakedCell,
        VoterParticipation,
      ]}
    />
  );
};

/**
 * sortPublicKey sorts the data by the node public key.
 */
function sortPublicKey(
  aPair: NodeSummaryDataTuple,
  bPair: NodeSummaryDataTuple,
): number {
  const [a] = aPair;
  const [b] = bPair;
  return compareArrayBuffer(a.publicKey.data, b.publicKey.data);
}

/**
 * sortName sorts the data by the node name.
 */
function sortName(
  aPair: NodeSummaryDataTuple,
  bPair: NodeSummaryDataTuple,
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
  aPair: NodeSummaryDataTuple,
  bPair: NodeSummaryDataTuple,
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
  aPair: NodeSummaryDataTuple,
  bPair: NodeSummaryDataTuple,
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
  aPair: NodeSummaryDataTuple,
  bPair: NodeSummaryDataTuple,
): number {
  const [, a] = aPair;
  const [, b] = bPair;

  return a.voteParticipation - b.voteParticipation;
}

/**
 * sortAddress sorts the data by the validator address.
 */
function sortAddress(
  aPair: NodeSummaryDataTuple,
  bPair: NodeSummaryDataTuple,
): number {
  const [, , , a] = aPair;
  const [, , , b] = bPair;

  const addressA = a?.account.address;
  const addressB = b?.account.address;
  if (!addressA && !addressB) {
    return 0;
  }

  if (!addressA) {
    return 1;
  }

  if (!addressB) {
    return -1;
  }

  return compareArrayBuffer(addressA, addressB);
}

/**
 * sortStaked sorts the data by the staked amount.
 */
function sortStaked(
  aPair: NodeSummaryDataTuple,
  bPair: NodeSummaryDataTuple,
): number {
  const [, , a] = aPair;
  const [, , b] = bPair;

  const stakeA = a?.stakeTableEntry.stakeAmount ?? 0n;
  const stakeB = b?.stakeTableEntry.stakeAmount ?? 0n;

  return Number(stakeA - stakeB);
}

/**
 * Sorts the data by the validator commission.
 */
function sortCommission(
  aPair: NodeSummaryDataTuple,
  bPair: NodeSummaryDataTuple,
): number {
  const [, , , a] = aPair;
  const [, , , b] = bPair;

  const commissionA = a?.commission.value ?? 0;
  const commissionB = b?.commission.value ?? 0;

  return Number(commissionA - commissionB);
}

/**
 * combineNodeIdentityAndVoterStats combines the node identity data with the
 * voter stats data, and turns them into a pair, in order to combine the
 * two pieces of data into one.
 */
function combineNodeIdentityAndVoterStats(
  nodeIdentities: NodeSummaryData[],
  voterData: NodeVoteParticipationStats[],
  stakeTable: Map<string, StakeTableEntryWrapper>,
  validators: Map<string, Validator>,
): NodeSummaryDataTuple[] {
  return nodeIdentities.map((nodeIdentity, index) => [
    nodeIdentity,
    voterData[index] ?? {
      totalVotes: 0,
      voteParticipation: 0,
    },
    stakeTable.get(nodeIdentity.publicKey.toString()) ?? null,
    validators.get(nodeIdentity.publicKey.toString()) ?? null,
  ]);
}

/**
 * nodeSummaryDataPairSortFunction returns a sort function that can be used to
 * sort the data pairs by the given column.
 */
function nodeSummaryDataPairSortFunction(
  column: NodeSummaryColumn,
): (a: NodeSummaryDataTuple, b: NodeSummaryDataTuple) => number {
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

    case NodeSummaryColumn.stake:
      return sortStaked;

    case NodeSummaryColumn.address:
      return sortAddress;

    case NodeSummaryColumn.commission:
      return sortCommission;

    default:
      return sortPublicKey;
  }
}

/**
 * applySortDirection wraps the given sortFunction with another function that
 * will reverse the sort, if the provided sort direction is descending.
 */
function applySortDirection(
  sortFunction: (a: NodeSummaryDataTuple, b: NodeSummaryDataTuple) => number,
  sortDir: SortDirection,
) {
  switch (sortDir) {
    case SortDirection.asc:
      return sortFunction;

    case SortDirection.desc:
      return (a: NodeSummaryDataTuple, b: NodeSummaryDataTuple) =>
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
  data: NodeSummaryDataTuple[],
  sortColumn: NodeSummaryColumn,
  sortDirection: SortDirection,
) {
  const sortFunction = applySortDirection(
    nodeSummaryDataPairSortFunction(sortColumn),
    sortDirection,
  );

  return data.sort(sortFunction);
}

const TotalStakeContext = React.createContext<bigint>(0n);

/**
 * NodeSummaryDataTable handles the display of the Node Summary Data Table.
 * Additionally, it handles the sorting of the data via the manipulation of the
 * headers of the table data.
 */
export const NodesSummaryDataTable: React.FC = () => {
  const [initialState, setState] = React.useState<
    DataTableState<NodeSummaryColumn>
  >({
    sortColumn: NodeSummaryColumn.voteParticipation,
    sortDir: SortDirection.asc,
  });

  const error = React.useContext(ErrorContext);
  const loading = React.useContext(LoadingContext);
  const data = React.useContext(DataContext) as NodeSummaryData[];
  const voterData = React.useContext(VotersParticipationStatsContext);
  const currentStakeTable = React.useContext(CurrentStakeTableContext);
  const currentValidators = React.useContext(CurrentValidatorsContext);

  if (error) {
    return <ErrorDisplay />;
  }

  if ((!data || (data instanceof Array && data.length <= 0)) && loading) {
    return <NodesSummaryDataTablePlaceholder />;
  }

  const totalStake = foldRIterator(
    (acc, entry) => acc + entry.stake,
    0n,
    currentValidators.values(),
  );

  const dataPairs = combineNodeIdentityAndVoterStats(
    data,
    voterData,
    currentStakeTable,
    currentValidators,
  );
  const { sortColumn, sortDir } = initialState;

  // Sort the data.
  const sortedData = sortDataWithColumnAndDirection(
    dataPairs,
    sortColumn,
    sortDir,
  );

  return (
    <TotalStakeContext.Provider value={totalStake}>
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
    </TotalStakeContext.Provider>
  );
};
