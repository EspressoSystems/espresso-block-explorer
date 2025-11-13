import { Converter, TypeCheckingCodec } from '@/convert/codec/convert';
import { Delegation, delegationJSONCodec } from '../../common/delegation';
import { WalletDiff } from './wallet_diff';

/**
 */
export class WalletDiffDelegatedToNode extends WalletDiff {
  constructor(public readonly delegation: Delegation) {
    super();
    Object.freeze(this);
  }

  toJSON() {
    return walletDiffDelegatedToNodeJSONCodec.encode(this);
  }
}

/**
 * WalletDiffDelegatedToNodeJSONDecoder decodes WalletDifDelegatedToNodef
 * objects from a JSON object.
 */
class WalletDiffDelegatedToNodeJSONDecoder
  implements Converter<unknown, WalletDiffDelegatedToNode>
{
  convert(input: unknown): WalletDiffDelegatedToNode {
    return new WalletDiffDelegatedToNode(delegationJSONCodec.decode(input));
  }
}

/**
 * WalletDiffDelegatedToNodeJSONEncoder encodes WalletDifDelegatedToNodef
 * objects to a JSON object.
 */
class WalletDiffDelegatedToNodeJSONEncoder
  implements Converter<WalletDiffDelegatedToNode, unknown>
{
  convert(input: WalletDiffDelegatedToNode): unknown {
    return delegationJSONCodec.encode(input.delegation);
  }
}

/**
 * WalletDiffDelegatedToNodeJSONCodec is a codec that encodes and decodes
 * WalletDiffDelegatedToNode objects to and from JSON.
 */
class WalletDiffDelegatedToNodeJSONCodec extends TypeCheckingCodec<
  WalletDiffDelegatedToNode,
  unknown
> {
  readonly encoder = new WalletDiffDelegatedToNodeJSONEncoder();
  readonly decoder = new WalletDiffDelegatedToNodeJSONDecoder();
}

/**
 * DelegatedToNodeKey is the key used to identify the
 * WalletDiffDelegatedToNode object in the validator set diff JSON
 * representation.
 */
export const DelegatedToNodeKey = 'DelegatedToNode';

/**
 * walletDiffDelegatedToNodeJSONCodec is a codec that encodes and decodes
 * WalletDiffDelegatedToNode objects to and from JSON.
 */
export const walletDiffDelegatedToNodeJSONCodec =
  new WalletDiffDelegatedToNodeJSONCodec();
