import {
  BincodeDeserializer,
  createBincodeDeserializer,
} from '@/convert/bincode/deserializer';
import {
  BincodeSerializer,
  createBincodeSerializer,
} from '@/convert/bincode/serializer';
import {
  assertRecordWithKeys,
  Converter,
  hexArrayBufferCodec,
  TypeCheckingCodec,
  uint8ArrayToArrayBufferCodec,
} from '@/convert/codec';
import { createBufferedDataView } from '@/convert/data_view/buffered_data_view';
import { Endianess } from '@/convert/data_view/endianess';
import Inscription, {
  deserializeBincodeInscription,
  inscriptionCodec,
  serializeBincodeInscription,
} from './inscription';

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
class InscriptionAndSignatureEncoder implements Converter<InscriptionAndSignature> {
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
class InscriptionAndSignatureDecoder implements Converter<
  unknown,
  InscriptionAndSignature
> {
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

export function deserializeHexEncodedString(
  input: BincodeDeserializer,
): ArrayBuffer {
  const hexString = input.deserializeStringUTF8();
  return hexArrayBufferCodec.decode(hexString);
}

export function deserializeBincodeInscriptionAndSignature(
  input: BincodeDeserializer,
): InscriptionAndSignature {
  const inscription = deserializeBincodeInscription(input);
  const signature = deserializeHexEncodedString(input);

  return new InscriptionAndSignature(inscription, signature);
}

export function serializeBincodeInscriptionAndSignature(
  serializer: BincodeSerializer,
  input: InscriptionAndSignature,
): void {
  serializeBincodeInscription(serializer, input.inscription);
  serializer.serializeStringUTF8(
    hexArrayBufferCodec.encode(input.signature).slice(2),
  );
}

class InscriptionAndSignatureBincodeEncoder implements Converter<
  InscriptionAndSignature,
  ArrayBuffer
> {
  convert(input: InscriptionAndSignature) {
    const buffer = new ArrayBuffer(1024);
    const serializer = createBincodeSerializer(
      createBufferedDataView(buffer, Endianess.little),
    );

    serializeBincodeInscriptionAndSignature(serializer, input);

    return uint8ArrayToArrayBufferCodec.encode(serializer.toBytes());
  }
}

class InscriptionAndSignatureBincodeDecoder implements Converter<
  unknown,
  InscriptionAndSignature
> {
  convert(input: unknown) {
    if (!(input instanceof ArrayBuffer)) {
      throw new Error('Expected ArrayBuffer');
    }

    const deserializer = createBincodeDeserializer(
      createBufferedDataView(input, Endianess.little),
    );

    return deserializeBincodeInscriptionAndSignature(deserializer);
  }
}

class InscriptionAndSignatureBincodeCodec extends TypeCheckingCodec<
  InscriptionAndSignature,
  ArrayBuffer
> {
  readonly encoder = new InscriptionAndSignatureBincodeEncoder();
  readonly decoder = new InscriptionAndSignatureBincodeDecoder();
}

export const inscriptionAndSignatureBincodeCodec =
  new InscriptionAndSignatureBincodeCodec();
