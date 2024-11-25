import {
  assertRecordWithKeys,
  assertTypeCode,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import { stringCodec } from '@/convert/codec/string';
import CappuccinoInscriptionRequest from './inscription_request';

// MARK: Inscription Requests.
export const kRetrieveInscriptionsForAddressValue =
  'RetrieveInscriptionsForAddress' as const;

/**
 * RetrieveInscriptionsForAddress is a proxy request to submit an Inscription to the
 * inscription service.
 */
export class RetrieveInscriptionsForAddress extends CappuccinoInscriptionRequest {
  readonly address: string;

  constructor(address: string) {
    super();
    this.address = address;
    Object.freeze(this);
  }

  toJSON() {
    return retrieveInscriptionsForAddressCodec.encode(this);
  }
}

/**
 * RetrieveInscriptionsForAddressEncoder is a Converter that converts a RetrieveInscriptionsForAddress into a
 * JSON object that can be used to represent the RetrieveInscriptionsForAddress.
 */
class RetrieveInscriptionsForAddressEncoder
  implements Converter<RetrieveInscriptionsForAddress, unknown>
{
  convert(input: RetrieveInscriptionsForAddress) {
    return {
      type: stringCodec.encode(kRetrieveInscriptionsForAddressValue),
      address: stringCodec.encode(input.address),
    };
  }
}

/**
 * RetrieveInscriptionsForAddressDecoder is a Converter that converts a JSON object into a
 * RetrieveInscriptionsForAddress.
 */
class RetrieveInscriptionsForAddressDecoder
  implements Converter<unknown, RetrieveInscriptionsForAddress>
{
  convert(input: unknown) {
    assertRecordWithKeys(input, 'type', 'address');
    assertTypeCode(input, kRetrieveInscriptionsForAddressValue);

    return new RetrieveInscriptionsForAddress(
      stringCodec.decode(input.address),
    );
  }
}

/**
 * RetrieveInscriptionsForAddressCodec is a TypeCheckingCodec for RetrieveInscriptionsForAddress.
 */
class RetrieveInscriptionsForAddressCodec extends TypeCheckingCodec<RetrieveInscriptionsForAddress> {
  readonly encoder = new RetrieveInscriptionsForAddressEncoder();
  readonly decoder = new RetrieveInscriptionsForAddressDecoder();
}

/**
 * RetrieveInscriptionsForAddressCodec is an instance of RetrieveInscriptionsForAddressCodec.
 */
export const retrieveInscriptionsForAddressCodec =
  new RetrieveInscriptionsForAddressCodec();
