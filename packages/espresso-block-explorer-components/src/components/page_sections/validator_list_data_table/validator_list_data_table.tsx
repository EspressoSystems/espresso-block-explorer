import { ErrorContext, LoadingContext } from '@/components/contexts';
import { DataContext } from '@/components/contexts/DataProvider';
import { SortDirection } from '@/components/data/types';
import { ErrorDisplay } from '@/components/error/ErrorDisplay';
import IconButton from '@/components/hid/buttons/icon_button/IconButton';
import { MoneyText } from '@/components/text';
import CopyWalletAddress from '@/components/text/CopyWalletAddress';
import PercentageText from '@/components/text/PercentageText';
import WalletAddressText from '@/components/text/WalletAddressText';
import { ChevronUp } from '@/components/visual';
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
import { StakingModalControlsContext } from '../staking_modal/context';
import { ValidatorData, ValidatorSummaryColumn } from './validator_list_loader';

/**
 * ValidatorSummaryDataTuple is a tuple that contains the data for a single
 * node summary row.
 */
type ValidatorSummaryDataTuple = [
  ValidatorData,
  StakeTableEntryWrapper | null,
  Validator | null,
];

/**
 * NameCell is a component that will render the name of the node.
 *
 * This is expected to be a column in a DataTable.
 */
const NameCell: React.FC = () => {
  const [row] = React.useContext(
    DataTableRowContext,
  ) as ValidatorSummaryDataTuple;

  if (row.name === null || row.name === '') {
    return <Text text="-" />;
  }

  return <Text text={row.name} />;
};

/**
 * ValidatorAddress is a component that will render the validator's
 * address, if it exists.
 *
 * This is expected to be a column in a DataTable.
 */
