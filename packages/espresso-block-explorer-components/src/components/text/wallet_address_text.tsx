import { default as WalletAddress } from '@/models/wallet_address/wallet_address';
import { default as React } from 'react';

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
  //
  // This intentionally does not wrap in the "inline" (display: inline-flex)
  // class used elsewhere for icon alignment: an inline-flex box is atomic,
  // which blocks a wrapping <a>'s text-decoration (e.g. the underline-on-
  // hover from link.css) from propagating into it, so this text would
  // never visibly underline inside a link even though the anchor computes
  // the style correctly.
  return (
    <span title={string}>
      {string.substring(0, 2 + leadingChars)}…
      {string.substring(string.length - trailingChars, string.length)}
    </span>
  );
};

export default WalletAddressText;
