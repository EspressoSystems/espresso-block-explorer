import {
  emptyIterator,
  mapIterable,
  zipWithIterable,
} from '@/functional/functional';
import { ActiveNodeSetEntry } from '@/service/espresso_l1_validator_service/common/active_node_set_entry';
import { NodeSetEntry } from '@/service/espresso_l1_validator_service/common/node_set_entry';
import React from 'react';
import { AllValidatorsContext } from './all_validators_context';
import { ConsensusMapContext } from './consensus_map_context';

/**
 * RankMapContext provides a React Context
 * for the current mapping of validator addresses to their ranks.
 */
export const RankMapContext = React.createContext<Map<`0x${string}`, number>>(
  new Map(),
);

/**
 * score computes a score for a validator set entry, this is used to derive
 * the rank of the validators
 */
function score(
  node: NodeSetEntry,
  active: undefined | null | ActiveNodeSetEntry,
): number {
  return (
    Number(node.stake) *
    (1 - node.commission.valueOf()) *
    (2 - (active?.leaderParticipation?.valueOf() ?? 0.0)) *
    (1 + (active?.voterParticipation?.valueOf() ?? 0.0))
  );
}

/**
 * DeriveRank is a React Component that
 * derives the current rank mapping from the all validators
 * and provides it via the RankMapContext to its children.
 */
export const DeriveRank: React.FC<React.PropsWithChildren> = ({ children }) => {
  const allValidators = React.useContext(AllValidatorsContext);
  const consensusSet = React.useContext(ConsensusMapContext);

  const validatorsAndScore = Array.from(
    zipWithIterable(
      mapIterable(
        allValidators?.nodes ?? emptyIterator<NodeSetEntry>(),
        (a) => a.addressText,
      ),
      mapIterable(
        allValidators?.nodes ?? emptyIterator<NodeSetEntry>(),
        (node) => score(node, consensusSet.get(node.addressText)),
      ),
      (a, b) => [a, b] as const,
    ),
  ).sort((a, b) => b[1] - a[1]);

  const validatorsAndRank = new Map<`0x${string}`, number>(
    validatorsAndScore.map(
      (addressAndScore, index) => [addressAndScore[0], index + 1] as const,
    ),
  );

  return (
    <RankMapContext.Provider value={validatorsAndRank}>
      {children}
    </RankMapContext.Provider>
  );
};
