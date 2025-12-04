import WalletAddress from '@/models/wallet_address/wallet_address';
import React from 'react';

export interface WalletAddressTextProps {
  value: WalletAddress;
  leadingChars?: number;
  trailingChars?: number;
}
/**
 * WalletAddressText is a simple Text component that renders the given
 * WalletAddress with its `toString()` method.
 */
const WalletAddressText: React.FC<WalletAddressTextProps> = (props) => {
  const string = props.value.toString();
  const leadingChars = props.leadingChars ?? 4;
  const trailingChars = props.trailingChars ?? 4;

  if (string.length <= 8 || leadingChars + trailingChars + 2 >= string.length) {
    return string;
  }

  // Now this string is too long... So we will need to truncate it
  // strategically.  Luckily this will be guaranteed to be an ascii
  // string, so we should be able to truncate it in the middle independently.
  return (
    <span className="inline">
      <span title={string}>
        {string.substring(0, 2 + leadingChars)}…
        {string.substring(string.length - trailingChars, string.length)}
      </span>
    </span>
  );
};

export default WalletAddressText;
