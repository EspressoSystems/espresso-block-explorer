import {
  assertRecordWithKeys,
  assertTypeCode,
  Converter,
  stringCodec,
  TypeCheckingCodec,
} from '@/convert/codec';
import InscriptionAndSignature, {
  inscriptionAndSignatureCodec,
} from '../inscription_and_signature';

export default abstract class CappuccinoInscriptionRequest {
  abstract toJSON(): unknown;
}

// MARK: Inscription Requests.
export const kPutInscriptionValue = 'PutInscription' as const;

/**
 * PutInscription is a proxy request to submit an Inscription to the
 * inscription service.
 */
export class PutInscription extends CappuccinoInscriptionRequest {
  readonly inscriptionAndSignature: InscriptionAndSignature;

  constructor(inscriptionAndSignature: InscriptionAndSignature) {
    super();
    this.inscriptionAndSignature = inscriptionAndSignature;
    Object.freeze(this);
  }

  toJSON() {
    return putInscriptionCodec.encode(this);
  }
}

/**
 * PutInscriptionEncoder is a Converter that converts a PutInscription into a
 * JSON object that can be used to represent the PutInscription.
 */
class PutInscriptionEncoder implements Converter<PutInscription, unknown> {
  convert(input: PutInscription) {
    return {
      type: stringCodec.encode(kPutInscriptionValue),
      inscription_and_signature: inscriptionAndSignatureCodec.encode(
        input.inscriptionAndSignature,
      ),
    };
  }
}

/**
 * PutInscriptionDecoder is a Converter that converts a JSON object into a
 * PutInscription.
 */
class PutInscriptionDecoder implements Converter<unknown, PutInscription> {
  convert(input: unknown) {
    assertRecordWithKeys(input, 'type', 'inscription_and_signature');
    assertTypeCode(input, kPutInscriptionValue);

    return new PutInscription(
      inscriptionAndSignatureCodec.decode(input.inscription_and_signature),
    );
  }
}

/**
 * PutInscriptionCodec is a TypeCheckingCodec for PutInscription.
 */
class PutInscriptionCodec extends TypeCheckingCodec<PutInscription> {
  readonly encoder = new PutInscriptionEncoder();
  readonly decoder = new PutInscriptionDecoder();
}

/**
 * putInscriptionCodec is an instance of PutInscriptionCodec.
 */
export const putInscriptionCodec = new PutInscriptionCodec();
