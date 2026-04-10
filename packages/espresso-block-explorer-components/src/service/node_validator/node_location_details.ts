import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import { NullCodec, NullDecoder, NullEncoder } from '@/convert/codec/null';
import {
  nullableStringCodec,
  preferNullOverEmptyString,
} from '@/convert/codec/string';
import { default as Degrees } from '@/models/geo/units/degrees';
import {
  default as LatLng,
  nullableLatLngDegreesCodec,
} from '@/models/geo/units/lat_lng';

/**
 * LocationDetails represents the location details of an Espresso
 * node.  It contains details that represents an Alpha-2 ISO3166 country code
 * identity as well as a pair of latitude and longitude coordinates.
 */
export default class LocationDetails {
  constructor(
    public readonly coords: null | LatLng<Degrees>,
    public readonly country: null | string,
  ) {}

  toJSON() {
    return locationDetailsCodec.encode(this);
  }
}

class LocationDetailsEncoder implements Converter<LocationDetails> {
  convert(input: LocationDetails) {
    return {
      coords: nullableLatLngDegreesCodec.encode(input.coords),
      country: nullableStringCodec.encode(input.country),
    };
  }
}

class LocationDetailsDecoder implements Converter<unknown, LocationDetails> {
  convert(input: unknown) {
    assertRecordWithKeys(input, 'coords', 'country');
    return new LocationDetails(
      nullableLatLngDegreesCodec.decode(input.coords),
      preferNullOverEmptyString(nullableStringCodec.decode(input.country)),
    );
  }
}

class LocationDetailsCodec extends TypeCheckingCodec<LocationDetails> {
  readonly encoder = new LocationDetailsEncoder();
  readonly decoder = new LocationDetailsDecoder();
}

export const locationDetailsCodec = new LocationDetailsCodec();

export const nullableLocationDetailsCodec = new NullCodec(
  new NullDecoder(locationDetailsCodec),
  new NullEncoder(locationDetailsCodec),
);
