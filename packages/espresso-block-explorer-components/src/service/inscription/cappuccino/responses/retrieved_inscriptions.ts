import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import InscriptionAndChainDetails, {
  arrayInscriptionAndChainDetailsCodec,
} from '../inscription_and_chain_details';
import CappuccinoInscriptionResponse from './inscription_response';

/**
 * kRetrievedInscriptionsForWalletAddressType is the type string for the
 * CappuccinoRetrievedInscriptionsForWalletAddress class.
 */
export const kRetrievedInscriptionsForWalletAddressType =
  'RetrievedInscriptionsForWalletAddress' as const;

/**
 * CappuccinoRetrievedInscriptionsForWalletAddress is a response from the Cappuccino node
 * validator that contains a snapshot of the voters in the network.
 */
export class CappuccinoRetrievedInscriptionsForWalletAddress extends CappuccinoInscriptionResponse {
  readonly inscriptionAndChainDetails: InscriptionAndChainDetails[];

  constructor(inscriptionAndChainDetails: InscriptionAndChainDetails[]) {
    super();
    this.inscriptionAndChainDetails = inscriptionAndChainDetails;
  }

  toJSON() {
    return cappuccinoRetrievedInscriptionsForWalletAddressCodec.encode(this);
  }
}

class CappuccinoRetrievedInscriptionsForWalletAddressDecoder
  implements
    Converter<unknown, CappuccinoRetrievedInscriptionsForWalletAddress>
{
  convert(input: unknown): CappuccinoRetrievedInscriptionsForWalletAddress {
    assertRecordWithKeys(input, kRetrievedInscriptionsForWalletAddressType);

    const list = input[kRetrievedInscriptionsForWalletAddressType];
    return new CappuccinoRetrievedInscriptionsForWalletAddress(
      arrayInscriptionAndChainDetailsCodec.decode(list),
    );
  }
}

class CappuccinoRetrievedInscriptionsForWalletAddressEncoder
  implements Converter<CappuccinoRetrievedInscriptionsForWalletAddress>
{
  convert(input: CappuccinoRetrievedInscriptionsForWalletAddress) {
    return {
      [kRetrievedInscriptionsForWalletAddressType]:
        arrayInscriptionAndChainDetailsCodec.encode(
          input.inscriptionAndChainDetails,
        ),
    };
  }
}

class CappuccinoRetrievedInscriptionsForWalletAddressCodec extends TypeCheckingCodec<
  CappuccinoRetrievedInscriptionsForWalletAddress,
  ReturnType<
    InstanceType<
      new () => CappuccinoRetrievedInscriptionsForWalletAddressEncoder
    >['convert']
  >
> {
  readonly encoder =
    new CappuccinoRetrievedInscriptionsForWalletAddressEncoder();
  readonly decoder =
    new CappuccinoRetrievedInscriptionsForWalletAddressDecoder();
}

export const cappuccinoRetrievedInscriptionsForWalletAddressCodec =
  new CappuccinoRetrievedInscriptionsForWalletAddressCodec();
