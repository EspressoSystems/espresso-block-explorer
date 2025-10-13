import { DataContext } from '@/components/contexts/DataProvider';
import { ErrorContext } from '@/components/contexts/ErrorProvider';
import { LoadingContext } from '@/components/contexts/LoadingProvider';
import { AsyncIterableResolver } from '@/components/data';
import DataTable, {
  Alignment,
  DataTableRowContext,
  DataTableSetStateContext,
  DataTableState,
  DataTableStateContext,
} from '@/components/data/data_table/DataTable';
import { SortDirection } from '@/components/data/types';
import { ErrorDisplay } from '@/components/error/ErrorDisplay';
import IconButton from '@/components/hid/buttons/icon_button/IconButton';
import { Card, Heading2 } from '@/components/layout';
import { Divider } from '@/components/layout/divider/divider';
import SkeletonContent from '@/components/loading/SkeletonContent';
import { RainbowKitAccountAddressContext } from '@/components/rainbowkit';
import { MoneyText, PercentageText, Text } from '@/components/text';
import CopyWalletAddress from '@/components/text/CopyWalletAddress';
import WalletAddressText from '@/components/text/WalletAddressText';
import {
  compareArrayBuffer,
  filterIterable,
  iota,
  mapIterable,
} from '@/functional/functional';
import { convertIterableToAsyncIterable } from '@/functional/functional_async';
import MonetaryValue from '@/models/block_explorer/monetary_value';
import { Validator } from '@/models/espresso/stake_table/validator';
import Money from '@/visual/icons/Money';
import Payments from '@/visual/icons/Payments';
import { CurrentValidatorsContext } from 'pages';
import React from 'react';
import { StakingModalControlsContext } from '../staking_modal/context';

type YourValidatorData = readonly [Validator, bigint];
const YourValidatorsContext = React.createContext<YourValidatorData[]>([]);

enum YourValidatorColumn {
  validator = 'validator',
  address = 'address',
  commission = 'commission',
  delegated = 'delegated',
  stake = 'stake',
  actions = 'actions',
}

const ValidatorCell: React.FC = () => {
  const [validator] = React.useContext(
    DataTableRowContext,
  ) as YourValidatorData;

  // We want to display information to identify the validator to the user.
  // We'll have a preference for the validator's name, then address.

  const address = validator?.account ?? null;

  if (address === null) {
    return <Text text="-" />;
  }

  return (
    <CopyWalletAddress value={address}>
      <WalletAddressText value={address} />
    </CopyWalletAddress>
  );
};

const CommissionCell: React.FC = () => {
  const [validator] = React.useContext(
    DataTableRowContext,
  ) as YourValidatorData;

  // We want to display the commission percentage of the validator.

  if (validator.commission.value <= 0) {
    return <Text text="-" />;
  }

  return <PercentageText percentage={validator.commission.valueOf()} />;
};

const DelegatedCell: React.FC = () => {
  const [, delegated] = React.useContext(
    DataTableRowContext,
  ) as YourValidatorData;

  // We want to display the amount of ESP delegated to this validator.

  if (delegated <= 0n) {
    return <Text text="-" />;
  }

  return <MoneyText money={MonetaryValue.ESP(delegated)} />;
};

const StakeCell: React.FC = () => {
  const [validator] = React.useContext(
    DataTableRowContext,
  ) as YourValidatorData;

  // We want to display the stake of the validator.

  if (validator.stake <= 0n) {
    return <Text text="-" />;
  }

  return <MoneyText money={MonetaryValue.ESP(validator.stake)} />;
};

/**
 * Delegate is a component that will render the delegate button for the node.
 *
 * This is expected to be a column in a DataTable.
 */
const DelegateCell: React.FC = () => {
  const [validator] = React.useContext(
    DataTableRowContext,
  ) as YourValidatorData;
  const modalControls = React.useContext(StakingModalControlsContext);

  if (validator === null || validator.account.address === null) {
    return <Text text="-" />;
  }

  return (
    <>
      <IconButton title="UnStake" onClick={() => {}}>
        <Money />
      </IconButton>
      <IconButton
        title="Stake"
        onClick={() => {
          modalControls.showModal(validator.account.toString());
        }}
      >
        <Payments />
      </IconButton>
    </>
  );
};

function sortAddress(a: YourValidatorData, b: YourValidatorData): number {
  const [validatorA] = a;
  const [validatorB] = b;

  return compareArrayBuffer(
    validatorA.account.address,
    validatorB.account.address,
  );
}

function sortCommission(a: YourValidatorData, b: YourValidatorData): number {
  const [validatorA] = a;
  const [validatorB] = b;

  return validatorA.commission.valueOf() - validatorB.commission.valueOf();
}

function sortDelegated(a: YourValidatorData, b: YourValidatorData): number {
  const [, delegatedA] = a;
  const [, delegatedB] = b;

  return Number(delegatedA - delegatedB);
}

function sortStake(a: YourValidatorData, b: YourValidatorData): number {
  const [validatorA] = a;
  const [validatorB] = b;

  return Number(validatorA.stake - validatorB.stake);
}

