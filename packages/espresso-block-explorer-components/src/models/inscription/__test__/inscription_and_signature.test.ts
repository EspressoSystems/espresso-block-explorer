import WalletAddress from '@/models/wallet_address/wallet_address';
import { describe, it } from 'vitest';
import Inscription from '../inscription';
import InscriptionAndSignature, {
  inscriptionAndSignatureBincodeCodec,
  inscriptionAndSignatureCodec,
} from '../inscription_and_signature';

describe('InscriptionAndSignature', () => {
  it('serialization and deserialization', () => {
    const example = new InscriptionAndSignature(
      new Inscription(
        new WalletAddress(new ArrayBuffer(20)),
        new Date(2025, 5, 20, 15, 31, 0),
        'Hello, World!',
      ),
      new ArrayBuffer(32),
    );

    const encoded = JSON.stringify(example.toJSON());
    const decoded = inscriptionAndSignatureCodec.decode(JSON.parse(encoded));

    expect(decoded).to.deep.equal(example);
  });

  it('bincode serialization and deserialization', () => {
    const example = new InscriptionAndSignature(
      new Inscription(
        new WalletAddress(new ArrayBuffer(20)),
        new Date(2025, 5, 20, 15, 31, 0),
        'Hello, World!',
      ),
      new ArrayBuffer(32),
    );

    const encoded = inscriptionAndSignatureBincodeCodec.encode(example);
    const decoded = inscriptionAndSignatureBincodeCodec.decode(encoded);

    expect(decoded).to.deep.equal(example);
  });
});
