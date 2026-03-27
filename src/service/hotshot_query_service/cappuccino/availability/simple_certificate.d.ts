import { Codec, Converter } from '../../../../../../../../../../../../src/convert/codec/convert';
import { TaggedBase64 } from '../../../../../../../../../../../../src/models/espresso/tagged_base64/tagged_base64';
import { SimpleCertificateSignatures } from './simple_certificate_signatures';
/**
 * SimpleCertificate represents a generic certificate that has been formed
 * as part of a voting process.
 *
 * It is generic in the data that it holds, but the remaining fields are
 * always the same.
 */
export declare class SimpleCertificate<T> {
    readonly data: T;
    readonly vote_commitment: TaggedBase64;
    readonly view_number: number;
    readonly signatures: null | SimpleCertificateSignatures;
    readonly is_genesis: boolean;
    readonly _pd: null;
    constructor(data: T, vote_commitment: TaggedBase64, view_number: number, signatures: null | SimpleCertificateSignatures, is_genesis: boolean, _pd: null);
}
export declare class SimpleCertificateDecoder<T> implements Converter<unknown, SimpleCertificate<T>> {
    private readonly codec;
    constructor(codec: Codec<T, unknown>);
    convert(input: unknown): SimpleCertificate<T>;
}
export declare class SimpleCertificateEncoder<T> implements Converter<SimpleCertificate<T>> {
    private readonly codec;
    constructor(codec: Codec<T, unknown>);
    convert(input: SimpleCertificate<T>): {
        data: unknown;
        vote_commitment: string;
        view_number: number;
        signatures: (string | {
            order: string;
            head: {
                width: number;
                index: number;
            };
            bits: number;
            data: `0x${string}`[];
        })[] | null;
        is_genesis: boolean;
        _pd: null;
    };
}
