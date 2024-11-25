import { hexArrayBufferCodec } from '@/convert/codec';
import { Converter, TypeCheckingCodec } from '@/convert/codec/convert';

/**
 * WalletAddress represents a general Wallet Address within the Ethereum
 * ecosystem.
 */
export default class WalletAddress {
  readonly address: ArrayBuffer;

  constructor(address: ArrayBuffer) {
    this.address = address;
    Object.freeze(this);
  }

  toJSON() {
    return walletAddressCodec.encode(this);
  }
}

/**
 * WalletAddressEncoder is a Converter that converts a WalletAddress into a
 * string representation of the wallet address.
 */
class WalletAddressEncoder implements Converter<WalletAddress> {
  convert(input: WalletAddress) {
    return hexArrayBufferCodec.encode(input.address);
  }
}

/**
 * WalletAddressDecoder is a Converter that converts a string representation of
 * a wallet address into a WalletAddress.
 */
class WalletAddressDecoder implements Converter<unknown, WalletAddress> {
  convert(input: unknown) {
    return new WalletAddress(hexArrayBufferCodec.decode(input));
  }
}

/**
 * WalletAddressCodec is a TypeCheckingCodec for WalletAddress.
 * It uses WalletAddressEncoder and WalletAddressDecoder for encoding and
 * decoding WalletAddress objects.
 */
class WalletAddressCodec extends TypeCheckingCodec<WalletAddress> {
  readonly encoder = new WalletAddressEncoder();
  readonly decoder = new WalletAddressDecoder();
}

/**
 * walletAddressCodec is an instance of WalletAddressCodec.
 */
export const walletAddressCodec = new WalletAddressCodec();
