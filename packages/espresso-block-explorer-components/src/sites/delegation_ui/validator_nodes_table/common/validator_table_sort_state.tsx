import { CurrentDelegationsContext } from '@/delegation_ui/contexts/current_delegations_context';
import { UnimplementedError } from '@/errors/unimplemented_error';
import {
  compareArrayBuffer,
  compareIterables,
  mapIterable,
} from '@/functional/functional';
import { ActiveNodeSetEntry } from '@/service/espresso_staking_api_service/common/active_node_set_entry';
import { Delegation } from '@/service/espresso_staking_api_service/common/delegation';
import { NodeSetEntry } from '@/service/espresso_staking_api_service/common/node_set_entry';
import { PendingWithdrawal } from '@/service/espresso_staking_api_service/common/pending_withdrawal';
import { RatioRational } from '@/service/espresso_staking_api_service/common/ratio';
import {
  AllValidatorsContext,
  NodeAddressListContext,
} from '@/sites/delegation_ui/contexts/all_validators_context';
import { ConsensusMapContext } from '@/sites/delegation_ui/contexts/consensus_map_context';
import { RankMapContext } from '@/sites/delegation_ui/contexts/rank_map_context';
import { default as React } from 'react';
import { PendingExitsContext } from '../../contexts/pending_exits_context';
import { PendingUndelegationsContext } from '../../contexts/pending_undelegations_context';

/**
 * CellType enumerates the different types of columns that can be
 * sorted in the validator table.
 */
export enum CellType {
  rank,
  validator,
  totalStake,
  fee,
  missedSlots,
  participationRate,
  hotShotConsensus,
  myStake,

  // Extra Types for specific Tables
  pendingExit,
  pendingClaim,
}

/**
 * SortDirection enumerates the possible directions for sorting the table.
 */
export enum SortDirection {
  asc,
  desc,
}

/**
 * TableSortState represents the current state of sorting for any table.
 */
export interface TableSortState<T> {
  sortBy: T;
  sortDirection: SortDirection;
}

export interface TableControls<T> {
  sortBy(newSortBy: T): void;
}

/**
 * TableSortControlsContext provides the controls to modify the table
 * sorting state for a given sort by column.
 */
export const TableSortControlsContext = React.createContext<
  TableControls<unknown>
>({
  sortBy: () => {},
});

/**
 * TableSortStateContext provides the current sorting state of the table.
 */
export const TableSortStateContext = React.createContext<
  TableSortState<CellType>
>({
  sortBy: CellType.totalStake,
  sortDirection: SortDirection.desc,
});

/**
 * TableSortByContext provides the current column type that is being
 * sorted.
 */
export const TableColumnSortByContext = React.createContext<CellType | null>(
  null,
);

/**
 * useValidatorTableSortState is a custom hook that manages the sorting state
 * for the validator table, providing the current state and controls to modify
 * it.
 */
export const useValidatorTableSortState = (
  sortByCell: CellType = CellType.totalStake,
  sortDirection: SortDirection = SortDirection.desc,
) => {
  const [tableState, setTableState] = React.useState<TableSortState<CellType>>({
    sortBy: sortByCell,
    sortDirection,
  });

  const sortBy = (newSortBy: CellType) => {
    setTableState((prevState) => {
      if (prevState.sortBy !== newSortBy) {
        // Just Change the column being sorted
        return {
          ...prevState,
          sortBy: newSortBy,
        };
      }

      // We need to change the sort direction
      switch (prevState.sortDirection) {
        case SortDirection.asc:
          return {
            ...prevState,
            sortDirection: SortDirection.desc,
          };
        case SortDirection.desc:
          return {
            ...prevState,
            sortDirection: SortDirection.asc,
          };
      }
    });
  };

  return {
    tableState,
    tableControls: {
      sortBy,
    },
  };
};

/**
 * ValidatorSortTuple is a tuple type used for sorting validators.
 */
type ValidatorSortTuple = readonly [
  NodeSetEntry,
  number,
  null | ActiveNodeSetEntry,
  null | PendingWithdrawal,
  null | PendingWithdrawal,
  null | Delegation,
];

const TUPLE_INDEX_NODE_SET_ENTRY = 0;
const TUPLE_INDEX_RANK = 1;
const TUPLE_INDEX_ACTIVE_NODE = 2;
const TUPLE_INDEX_PENDING_EXIT = 3;
const TUPLE_INDEX_PENDING_CLAIM = 4;
const TUPLE_INDEX_CURRENT_DELEGATION = 5;

function valueOrFallback(
  input: undefined | null | number,
  fallback: number = -1,
): number {
  if (
    input === undefined ||
    input === null ||
    Number.isNaN(input) ||
    !Number.isFinite(input)
  ) {
    return fallback;
  }

  return input;
}

/**
 * sortByRank sorts validators by their rank.
 */
function sortByRank(a: ValidatorSortTuple, b: ValidatorSortTuple) {
  return a[TUPLE_INDEX_RANK] - b[TUPLE_INDEX_RANK];
}

