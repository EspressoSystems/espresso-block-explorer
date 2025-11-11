import { hexArrayBufferCodec } from '@/convert/codec/array_buffer';
import { mapIterable } from '@/functional/functional';
import { ActiveNodeSetEntry } from '@/service/espresso_l1_validator_service/common/active_node_set_entry';
import React from 'react';
import { ActiveValidatorsContext } from './active_validators_context';

/**
 * ConsensusMapContext provides a React Context
 * for the current set of active validator addresses in base64 format.
 */
export const ConsensusMapContext = React.createContext<
  Map<string, ActiveNodeSetEntry>
>(new Map());

/**
 * DeriveConsensusSet is a React Component that
 * derives the current consensus set from the active validators
 * and provides it via the ConsensusSetContext to its children.
 */
export const DeriveConsensusSet: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const activeValidators = React.useContext(ActiveValidatorsContext);

  const activeValidatorAddresses = new Map<string, ActiveNodeSetEntry>(
    mapIterable(activeValidators?.nodes ?? [], (node) => [
      hexArrayBufferCodec.encode(node.address),
      node,
    ]),
  );

  return (
    <ConsensusMapContext.Provider value={activeValidatorAddresses}>
      {children}
    </ConsensusMapContext.Provider>
  );
};
