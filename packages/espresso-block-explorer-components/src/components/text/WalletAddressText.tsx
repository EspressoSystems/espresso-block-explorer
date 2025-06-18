import WalletAddress from '@/models/wallet_address/wallet_address';
import React from 'react';

export interface WalletAddressTextProps {
  value: WalletAddress;
}
/**
 * WalletAddressText is a simple Text component that renders the given
 * WalletAddress with its `toString()` method.
 */
const WalletAddressText: React.FC<WalletAddressTextProps> = (props) => {
  const string = props.value.toString();

  if (string.length <= 8) {
    return string;
  }

  // Now this string is too long... So we will need to truncate it
  // strategically.  Luckily this will be guaranteed to be an ascii
  // string, so we should be able to truncate it in the middle independently.
  return (
    <span className="inline">
      <span title={string}>
        {string.substring(0, 4)}
        ...
        {string.substring(string.length - 4, string.length)}
      </span>
    </span>
  );
};

export default WalletAddressText;
