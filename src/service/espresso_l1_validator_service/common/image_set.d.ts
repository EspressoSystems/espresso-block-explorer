import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { NullCodec } from '../../../../../../../../../../../src/convert/codec/null';
import { OptionalCodec } from '../../../../../../../../../../../src/convert/codec/optional';
import { RatioSet } from './ratio_set';
/**
 * ImageSet represents the same image represented in different sizes.
 */
export declare class ImageSet {
    readonly small: RatioSet;
    readonly large: RatioSet;
    constructor(small: RatioSet, large: RatioSet);
    toJSON(): unknown;
}
declare class ImageSetJSONDecoder implements Converter<unknown, ImageSet> {
    convert(input: unknown): ImageSet;
}
declare class ImageSetJSONEncoder implements Converter<ImageSet, unknown> {
    convert(input: ImageSet): unknown;
}
declare class ImageSetJSONCodec extends TypeCheckingCodec<ImageSet, unknown> {
    readonly encoder: ImageSetJSONEncoder;
    readonly decoder: ImageSetJSONDecoder;
}
export declare const imageSetJSONCodec: ImageSetJSONCodec;
export declare const nullableImageSetJSONCodec: NullCodec<ImageSet, unknown>;
export declare const optionalImageSetJSONCodec: OptionalCodec<ImageSet, unknown>;
export {};
