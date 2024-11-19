import { ArrayCodec, ArrayDecoder, ArrayEncoder } from '@/convert/codec';
import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import ChainDetails, { chainDetailsCodec } from './chain_details';
import Inscription, { inscriptionCodec } from './inscription';

/**
 * InscriptionAndChainDetails represents the combination of an Inscription and
 * the chain details that are used to identify the transaction in the chain.
 */
export default class InscriptionAndChainDetails {
  readonly inscription: Inscription;
  readonly chainDetails: ChainDetails;

  constructor(inscription: Inscription, chainDetails: ChainDetails) {
    this.inscription = inscription;
    this.chainDetails = chainDetails;
    Object.freeze(this);
  }

  toJSON() {
    return inscriptionAndChainDetailsCodec.encode(this);
  }
}

/**
 * InscriptionAndChainDetailsEncoder is a Converter that converts an
 * InscriptionAndChainDetails into a JSON object that can be used to represent
 * the InscriptionAndChainDetails.
 */
class InscriptionAndChainDetailsEncoder
  implements Converter<InscriptionAndChainDetails>
{
  convert(input: InscriptionAndChainDetails) {
    return {
      inscription: inscriptionCodec.encode(input.inscription),
      chain_details: chainDetailsCodec.encode(input.chainDetails),
    };
  }
}

/**
 * InscriptionAndChainDetailsDecoder is a Converter that converts a JSON object
 * into an InscriptionAndChainDetails.
 */
class InscriptionAndChainDetailsDecoder
  implements Converter<unknown, InscriptionAndChainDetails>
{
  convert(input: unknown) {
    assertRecordWithKeys(input, 'inscription', 'chain_details');
    return new InscriptionAndChainDetails(
      inscriptionCodec.decode(input.inscription),
      chainDetailsCodec.decode(input.chain_details),
    );
  }
}

/**
 * InscriptionAndChainDetailsCodec is a TypeCheckingCodec for
 * InscriptionAndChainDetails.
 */
class InscriptionAndChainDetailsCodec extends TypeCheckingCodec<
  InscriptionAndChainDetails,
  ReturnType<
    InstanceType<new () => InscriptionAndChainDetailsEncoder>['convert']
  >
> {
  readonly encoder = new InscriptionAndChainDetailsEncoder();
  readonly decoder = new InscriptionAndChainDetailsDecoder();
}

/**
 * inscriptionAndChainDetailsCodec is an instance of
 * InscriptionAndChainDetailsCodec.
 */
export const inscriptionAndChainDetailsCodec =
  new InscriptionAndChainDetailsCodec();

export const arrayInscriptionAndChainDetailsCodec = new ArrayCodec(
  new ArrayDecoder(inscriptionAndChainDetailsCodec),
  new ArrayEncoder(inscriptionAndChainDetailsCodec),
);
