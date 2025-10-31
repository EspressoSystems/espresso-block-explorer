import { CommissionPercent } from '@/models/espresso/stake_table/commission_percent';
import { TaggedBase64 } from '@/models/espresso/tagged_base64/TaggedBase64';
import { ValidatorSetEntry } from '@/service/espresso_l1_validator_service/validators_all/validator_set_entry';
import React from 'react';

/**
 * ValidatorNodeContext provides a React Context
 * for a single validator node entry.
 */
export const ValidatorNodeContext = React.createContext<ValidatorSetEntry>(
  new ValidatorSetEntry(
    new ArrayBuffer(0),
    new TaggedBase64('', new ArrayBuffer(0)),
    0n,
    new CommissionPercent(0),
    null,
    null,
  ),
);
