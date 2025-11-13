import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec';
import { L1BlockInfo, l1BlockInfoJSONCodec } from '../common/l1_block_info';
import { WalletDiff } from './wallet_diff/wallet_diff';
import { walletDiffArrayJSONCodec } from './wallet_diff/wallet_diff_codec';

/**
 * WalletUpdate represents an update of a specific Wallet address at a specific
 * L1 Block.
 *
 * This type definition is informed by the type specification as defined
 * in the Espresso L1 Validator Service API documentation.
 * https://www.notion.so/espressosys/Delegation-UI-Service-Specification-2942431b68e980968c28cc5099a4e8f2?source=copy_link#2962431b68e9801ebdfdc6d2c11ee028
 */
export class WalletUpdate {
  constructor(
    readonly l1Block: L1BlockInfo,
    readonly diff: WalletDiff[],
  ) {
    Object.freeze(this);
  }

  toJSON() {
    return walletUpdateJSONCodec.encode(this);
  }
}

/**
 * WalletUpdateJSONDecoder decodes WalletUpdate
 * objects from a JSON object.
 */
class WalletUpdateJSONDecoder implements Converter<unknown, WalletUpdate> {
  convert(input: unknown): WalletUpdate {
    assertRecordWithKeys(input, 'l1_block', 'diff');

    return new WalletUpdate(
      l1BlockInfoJSONCodec.decode(input.l1_block),
      walletDiffArrayJSONCodec.decode(input.diff),
    );
  }
}

/**
 * WalletUpdateJSONEncoder encodes WalletUpdate
 * objects to a JSON object.
 */
class WalletUpdateJSONEncoder implements Converter<WalletUpdate, unknown> {
  convert(input: WalletUpdate): unknown {
    return {
      l1_block: l1BlockInfoJSONCodec.encode(input.l1Block),
      diff: walletDiffArrayJSONCodec.encode(input.diff),
    };
  }
}

/**
 * WalletUpdateJSONCodec is a codec that encodes and decodes
 * WalletUpdate objects to and from JSON.
 */
class WalletUpdateJSONCodec extends TypeCheckingCodec<WalletUpdate, unknown> {
  readonly encoder = new WalletUpdateJSONEncoder();
  readonly decoder = new WalletUpdateJSONDecoder();
}

/**
 * walletUpdateJSONCodec is a codec that encodes and decodes
 * WalletUpdate objects to and from JSON.
 */
export const walletUpdateJSONCodec = new WalletUpdateJSONCodec();
