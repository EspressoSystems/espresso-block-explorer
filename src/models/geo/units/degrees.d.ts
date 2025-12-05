import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { BaseNumeric, NumberLike } from '../../numeric/numeric';
/**
 * Degrees is a class that represents that the numeric value that is stored
 * is a value that is represented in degrees.  This class exists in an effort
 * to catch Radian / Degree mismatches.
 */
export default class Degrees extends BaseNumeric<NumberLike> {
    toString(): string;
}
declare class DegreesCodec extends TypeCheckingCodec<Degrees, number> {
    readonly encoder: Converter<Degrees, number>;
    readonly decoder: Converter<unknown, Degrees>;
    constructor();
}
export declare const degreesCodec: DegreesCodec;
export {};
