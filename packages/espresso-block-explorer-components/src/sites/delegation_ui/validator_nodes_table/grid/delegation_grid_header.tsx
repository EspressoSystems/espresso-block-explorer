import React from 'react';
import { FeeHeadCell } from '../common/cells/fee_head_cell';
import { HotShotConsensusHeadCell } from '../common/cells/hot_shot_consensus_head_cell';
import { MissedSlotsHeadCell } from '../common/cells/missed_slots_head_cell';
import { ParticipationRateHeadCell } from '../common/cells/participation_rate_head_cell';
import { RankHeadCell } from '../common/cells/rank_head_cell';
import { TotalStakeHeadCell } from '../common/cells/total_stake_head_cell';
import { ValidatorHeadCell } from '../common/cells/validator_head_cell';
import {
  CellType,
  TableSortControlsContext,
} from '../common/validator_table_sort_state';
import { GridHeadCell } from './grid_head_cell';

/**
 * DelegationGridHeader is a component that renders
 * the header row of the delegation grid with sortable columns.
 */
export const DelegationGridHeader: React.FC = () => {
  const { sortBy } = React.useContext(TableSortControlsContext);
  return (
    <>
      <GridHeadCell onClick={() => sortBy(CellType.rank)}>
        <RankHeadCell />
      </GridHeadCell>
      <GridHeadCell onClick={() => sortBy(CellType.validator)}>
        <ValidatorHeadCell />
      </GridHeadCell>
      <GridHeadCell onClick={() => sortBy(CellType.totalStake)}>
        <TotalStakeHeadCell />
      </GridHeadCell>
      <GridHeadCell onClick={() => sortBy(CellType.fee)}>
        <FeeHeadCell />
      </GridHeadCell>
      <GridHeadCell onClick={() => sortBy(CellType.missedSlots)}>
        <MissedSlotsHeadCell />
      </GridHeadCell>
      <GridHeadCell onClick={() => sortBy(CellType.participationRate)}>
        <ParticipationRateHeadCell />
      </GridHeadCell>
      <GridHeadCell onClick={() => sortBy(CellType.hotShotConsensus)}>
        <HotShotConsensusHeadCell />
      </GridHeadCell>
    </>
  );
};
