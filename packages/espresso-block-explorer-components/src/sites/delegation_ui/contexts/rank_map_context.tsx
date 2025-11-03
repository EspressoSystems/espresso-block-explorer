import { stdBase64ArrayBufferCodec } from '@/convert/codec';
import { mapIterable, zipWithIterable } from '@/functional/functional';
import { NodeSetEntry } from '@/service/espresso_l1_validator_service/common/node_set_entry';
import React from 'react';
import { AllValidatorsContext } from './all_validators_context';

/**
 * RankMapContext provides a React Context
 * for the current mapping of validator addresses to their ranks.
 */
export const RankMapContext = React.createContext<Map<string, number>>(
  new Map(),
);

/**
 * score computes a score for a validator set entry, this is used to derive
 * the rank of the validators
 */
function score(node: NodeSetEntry): number {
  return (
    Number(node.stake) *
    (1 - node.commission.valueOf()) *
    (node.leadershipParticipation ?? 0.5) *
    (node.voterParticipation ?? 0.5)
  );
}

/**
 * DeriveRank is a React Component that
 * derives the current rank mapping from the all validators
 * and provides it via the RankMapContext to its children.
 */
export const DeriveRank: React.FC<React.PropsWithChildren> = ({ children }) => {
  const allValidators = React.useContext(AllValidatorsContext);

  if (!allValidators) {
    return <>{children}</>;
  }

  const validatorsAndScore = Array.from(
    zipWithIterable(
      mapIterable(allValidators.nodes, (a) =>
        stdBase64ArrayBufferCodec.encode(a.address),
      ),
      mapIterable(allValidators.nodes, score),
      (a, b) => [a, b] as const,
    ),
  ).sort((a, b) => b[1] - a[1]);

  const validatorsAndRank = new Map<string, number>(
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
