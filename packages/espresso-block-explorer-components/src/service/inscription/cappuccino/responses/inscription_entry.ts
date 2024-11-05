import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import InscriptionAndChainDetails, {
  inscriptionAndChainDetailsCodec,
} from '../inscription_and_chain_details';
import CappuccinoInscriptionResponse from './inscription_response';

/**
 * kCappuccinoInscriptionType is the type string for the
 * CappuccinoInscriptionEntry class.
 */
export const kCappuccinoInscriptionType = 'LatestInscription' as const;

/**
 * CappuccinoInscriptionEntry is a response from the Cappuccino node
 * validator that contains a snapshot of the voters in the network.
 */
export class CappuccinoInscriptionEntry extends CappuccinoInscriptionResponse {
  readonly inscriptionAndChainDetails: InscriptionAndChainDetails;

  constructor(inscriptionAndChainDetails: InscriptionAndChainDetails) {
    super();
    this.inscriptionAndChainDetails = inscriptionAndChainDetails;
  }

  toJSON() {
    return cappuccinoInscriptionCodec.encode(this);
  }
}

class CappuccinoInscriptionEntryDecoder
  implements Converter<unknown, CappuccinoInscriptionEntry>
{
  convert(input: unknown): CappuccinoInscriptionEntry {
    assertRecordWithKeys(input, kCappuccinoInscriptionType);

    const list = input[kCappuccinoInscriptionType];
    return new CappuccinoInscriptionEntry(
      inscriptionAndChainDetailsCodec.decode(list),
    );
  }
}

class CappuccinoInscriptionEntryEncoder
  implements Converter<CappuccinoInscriptionEntry>
{
  convert(input: CappuccinoInscriptionEntry) {
    return {
      [kCappuccinoInscriptionType]: inscriptionAndChainDetailsCodec.encode(
        input.inscriptionAndChainDetails,
      ),
    };
  }
}

class CappuccinoInscriptionEntryCodec extends TypeCheckingCodec<
  CappuccinoInscriptionEntry,
  ReturnType<
    InstanceType<new () => CappuccinoInscriptionEntryEncoder>['convert']
  >
> {
  readonly encoder = new CappuccinoInscriptionEntryEncoder();
  readonly decoder = new CappuccinoInscriptionEntryDecoder();
}

export const cappuccinoInscriptionCodec = new CappuccinoInscriptionEntryCodec();