const ValidatorAddress: React.FC = () => {
  const [, , row] = React.useContext(
    DataTableRowContext,
  ) as ValidatorSummaryDataTuple;
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
 * Commission is a component that will render the commission of the node.
 *
 * This is expected to be a column in a DataTable.
 */
const Commission: React.FC = () => {
  const [, , row] = React.useContext(
    DataTableRowContext,
  ) as ValidatorSummaryDataTuple;
  const commission = row?.commission ?? null;

  if (commission === null) {
    return <Text text="-" />;
  }

  return <PercentageText percentage={commission.valueOf()} />;
};

/**
 * StakedCell is a component that will render the amount of stake
 * that the node has, as well as the percentage of the total stake.
 *
 * This is expected to be a column in a DataTable.
 */
const StakedCell: React.FC = () => {
  const totalStake = React.useContext(TotalStakeContext);
  const [, , row] = React.useContext(
    DataTableRowContext,
  ) as ValidatorSummaryDataTuple;

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
  const [row] = React.useContext(
    DataTableRowContext,
  ) as ValidatorSummaryDataTuple;

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
  const [row] = React.useContext(
    DataTableRowContext,
  ) as ValidatorSummaryDataTuple;

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

/* Delegate is a component that will render the delegate button for the node.
 *
 * This is expected to be a column in a DataTable.
 */
const Delegate: React.FC = () => {
  const [, , row] = React.useContext(
    DataTableRowContext,
  ) as ValidatorSummaryDataTuple;
  const modalControls = React.useContext(StakingModalControlsContext);

  if (row === null || row.account.address === null) {
    return <Text text="-" />;
  }

  return (
    <>
      <IconButton
        title="Stake"
        onClick={() => {
          modalControls.showModal(row.account.toString());
        }}
      >
        <ChevronUp />
      </IconButton>
    </>
  );
};

interface ValidatorListDataTableLayoutProps {
  components: [
    React.ComponentType,
    React.ComponentType,
    React.ComponentType,
    React.ComponentType,
    React.ComponentType,
    React.ComponentType,
  ];
}

/**
 * ValidatorListDataTableLayout is a component that renders the layout
 * of the Node Summary Data Table.
 */
const ValidatorListDataTableLayout: React.FC<
  ValidatorListDataTableLayoutProps
> = (props) => {
  return (
    <DataTable
      columns={[
        {
          label: 'Address',
          columnType: ValidatorSummaryColumn.address,
          buildCell: props.components[0],
        },
        {
          label: 'Company',
          columnType: ValidatorSummaryColumn.companyName,
          buildCell: props.components[1],
        },
        {
          label: 'Website',
          columnType: ValidatorSummaryColumn.companyWebSite,
          buildCell: props.components[2],
        },
        {
          label: 'Commission',
          columnType: ValidatorSummaryColumn.commission,
          buildCell: props.components[3],
          alignment: Alignment.end,
        },
        {
          label: 'Total Stake',
          columnType: ValidatorSummaryColumn.stake,
          buildCell: props.components[4],
          alignment: Alignment.end,
        },
        {
          label: 'Stake',
          columnType: ValidatorSummaryColumn.actions,
          buildCell: props.components[5],
          alignment: Alignment.center,
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
      <ValidatorListDataTableLayout
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

/**
 * NodesSummaryDataTablePopulated is a component that renders the populated
 * version of the Node Summary Data Table.
 */
export const NodesSummaryDataTablePopulated: React.FC = () => {
  // We have an active wallet, versus we don't have an active wallet.
  return (
    <ValidatorListDataTableLayout
      components={[
        ValidatorAddress,
        CompanyName,
        WebSiteCell,
        Commission,
        StakedCell,
        Delegate,
      ]}
    />
  );
};

/**
 * sortPublicKey sorts the data by the node public key.
 */
function sortPublicKey(
  aPair: ValidatorSummaryDataTuple,
  bPair: ValidatorSummaryDataTuple,
): number {
  const [a] = aPair;
  const [b] = bPair;
  return compareArrayBuffer(a.publicKey.data, b.publicKey.data);
}

/**
 * sortName sorts the data by the node name.
 */
function sortName(
  aPair: ValidatorSummaryDataTuple,
  bPair: ValidatorSummaryDataTuple,
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
  aPair: ValidatorSummaryDataTuple,
  bPair: ValidatorSummaryDataTuple,
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
  aPair: ValidatorSummaryDataTuple,
  bPair: ValidatorSummaryDataTuple,
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
 * sortAddress sorts the data by the validator address.
 */
function sortAddress(
  aPair: ValidatorSummaryDataTuple,
  bPair: ValidatorSummaryDataTuple,
): number {
  const [, , a] = aPair;
  const [, , b] = bPair;

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
  aPair: ValidatorSummaryDataTuple,
  bPair: ValidatorSummaryDataTuple,
): number {
  const [, a] = aPair;
  const [, b] = bPair;

  const stakeA = a?.stakeTableEntry.stakeAmount ?? 0n;
  const stakeB = b?.stakeTableEntry.stakeAmount ?? 0n;

  return Number(stakeA - stakeB);
}

/**
 * Sorts the data by the validator commission.
 */
function sortCommission(
  aPair: ValidatorSummaryDataTuple,
  bPair: ValidatorSummaryDataTuple,
): number {
  const [, , a] = aPair;
  const [, , b] = bPair;

  const commissionA = a?.commission.value ?? 0;
  const commissionB = b?.commission.value ?? 0;

  return Number(commissionA - commissionB);
}

/**
 * combineNodeIdentityStakeTableAndValidators combines the node identity data
 * with the Stake Table and Validator data to produce a list of tuples that
 * can be used to render the Validator List Data Table.
 */
function combineNodeIdentityStakeTableAndValidators(
  nodeIdentities: ValidatorData[],
  stakeTable: Map<string, StakeTableEntryWrapper>,
  validators: Map<string, Validator>,
): ValidatorSummaryDataTuple[] {
  return nodeIdentities.map((nodeIdentity) => [
    nodeIdentity,
    stakeTable.get(nodeIdentity.publicKey.toString()) ?? null,
    validators.get(nodeIdentity.publicKey.toString()) ?? null,
  ]);
}

/**
 * validatorSummaryDataTupleSortFunction returns a sort function that can be
 * used to sort the data pairs by the given column.
 */
function validatorSummaryDataTupleSortFunction(
  column: ValidatorSummaryColumn,
): (a: ValidatorSummaryDataTuple, b: ValidatorSummaryDataTuple) => number {
  switch (column) {
    case ValidatorSummaryColumn.publicKey:
      return sortPublicKey;

    case ValidatorSummaryColumn.name:
      return sortName;

    case ValidatorSummaryColumn.companyName:
      return sortCompanyName;

    case ValidatorSummaryColumn.companyWebSite:
      return sortCompanyWebSite;

    case ValidatorSummaryColumn.stake:
      return sortStaked;

    case ValidatorSummaryColumn.address:
      return sortAddress;

    case ValidatorSummaryColumn.commission:
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
  sortFunction: (
    a: ValidatorSummaryDataTuple,
    b: ValidatorSummaryDataTuple,
  ) => number,
  sortDir: SortDirection,
) {
  switch (sortDir) {
    case SortDirection.asc:
      return sortFunction;

    case SortDirection.desc:
      return (a: ValidatorSummaryDataTuple, b: ValidatorSummaryDataTuple) =>
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
  data: ValidatorSummaryDataTuple[],
  sortColumn: ValidatorSummaryColumn,
  sortDirection: SortDirection,
) {
  const sortFunction = applySortDirection(
    validatorSummaryDataTupleSortFunction(sortColumn),
    sortDirection,
  );

  return data.sort(sortFunction);
}

const TotalStakeContext = React.createContext<bigint>(0n);

/**
 * ValidatorListDataTable handles the display of the Validator List.
 * Additionally, it handles the sorting of the data via the manipulation of the
 * headers of the table data.
 */
export const ValidatorListDataTable: React.FC = () => {
  const [initialState, setState] = React.useState<
    DataTableState<ValidatorSummaryColumn>
  >({
    sortColumn: ValidatorSummaryColumn.stake,
    sortDir: SortDirection.desc,
  });

  const error = React.useContext(ErrorContext);
  const loading = React.useContext(LoadingContext);
  const data = React.useContext(DataContext) as ValidatorData[];
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

  const dataPairs = combineNodeIdentityStakeTableAndValidators(
    data,
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
