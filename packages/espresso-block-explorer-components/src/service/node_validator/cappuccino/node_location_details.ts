import {
  nullableStringCodec,
  NullCodec,
  NullDecoder,
  NullEncoder,
  preferNullOverEmptyString,
} from '@/convert/codec';
import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import Degrees from '@/models/geo/units/Degrees';
import LatLng, { nullableLatLngDegreesCodec } from '@/models/geo/units/LatLng';

/**
 * CappuccinoLocationDetails represents the location details of a Cappuccino
 * node.  It contains details that represents an Alpha-2 ISO3166 country code
 * identity as well as a pair of latitude and longitude coordinates.
 */
export default class CappuccinoLocationDetails {
  readonly coords: null | LatLng<Degrees>;
  readonly country: null | string;

  constructor(coords: null | LatLng<Degrees>, country: null | string) {
    this.coords = coords;
    this.country = country;
  }

  toJSON() {
    return cappuccinoLocationDetailsCodec.encode(this);
  }
}

class CappuccinoLocationDetailsEncoder implements Converter<CappuccinoLocationDetails> {
  convert(input: CappuccinoLocationDetails) {
    return {
      coords: nullableLatLngDegreesCodec.encode(input.coords),
      country: nullableStringCodec.encode(input.country),
    };
  }
}

class CappuccinoLocationDetailsDecoder implements Converter<
  unknown,
  CappuccinoLocationDetails
> {
  convert(input: unknown) {
    assertRecordWithKeys(input, 'coords', 'country');
    return new CappuccinoLocationDetails(
      nullableLatLngDegreesCodec.decode(input.coords),
      preferNullOverEmptyString(nullableStringCodec.decode(input.country)),
    );
  }
}

class CappuccinoLocationDetailsCodec extends TypeCheckingCodec<CappuccinoLocationDetails> {
  readonly encoder = new CappuccinoLocationDetailsEncoder();
  readonly decoder = new CappuccinoLocationDetailsDecoder();
}

export const cappuccinoLocationDetailsCodec =
  new CappuccinoLocationDetailsCodec();

export const nullableCappuccinoLocationDetailsCodec = new NullCodec(
  new NullDecoder(cappuccinoLocationDetailsCodec),
  new NullEncoder(cappuccinoLocationDetailsCodec),
);
