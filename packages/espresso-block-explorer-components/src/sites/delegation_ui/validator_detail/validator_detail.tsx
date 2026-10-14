import { hexArrayBufferCodec } from '@/convert/codec/array_buffer_hex';
import { walletAddressCodec } from '@/models/wallet_address';
import { default as React } from 'react';
import { DelegationUIFrame } from '../delegation_ui';
import { ValidatorDetailContent } from './validator_detail_content';

export interface ValidatorDetailUIProps {
  /**
   * The address of the validator to display, or null when none was given.
   */
  address: null | `0x${string}`;
}

/**
 * deriveValidatorAddressFromQueryParameters reads the validator to display
 * from the "address" URL search query parameter.
 *
 * The address is returned in the lowercase hex form used to key validators
 * throughout the Delegation UI, or null when it is missing or malformed.
 */
export function deriveValidatorAddressFromQueryParameters(
  queryParams: URLSearchParams,
): null | `0x${string}` {
  try {
    const address = walletAddressCodec.decode(queryParams.get('address'));
    return hexArrayBufferCodec.encode(address.address);
  } catch {
    return null;
  }
}

/**
 * ValidatorDetailUI is the self contained validator detail page of the
 * Delegation UI.
 */
export const ValidatorDetailUI: React.FC<ValidatorDetailUIProps> = ({
  address,
}) => {
  return (
    <DelegationUIFrame>
      <ValidatorDetailContent address={address} />
    </DelegationUIFrame>
  );
};
