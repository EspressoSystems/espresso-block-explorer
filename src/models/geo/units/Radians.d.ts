import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { BaseNumeric, NumberLike } from '../../numeric/numeric';

/**
 * Radians is a class that represents that the numeric value that is stored
 * as a quantity of the ratio between a radius and the circumference.  This
 * class exists in an effort to catch Radian / Degree mismatches.
 */
export default class Radians extends BaseNumeric<NumberLike> {
    toString(): string;
}
declare class RadiansCodec extends TypeCheckingCodec<Radians, number> {
    readonly encoder: Converter<Radians, number>;
    readonly decoder: Converter<unknown, Radians>;
    constructor();
}
export declare const radiansCodec: RadiansCodec;
export {};