// An empty ArrayBuffer for comparison purposes
const emptyArrayBuffer = new ArrayBuffer(0);

/**
 * sortByValidator sorts validators by their address.
 */
function sortByValidator(a: ValidatorSortTuple, b: ValidatorSortTuple) {
  return compareArrayBuffer(
    a[TUPLE_INDEX_NODE_SET_ENTRY]?.address ?? emptyArrayBuffer,
    b[TUPLE_INDEX_NODE_SET_ENTRY]?.address ?? emptyArrayBuffer,
  );
}

/**
 * sortByFee sorts validators by their fee (commission).
 */
function sortByFee(a: ValidatorSortTuple, b: ValidatorSortTuple) {
  return Number(
    valueOrFallback(a[TUPLE_INDEX_NODE_SET_ENTRY]?.commission.valueOf(), -1) -
      valueOrFallback(b[TUPLE_INDEX_NODE_SET_ENTRY]?.commission.valueOf(), -1),
  );
}

/**
 * sortByMissedSlots sorts validators by their missed slots.
 */
function sortByMissedSlots(a: ValidatorSortTuple, b: ValidatorSortTuple) {
  const aParticipation = a[TUPLE_INDEX_ACTIVE_NODE]?.leaderParticipation;
  const bParticipation = b[TUPLE_INDEX_ACTIVE_NODE]?.leaderParticipation;
  const aMissed = valueOrFallback(aParticipation?.ratio, -1);
  const bMissed = valueOrFallback(bParticipation?.ratio, -1);

  if (aMissed === bMissed && aMissed !== -1) {
    if (
      aParticipation instanceof RatioRational &&
      bParticipation instanceof RatioRational
    ) {
      // Which number "weighs" more?
      const aDenom = aParticipation.denominator;
      const bDenom = bParticipation.denominator;

      return Number(aDenom - bDenom);
    }
  }

  return aMissed - bMissed;
}

/**
 * sortByParticipationRate sorts validators by their participation rate.
 */
function sortByParticipationRate(a: ValidatorSortTuple, b: ValidatorSortTuple) {
  const aRate = valueOrFallback(
    a[TUPLE_INDEX_ACTIVE_NODE]?.voterParticipation?.ratio,
    -1,
  );
  const bRate = valueOrFallback(
    b[TUPLE_INDEX_ACTIVE_NODE]?.voterParticipation?.ratio,
    -1,
  );
  return aRate - bRate;
}

/**
 * sortByHotShotConsensus sorts validators by their HotShot consensus status.
 */
function sortByHotShotConsensus(a: ValidatorSortTuple, b: ValidatorSortTuple) {
  return (
    Number(Boolean(a[TUPLE_INDEX_ACTIVE_NODE])) -
    Number(Boolean(b[TUPLE_INDEX_ACTIVE_NODE]))
  );
}

/**
 * sortByStake sorts validators by their total stake.
 */
function sortByStake(a: ValidatorSortTuple, b: ValidatorSortTuple) {
  return Number(
    (a[TUPLE_INDEX_NODE_SET_ENTRY]?.stake ?? 0n) -
      (b[TUPLE_INDEX_NODE_SET_ENTRY]?.stake ?? 0n),
  );
}

/**
 *  sortByMyStake sorts validators by the stake of the user in that validator.
 */
function sortByMyStake(a: ValidatorSortTuple, b: ValidatorSortTuple) {
  return Number(
    (a[TUPLE_INDEX_CURRENT_DELEGATION]?.amount ?? 0n) -
      (b[TUPLE_INDEX_CURRENT_DELEGATION]?.amount ?? 0n),
  );
}

/**
 * sortByPendingExit sorts validators by their pending exit amount.
 */
function sortByPendingExit(a: ValidatorSortTuple, b: ValidatorSortTuple) {
  const aExit = a[TUPLE_INDEX_PENDING_EXIT]?.amount.valueOf() ?? 0n;
  const bExit = b[TUPLE_INDEX_PENDING_EXIT]?.amount.valueOf() ?? 0n;
  return Number(aExit - bExit);
}

/**
 * sortByPendingClaim sorts validators by their pending claim amount.
 */
function sortByPendingClaim(a: ValidatorSortTuple, b: ValidatorSortTuple) {
  const aClaim = a[TUPLE_INDEX_PENDING_CLAIM]?.amount.valueOf() ?? 0n;
  const bClaim = b[TUPLE_INDEX_PENDING_CLAIM]?.amount.valueOf() ?? 0n;
  return Number(aClaim - bClaim);
}

/**
 * getSortFunction returns the appropriate sorting function based on the
 * specified CellType.
 */
function getSortFunction(
  sortBy: CellType,
): (a: ValidatorSortTuple, b: ValidatorSortTuple) => number {
  switch (sortBy) {
    case CellType.rank:
      return sortByRank;

    case CellType.validator:
      return sortByValidator;

    case CellType.totalStake:
      return sortByStake;

    case CellType.fee:
      return sortByFee;

    case CellType.missedSlots:
      return sortByMissedSlots;

    case CellType.participationRate:
      return sortByParticipationRate;

    case CellType.hotShotConsensus:
      return sortByHotShotConsensus;

    case CellType.myStake:
      return sortByMyStake;

    case CellType.pendingExit:
      return sortByPendingExit;

    case CellType.pendingClaim:
      return sortByPendingClaim;

    default:
      throw new UnimplementedError();
  }
}

