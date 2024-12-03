import {
  BincodeDeserializer,
  BincodeDesieraliazerBase,
} from '@/convert/bincode/deserializer';
import { BincodeSerializer } from '@/convert/bincode/serializer';
import {
  ArrayCodec,
  ArrayDecoder,
  ArrayEncoder,
  numberCodec,
  stringCodec,
} from '@/convert/codec';
import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import InvalidTypeError from '@/errors/InvalidTypeError';
import WalletAddress, { walletAddressCodec } from './wallet_address';

/**
 * Inscription represents the basic data that is conveyed for an inscription.
 * This structure represents the minimum data that is needed to convey the
 * inscription either when sourcing the data from the inscription service,
 * or when submitting the data to the inscription service.
 */
export default class Inscription {
  readonly address: WalletAddress;
  readonly time: Date;
  readonly message: string;

  constructor(address: WalletAddress, time: Date, message: string) {
    this.address = address;
    this.time = time;
    this.message = message;
    Object.freeze(this);
  }

  toJSON() {
    return inscriptionCodec.encode(this);
  }
}

/**
 * InscriptionEncoder is a Converter that converts an Inscription into a
 * JSON object that can be used to represent the Inscription.
 */
class InscriptionEncoder implements Converter<Inscription> {
  convert(input: Inscription) {
    return {
      address: walletAddressCodec.encode(input.address),
      time: numberCodec.encode(Math.floor(input.time.valueOf() / 1000)),
      message: stringCodec.encode(input.message),
    };
  }
}

/**
 * InscriptionDecoder is a Converter that converts a JSON object into an
 * Inscription.
 */
class InscriptionDecoder implements Converter<unknown, Inscription> {
  convert(input: unknown) {
    assertRecordWithKeys(input, 'address', 'time', 'message');
    return new Inscription(
      walletAddressCodec.decode(input.address),
      new Date(numberCodec.decode(input.time) * 1000),
      stringCodec.decode(input.message),
    );
  }
}

/**
 * InscriptionCodec is a TypeCheckingCodec for Inscription.
 */
class InscriptionCodec extends TypeCheckingCodec<Inscription> {
  readonly encoder = new InscriptionEncoder();
  readonly decoder = new InscriptionDecoder();
}

/**
 * inscriptionCodec is an instance of InscriptionCodec.
 */
export const inscriptionCodec = new InscriptionCodec();

export const listInscriptionCodec = new ArrayCodec(
  new ArrayDecoder(inscriptionCodec),
  new ArrayEncoder(inscriptionCodec),
);

export function deserializeBincodeInscription(
  input: BincodeDeserializer,
): Inscription {
  if (!(input instanceof BincodeDesieraliazerBase)) {
    throw new InvalidTypeError(typeof input, 'BincodeDesieraliazer');
  }

  // Each Number is encoded as a Uint64
  const addressData = input.deserializeBytes();
  const address = new WalletAddress(addressData.buffer);

  const message = input.deserializeStringUTF8();

  const time = Number(input.deserializeUint64());

  return new Inscription(address, new Date(time * 1000), message);
}

export function serializeBincodeInscription(
  serializer: BincodeSerializer,
  input: Inscription,
) {
  serializer.serializeBytes(new Uint8Array(input.address.address));
  serializer.serializeStringUTF8(input.message);
  serializer.serializeUint64(BigInt(Math.floor(input.time.valueOf() / 1000)));
}
