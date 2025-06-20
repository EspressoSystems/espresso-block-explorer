import WalletAddress from '@/models/wallet_address/wallet_address';
import { describe, it } from 'vitest';
import Inscription, { inscriptionCodec } from '../inscription';

describe('Inscription', () => {
  it('serialization and deserialization', () => {
    const example = new Inscription(
      new WalletAddress(new ArrayBuffer(20)),
      new Date(2025, 5, 20, 15, 31, 0),
      'Hello, World!',
    );

    const encoded = JSON.stringify(example.toJSON());
    const decoded = inscriptionCodec.decode(JSON.parse(encoded));

    expect(decoded).to.deep.equal(example);
  });
});
