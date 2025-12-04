import { NullCodec, NullDecoder, NullEncoder } from '@/convert/codec';
import { Codec, Converter, TypeCheckingCodec } from '@/convert/codec/convert';
import InvalidTypeError from '@/errors/InvalidTypeError';
import { NumberLike, max, min } from '../../numeric/numeric';
import { degreesCodec } from './Degrees';
import Latitude from './Latitude';
import Longitude from './Longitude';
import { radiansCodec } from './Radians';
import { GenericLATLNG } from './latlng_interface';

/**
 * LatLng represents a tuple of latitude and longitude values.
 * It exists for convenience and type safety.
 *
 * `LatLng` is used instead of `LatitudeLongitude` for convenience and
 * quicker typing.
 */
export default class LatLng<Unit extends NumberLike> implements GenericLATLNG<
  Latitude<Unit>,
  Longitude<Unit>
> {
  constructor(
    public readonly lat: Latitude<Unit>,
    public readonly lng: Longitude<Unit>,
  ) {
    this.lat = lat;
    this.lng = lng;
  }

  min(o: LatLng<Unit>): LatLng<Unit> {
    return new LatLng(min(this.lat, o.lat), min(this.lng, o.lng));
  }

  max(o: LatLng<Unit>): LatLng<Unit> {
    return new LatLng(max(this.lat, o.lat), max(this.lng, o.lng));
  }

  toString(): string {
    return `${this.lat}, ${this.lng}`;
  }
}

export class LatLngEncoder<Unit extends NumberLike> implements Converter<
  LatLng<Unit>,
  [number, number]
> {
  readonly unitCodec: Codec<Unit, number, unknown>;
  constructor(unitCodec: Codec<Unit, number, unknown>) {
    this.unitCodec = unitCodec;
  }
  convert(input: LatLng<Unit>): [number, number] {
    return [
      this.unitCodec.encode(input.lat.value),
      this.unitCodec.encode(input.lng.value),
    ];
  }
}

export class LatLngDecoder<Unit extends NumberLike> implements Converter<
  unknown,
  LatLng<Unit>
> {
  readonly unitCodec: Codec<Unit, number, unknown>;
  constructor(unitCodec: Codec<Unit, number, unknown>) {
    this.unitCodec = unitCodec;
  }
  convert(input: unknown): LatLng<Unit> {
    if (!(input instanceof Array)) {
      throw new InvalidTypeError(typeof input, 'Array');
    }

    if (input.length !== 2) {
      throw new TypeError(`Expected array of length 2, got ${input.length}`);
    }

    const [lat, lng] = input as [Unit, Unit];
    return new LatLng(
      new Latitude(this.unitCodec.decode(lat)),
      new Longitude(this.unitCodec.decode(lng)),
    );
  }
}

export class LatLngCodec<Unit extends NumberLike> extends TypeCheckingCodec<
  LatLng<Unit>,
  unknown
> {
  readonly encoder: Converter<LatLng<Unit>, [number, number]>;
  readonly decoder: Converter<unknown, LatLng<Unit>>;
  constructor(unitCodec: Codec<Unit, number, unknown>) {
    super();
    this.encoder = new LatLngEncoder(unitCodec);
    this.decoder = new LatLngDecoder(unitCodec);
  }
}

export const latLngDegreesCodec = new LatLngCodec(degreesCodec);
export const latLngRadiansCodec = new LatLngCodec(radiansCodec);
export const nullableLatLngDegreesCodec = new NullCodec(
  new NullDecoder(latLngDegreesCodec),
  new NullEncoder(latLngDegreesCodec),
);
export const nullableLatLngRadiansCodec = new NullCodec(
  new NullDecoder(latLngRadiansCodec),
  new NullEncoder(latLngRadiansCodec),
);
