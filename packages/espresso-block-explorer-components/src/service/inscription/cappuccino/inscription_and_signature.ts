import {
  assertRecordWithKeys,
  Converter,
  hexArrayBufferCodec,
  TypeCheckingCodec,
} from '@/convert/codec';
import Inscription, { inscriptionCodec } from './inscription';

/**
 * InscriptionAndSignature represents the combination of an Inscription and
 * a signature that is used to sign the Inscription data.
 */
export default class InscriptionAndSignature {
  readonly inscription: Inscription;
  readonly signature: ArrayBuffer;

  constructor(inscription: Inscription, signature: ArrayBuffer) {
    this.inscription = inscription;
    this.signature = signature;
    Object.freeze(this);
  }

  toJSON() {
    return inscriptionAndSignatureCodec.encode(this);
  }
}

/**
 * InscriptionAndSignatureEncoder is a Converter that converts an
 * InscriptionAndSignature into a JSON object that can be used to represent
 * the InscriptionAndSignature.
 */
class InscriptionAndSignatureEncoder
  implements Converter<InscriptionAndSignature>
{
  convert(input: InscriptionAndSignature) {
    return {
      inscription: inscriptionCodec.encode(input.inscription),
      signature: hexArrayBufferCodec.encode(input.signature),
    };
  }
}

/**
 * InscriptionAndSignatureDecoder is a Converter that converts a JSON object
 * into an InscriptionAndSignature.
 */
class InscriptionAndSignatureDecoder
  implements Converter<unknown, InscriptionAndSignature>
{
  convert(input: unknown) {
    assertRecordWithKeys(input, 'inscription', 'signature');
    return new InscriptionAndSignature(
      inscriptionCodec.decode(input.inscription),
      hexArrayBufferCodec.decode(input.signature),
    );
  }
}

/**
 * InscriptionAndSignatureCodec is a TypeCheckingCodec for InscriptionAndSignature.
 */
class InscriptionAndSignatureCodec extends TypeCheckingCodec<InscriptionAndSignature> {
  readonly encoder = new InscriptionAndSignatureEncoder();
  readonly decoder = new InscriptionAndSignatureDecoder();
}

/**
 * inscriptionAndSignatureCodec is an instance of InscriptionAndSignatureCodec.
 */
export const inscriptionAndSignatureCodec = new InscriptionAndSignatureCodec();
