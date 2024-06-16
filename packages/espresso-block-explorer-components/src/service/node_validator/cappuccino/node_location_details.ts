import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { stringCodec } from '@/convert/codec/string';
import Degrees from '@/models/geo/units/Degrees';
import LatLng, { latLngDegreesCodec } from '@/models/geo/units/LatLng';

/**
 * CappuccinoLocationDetails represents the location details of a Cappuccino
 * node.  It contains details that represents an Alpha-2 ISO3166 country code
 * identity as well as a pair of latitude and longitude coordinates.
 */
export default class CappuccinoLocationDetails {
  readonly coords: LatLng<Degrees>;
  readonly country: string;

  constructor(coords: LatLng<Degrees>, country: string) {
    this.coords = coords;
    this.country = country;
  }

  toJSON() {
    return cappuccinoLocationDetailsCodec.encode(this);
  }
}

class CappuccinoLocationDetailsEncoder
  implements Converter<CappuccinoLocationDetails>
{
  convert(input: CappuccinoLocationDetails) {
    return {
      coords: latLngDegreesCodec.encode(input.coords),
      country: stringCodec.encode(input.country),
    };
  }
}

class CappuccinoLocationDetailsDecoder
  implements Converter<unknown, CappuccinoLocationDetails>
{
  convert(input: unknown) {
    assertRecordWithKeys(input, 'coords', 'country');
    return new CappuccinoLocationDetails(
      latLngDegreesCodec.decode(input.coords),
      stringCodec.decode(input.country),
    );
  }
}

class CappuccinoLocationDetailsCodec extends TypeCheckingCodec<CappuccinoLocationDetails> {
  readonly encoder = new CappuccinoLocationDetailsEncoder();
  readonly decoder = new CappuccinoLocationDetailsDecoder();
}

export const cappuccinoLocationDetailsCodec =
  new CappuccinoLocationDetailsCodec();
