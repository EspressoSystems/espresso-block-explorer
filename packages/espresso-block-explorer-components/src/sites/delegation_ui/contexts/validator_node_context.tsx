import { TaggedBase64 } from '@/models/espresso/tagged_base64/TaggedBase64';
import { NodeSetEntry } from '@/service/espresso_l1_validator_service/common/node_set_entry';
import { Ratio } from '@/service/espresso_l1_validator_service/common/ratio';
import React from 'react';

/**
 * ValidatorNodeContext provides a React Context
 * for a single validator node entry.
 */
export const ValidatorNodeContext = React.createContext<NodeSetEntry>(
  new NodeSetEntry(
    new ArrayBuffer(0),
    new TaggedBase64('', new ArrayBuffer(0)),
    0n,
    new Ratio(0),
  ),
);
