import { TaggedBase64 } from '@/models/espresso/tagged_base64/tagged_base64';
import { NodeSetEntry } from '@/service/espresso_staking_api_service/common/node_set_entry';
import { Ratio } from '@/service/espresso_staking_api_service/common/ratio';
import React from 'react';
import { AllValidatorsContext } from './all_validators_context';
import { NodeAddressContext } from './node_address_context';

const defaultNodeSetEntry = new NodeSetEntry(
  new ArrayBuffer(0),
  new TaggedBase64('', new ArrayBuffer(0)),
  0n,
  Ratio.floatingPoint(0),
  null,
);

/**
 * ValidatorNodeContext provides a React Context
 * for a single validator node entry.
 */
export const ValidatorNodeContext =
  React.createContext<NodeSetEntry>(defaultNodeSetEntry);

/**
 * ProvideValidatorNodeContext is a React Component that
 * provides the ValidatorNodeContext for its children
 * by looking up the node address in the AllValidatorsContext.
 */
export const ProvideValidatorNodeContext: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const nodeAddress = React.useContext(NodeAddressContext);
  const allValidators = React.useContext(AllValidatorsContext);

  return (
    <ValidatorNodeContext.Provider
      value={allValidators.get(nodeAddress) ?? defaultNodeSetEntry}
    >
      {children}
    </ValidatorNodeContext.Provider>
  );
};