function nodeSummaryDataPairSortFunction(
  column: YourValidatorColumn,
): (a: YourValidatorData, b: YourValidatorData) => number {
  switch (column) {
    case YourValidatorColumn.address:
      return sortAddress;

    case YourValidatorColumn.commission:
      return sortCommission;

    case YourValidatorColumn.delegated:
      return sortDelegated;

    case YourValidatorColumn.stake:
      return sortStake;

    default:
      return sortAddress;
  }
}

/**
 * applySortDirection wraps the given sortFunction with another function that
 * will reverse the sort, if the provided sort direction is descending.
 */
function applySortDirection(
  sortFunction: (a: YourValidatorData, b: YourValidatorData) => number,
  sortDir: SortDirection,
) {
  switch (sortDir) {
    case SortDirection.asc:
      return sortFunction;

    case SortDirection.desc:
      return (a: YourValidatorData, b: YourValidatorData) =>
        -sortFunction(a, b);

    default:
      return sortFunction;
  }
}

function sortDataWithColumnAndDirection(
  data: YourValidatorData[],
  sortColumn: YourValidatorColumn,
  sortDirection: SortDirection,
) {
  const sortFunction = applySortDirection(
    nodeSummaryDataPairSortFunction(sortColumn),
    sortDirection,
  );

  return data.sort(sortFunction);
}

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
          label: 'Address',
          columnType: YourValidatorColumn.address,
          buildCell: props.components[0],
        },
        {
          label: 'Commission',
          columnType: YourValidatorColumn.commission,
          buildCell: props.components[1],
          alignment: Alignment.end,
        },
        {
          label: 'Your Delegated Stake',
          columnType: YourValidatorColumn.delegated,
          buildCell: props.components[2],
          alignment: Alignment.end,
        },
        {
          label: 'Total Stake',
          columnType: YourValidatorColumn.stake,
          buildCell: props.components[3],
          alignment: Alignment.end,
        },
        {
          label: 'Unstake / Stake',
          columnType: YourValidatorColumn.actions,
          buildCell: props.components[4],
          alignment: Alignment.end,
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

export const NodesSummaryDataTablePopulated: React.FC = () => {
  // We have an active wallet, versus we don't have an active wallet.
  return (
    <NodesSummaryDataTableLayout
      components={[
        ValidatorCell,
        CommissionCell,
        DelegatedCell,
        StakeCell,
        DelegateCell,
      ]}
    />
  );
};

export const YourDelegationsDataTable: React.FC = () => {
  const [initialState, setState] = React.useState<
    DataTableState<YourValidatorColumn>
  >({
    sortColumn: YourValidatorColumn.delegated,
    sortDir: SortDirection.desc,
  });

  const error = React.useContext(ErrorContext);
  const loading = React.useContext(LoadingContext);
  const data = React.useContext(DataContext) as YourValidatorData[];

  if (error) {
    return <ErrorDisplay />;
  }

  if (!data || (data instanceof Array && data.length <= 0 && loading)) {
    return <NodesSummaryDataTablePlaceholder />;
  }

  const { sortColumn, sortDir } = initialState;

  // Sort the data.
  const sortedData = sortDataWithColumnAndDirection(data, sortColumn, sortDir);

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

const YourDelegationsTable: React.FC = () => {
  const myValidators = React.useContext(YourValidatorsContext);
  const stream = convertIterableToAsyncIterable([myValidators]);

  return (
    <AsyncIterableResolver asyncIterable={stream}>
      <YourDelegationsDataTable />
    </AsyncIterableResolver>
  );
};

const YourValidatorsContent: React.FC = () => {
  const validators = React.useContext(CurrentValidatorsContext);
  const address = React.useContext(RainbowKitAccountAddressContext);

  if (!address) {
    return <></>;
  }

  const myValidators = Array.from(
    mapIterable(
      filterIterable(validators.values(), (validator) =>
        validator.delegators.has(address.toLowerCase()),
      ),
      (validator) =>
        [validator, validator.delegators.get(address.toLowerCase())!] as const,
    ),
  );

  if (myValidators.length <= 0) {
    // We don't have any current validators, so we don't have anything to
    // display to the user.
    // Instead, we have an opportunity to encourage the user to delegate to a
    // validator.  (Provided that they have a balance to delegate)

    return (
      <>
        <p>
          <Text text="Want to contribute to network security?" />
        </p>
        <p>
          <Text text="You can delegate a portion of your ESP to a validator to earn rewards when they produce blocks." />
        </p>
      </>
    );
  }

  return (
    <YourValidatorsContext.Provider value={myValidators}>
      <YourDelegationsTable />
    </YourValidatorsContext.Provider>
  );
};

export interface YourValidatorsSectionProps {}

export const YourValidatorsSection: React.FC<
  YourValidatorsSectionProps
> = () => {
  return (
    <>
      <Divider />
      <br />
      <Heading2>
        <Text text="Your Validators" />
      </Heading2>
      <br />
      <Card>
        <YourValidatorsContent />
      </Card>
    </>
  );
};
