import UnimplementedError from '@/errors/UnimplementedError';
import { compareArrayBuffer } from '@/functional/functional';
import { ActiveNodeSetEntry } from '@/service/espresso_l1_validator_service/common/active_node_set_entry';
import { NodeSetEntry } from '@/service/espresso_l1_validator_service/common/node_set_entry';
import { FullNodeSetSnapshot } from '@/service/espresso_l1_validator_service/validators_all/full_node_set_snapshot';
import React from 'react';
import { AllValidatorsContext } from 'sites/delegation_ui/contexts/all_validators_context';
import { ConsensusMapContext } from 'sites/delegation_ui/contexts/consensus_map_context';
import { RankMapContext } from 'sites/delegation_ui/contexts/rank_map_context';

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

export const TableSortControlsContext = React.createContext<
  TableControls<unknown>
>({
  sortBy: () => {},
});

export const TableSortStateContext = React.createContext<
  TableSortState<CellType>
>({
  sortBy: CellType.totalStake,
  sortDirection: SortDirection.desc,
});

/**
 * useValidatorTableSortState is a custom hook that manages the sorting state
 * for the validator table, providing the current state and controls to modify
 * it.
 */
export const useValidatorTableSortState = () => {
  const [tableState, setTableState] = React.useState<TableSortState<CellType>>({
    sortBy: CellType.totalStake,
    sortDirection: SortDirection.desc,
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
type ValidatorSortTuple = [NodeSetEntry, number, null | ActiveNodeSetEntry];

/**
 * sortByRank sorts validators by their rank.
 */
function sortByRank(a: ValidatorSortTuple, b: ValidatorSortTuple) {
  return a[1] - b[1];
}

/**
 * sortByValidator sorts validators by their address.
 */
function sortByValidator(a: ValidatorSortTuple, b: ValidatorSortTuple) {
  return compareArrayBuffer(a[0].address, b[0].address);
}

/**
 * sortByFee sorts validators by their fee (commission).
 */
function sortByFee(a: ValidatorSortTuple, b: ValidatorSortTuple) {
  return Number(a[0].commission.valueOf() - b[0].commission.valueOf());
}

/**
 * sortByMissedSlots sorts validators by their missed slots.
 */
function sortByMissedSlots(a: ValidatorSortTuple, b: ValidatorSortTuple) {
  const aMissed = a[2]?.leaderParticipation.ratio ?? -1;
  const bMissed = b[2]?.leaderParticipation.ratio ?? -1;
  return aMissed - bMissed;
}

/**
 * sortByParticipationRate sorts validators by their participation rate.
 */
function sortByParticipationRate(a: ValidatorSortTuple, b: ValidatorSortTuple) {
  const aRate = a[2]?.voterParticipation.ratio ?? -1;
  const bRate = b[2]?.voterParticipation.ratio ?? -1;
  return aRate - bRate;
}

/**
 * sortByHotShotConsensus sorts validators by their HotShot consensus status.
 */
function sortByHotShotConsensus(a: ValidatorSortTuple, b: ValidatorSortTuple) {
  return Number(Boolean(a[2])) - Number(Boolean(b[2]));
}

/**
 * sortByStake sorts validators by their total stake.
 */
function sortByStake(a: ValidatorSortTuple, b: ValidatorSortTuple) {
  return Number(a[0].stake - b[0].stake);
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
  allValidators: null | FullNodeSetSnapshot,
  tableState: TableSortState<CellType>,
  rankMap: Map<`0x${string}`, number>,
  consensusSet: Map<`0x${string}`, ActiveNodeSetEntry>,
): null | FullNodeSetSnapshot {
  if (!allValidators) {
    return allValidators;
  }

  const { sortBy, sortDirection } = tableState;
  const sortDirectionFunction = getSortDirection(sortDirection);
  const sortFunction = sortDirectionFunction(getSortFunction(sortBy));

  return new FullNodeSetSnapshot(
    allValidators.l1Block,
    allValidators.nodes
      .map((node) => {
        const key = node.addressText;
        return [
          node,
          rankMap.get(key) ?? Number.MAX_SAFE_INTEGER,
          consensusSet.get(key) ?? null,
        ] as ValidatorSortTuple;
      })
      .sort(sortFunction)
      .map((tuple) => tuple[0]),
  );
}

/**
 * ValidatorTableSortStateProvider is a context provider that manages
 * the sorting state for the validator table and provides sorted validator
 * data to its children.
 */
export const ValidatorTableSortStateProvider: React.FC<
  React.PropsWithChildren
> = (props) => {
  const { tableState, tableControls } = useValidatorTableSortState();
  const allValidators = React.useContext(AllValidatorsContext);
  const rankMap = React.useContext(RankMapContext);
  const consensusMap = React.useContext(ConsensusMapContext);

  // We need to sort the Validators according to the Table State
  const sortedValues = sortWithState(
    allValidators,
    tableState,
    rankMap,
    consensusMap,
  );

  return (
    <AllValidatorsContext.Provider value={sortedValues}>
      <TableSortStateContext.Provider value={tableState}>
        <TableSortControlsContext.Provider value={tableControls}>
          {props.children}
        </TableSortControlsContext.Provider>
      </TableSortStateContext.Provider>
    </AllValidatorsContext.Provider>
  );
};
