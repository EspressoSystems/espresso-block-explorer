import { Converter } from '../convert';
import { EspressoError } from './EspressoError';

/**
 * BaseError is a base class for all custom errors that helps to automatically
 * add a toJSON method to ensure that these errors can be serialized to JSON
 * when necessary.
 */
export default class BaseError extends Error implements EspressoError {
    constructor(message: string);
    get code(): string;
    toJSON(): unknown;
}
export declare class BaseErrorEncoder implements Converter<BaseError> {
    convert(input: BaseError): {
        readonly code: string;
        readonly message: string;
    };
}
export declare const baseErrorEncoder: BaseErrorEncoder;
