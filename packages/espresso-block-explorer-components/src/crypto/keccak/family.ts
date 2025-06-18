import { Keccak } from './keccak';

export function createKeccakHash(name: unknown) {
  if (typeof name !== 'string') {
    throw new TypeError('invalid alogirthm: ' + name);
  }

  switch (name.toLowerCase()) {
    case 'keccak224':
      return new Keccak(1152, 448, null, 224);
    case 'keccak256':
      return new Keccak(1088, 512, null, 256);
    case 'keccak384':
      return new Keccak(832, 768, null, 384);
    case 'keccak512':
      return new Keccak(576, 1024, null, 512);

    case 'sha3-224':
      return new Keccak(1152, 448, 0x06, 224);
    case 'sha3-256':
      return new Keccak(1088, 512, 0x06, 256);
    case 'sha3-384':
      return new Keccak(832, 768, 0x06, 384);
    case 'sha3-512':
      return new Keccak(576, 1024, 0x06, 512);

    default:
      throw new Error('invalid algorithm: ' + name);
  }
}