/**
 * getSortDirection returns a function that applies the specified sort
 * direction to a given comparison function.
 */
function getSortDirection(
  sortDirection: SortDirection,
): (
  fn: (a: ValidatorSortTuple, b: ValidatorSortTuple) => number,
) => (a: ValidatorSortTuple, b: ValidatorSortTuple) => number {
  switch (sortDirection) {
    case SortDirection.asc:
      return (fn) => fn;
    case SortDirection.desc:
      return (fn) => (a, b) => -fn(a, b);
  }
}

/**
 * sortWithState sorts the validators based on the current table sort state,
 * rank map, and consensus set.
 */
function sortWithState(
  nodeAddressList: `0x${string}`[],
  allValidators: Map<`0x${string}`, NodeSetEntry>,
  tableState: TableSortState<CellType>,
  rankMap: Map<`0x${string}`, number>,
  consensusSet: Map<`0x${string}`, ActiveNodeSetEntry>,
  pendingExits: Map<`0x${string}`, PendingWithdrawal>,
  pendingClaims: Map<`0x${string}`, PendingWithdrawal>,
  currentDelegations: Map<`0x${string}`, Delegation>,
): `0x${string}`[] {
  const { sortBy, sortDirection } = tableState;
  const sortDirectionFunction = getSortDirection(sortDirection);
  const sortFunction = sortDirectionFunction(getSortFunction(sortBy));

  const sortedAddresses = Array.from(
    mapIterable(nodeAddressList, (address) => {
      return [
        allValidators.get(address)!,
        rankMap.get(address) ?? Number.MAX_SAFE_INTEGER,
        consensusSet.get(address) ?? null,
        pendingExits.get(address) ?? null,
        pendingClaims.get(address) ?? null,
        currentDelegations.get(address) ?? null,
      ] as const;
    }),
  )
    .sort(sortFunction)
    .map((tuple) => tuple[TUPLE_INDEX_NODE_SET_ENTRY]?.addressText ?? '');

  return sortedAddresses;
}

export interface ValidatorTableSortStateProviderProps
  extends React.PropsWithChildren {
  sortBy?: CellType;
  sortDirection?: SortDirection;
}

/**
 * ValidatorTableSortStateProvider is a context provider that manages
 * the sorting state for the validator table and provides sorted validator
 * data to its children.
 */
export const ValidatorTableSortStateProvider: React.FC<
  ValidatorTableSortStateProviderProps
> = (props) => {
  const { tableState, tableControls } = useValidatorTableSortState(
    props.sortBy,
    props.sortDirection,
  );
  const nodeAddressList = React.useContext(NodeAddressListContext);
  const allValidators = React.useContext(AllValidatorsContext);
  const rankMap = React.useContext(RankMapContext);
  const consensusMap = React.useContext(ConsensusMapContext);
  const pendingExits = React.useContext(PendingExitsContext);
  const pendingClaims = React.useContext(PendingUndelegationsContext);
  const currentDelegations = React.useContext(CurrentDelegationsContext);

  const [sortedValues, setSortedValues] = React.useState<`0x${string}`[]>([]);

  // The process of sorting the list computes a new array every time, which
  // is expected.  If we were to pass this naively into a context, the
  // downstream consumers of the context would be revaluated causing a lot
  // of unnecessary component re-evaluations.
  //
  // To avoid this, we compare the sorted state of the List to the previous
  // sorted state, and only update the state if it has changed.
  React.useEffect(() => {
    let setNextSortedValues = setSortedValues;
    const nextSortedValues = sortWithState(
      nodeAddressList,
      allValidators,
      tableState,
      rankMap,
      consensusMap,
      pendingExits,
      pendingClaims,
      currentDelegations,
    );

    // Compare the new sorted values with the current ones, if they are not
    // different, do not update the state to avoid unnecessary re-evaluations.

    if (
      compareIterables(nextSortedValues, sortedValues, (a, b) =>
        a.localeCompare(b),
      ) !== 0
    ) {
      setNextSortedValues(nextSortedValues);
    }

    return () => {
      setNextSortedValues = () => {};
    };
  }, [
    allValidators,
    tableState,
    rankMap,
    consensusMap,
    nodeAddressList,
    sortedValues,
    pendingExits,
    pendingClaims,
    currentDelegations,
  ]);

  // We need to sort the Validators according to the Table State
  return (
    <NodeAddressListContext.Provider value={sortedValues}>
      <TableSortStateContext.Provider value={tableState}>
        <TableSortControlsContext.Provider value={tableControls}>
          {props.children}
        </TableSortControlsContext.Provider>
      </TableSortStateContext.Provider>
    </NodeAddressListContext.Provider>
  );
};
