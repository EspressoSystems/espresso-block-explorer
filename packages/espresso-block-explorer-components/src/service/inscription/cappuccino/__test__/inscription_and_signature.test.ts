import { createBincodeDeserializer } from '@/convert/bincode/deserializer';
import { hexArrayBufferCodec } from '@/convert/codec';
import { createBufferedDataView } from '@/convert/data_view/buffered_data_view';
import { Endianess } from '@/convert/data_view/endianess';
import { describe, expect, it } from 'vitest';
import { deserializeBincodeInscriptionAndSignature } from '../inscription_and_signature';

describe('Inscription and Signature', () => {
  describe('Encoding', () => {
    describe('bincode', () => {
      it('should decode a raw payload successfully', () => {
        const raw = hexArrayBufferCodec.decode(
          '14000000000000002bb6723a754d21d5ba0f22fc062e34e6ce47a0cc1f00000000000000416e20496e66696e6974652047617264656e20686173206e6f2077616c6c73e4e9336700000000820000000000000037363535383939613366396664663836353866396165393831306430616432366234326130613538386363306430306630636632623735356537323563336632366538313930623939346430316137613566386366313530306434306663323438646434393932393834353534363938343165633466396234633038316531303163',
        );

        expect(raw).not.toBeNull();

        const inscriptionAndSignature =
          deserializeBincodeInscriptionAndSignature(
            createBincodeDeserializer(
              createBufferedDataView(raw, Endianess.little),
            ),
          );

        expect(
          hexArrayBufferCodec.encode(
            inscriptionAndSignature.inscription.address.address,
          ),
        ).toEqual('0x2bb6723a754d21d5ba0f22fc062e34e6ce47a0cc');

        expect(inscriptionAndSignature.inscription.message).toEqual(
          'An Infinite Garden has no walls',
        );

        expect(inscriptionAndSignature.inscription.time).toEqual(
          new Date('2024-11-12T23:51:00Z'),
        );

        expect(new Uint8Array(inscriptionAndSignature.signature)).to.deep.equal(
          new Uint8Array(
            hexArrayBufferCodec.decode(
              '7655899a3f9fdf8658f9ae9810d0ad26b42a0a588cc0d00f0cf2b755e725c3f26e8190b994d01a7a5f8cf1500d40fc248dd499298455469841ec4f9b4c081e101c',
            ),
          ),
        );
      });
    });
  });
});
