import { stdBase64ArrayBufferCodec } from '@/convert/codec/array_buffer';
import { mapIterable } from '@/functional/functional';
import React from 'react';
import { ActiveValidatorsContext } from './active_validators_context';

/**
 * ConsensusSetContext provides a React Context
 * for the current set of active validator addresses in base64 format.
 */
export const ConsensusSetContext = React.createContext<Set<string>>(new Set());

/**
 * DeriveConsensusSet is a React Component that
 * derives the current consensus set from the active validators
 * and provides it via the ConsensusSetContext to its children.
 */
export const DeriveConsensusSet: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const activeValidators = React.useContext(ActiveValidatorsContext);

  if (!activeValidators) {
    return <>{children}</>;
  }

  const activeValidatorAddresses = new Set<string>(
    mapIterable(activeValidators.nodes, (node) =>
      stdBase64ArrayBufferCodec.encode(node.address),
    ),
  );

  return (
    <ConsensusSetContext.Provider value={activeValidatorAddresses}>
      {children}
    </ConsensusSetContext.Provider>
  );
};
