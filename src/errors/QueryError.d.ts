import { Converter, TypeCheckingCodec } from '../../../../../../../../../src/convert/codec/convert';
import { default as BaseError } from './BaseError';

/**
 * QueryError represents an error due to the querying code of the HotShot
 * Query Service.  Specifically it indicates an issue with retrieving, or
 * generally interacting with the database.
 */
export default class QueryError extends BaseError {
    readonly error: QuerySubError;
    constructor(error: QuerySubError, message?: string);
    get code(): string;
}
declare class QueryErrorCodec extends TypeCheckingCodec<QueryError> {
    readonly encoder: Converter<QueryError, unknown>;
    readonly decoder: Converter<unknown, QueryError>;
}
export declare const missingElementErrorCodec: QueryErrorCodec;
/**
 * QuerySubError represents the specific underlying reason for a failure due
 * to a QueryError.
 */
declare abstract class QuerySubError {
}
declare class QuerySubErrorNotFound extends QuerySubError {
    constructor();
    valueOf(): string;
    toJSON(): string;
}
export declare const querySubErrorNotFound: QuerySubErrorNotFound;
declare class QuerySubErrorMissing extends QuerySubError {
    constructor();
    valueOf(): string;
    toJSON(): string;
}
export declare const querySubErrorMissing: QuerySubErrorMissing;
/**
 * QuerySubErrorError represents a generic error that occurred during the query
 * process.
 */
export declare class QuerySubErrorError extends QuerySubError {
    readonly error: QuerySubErrorWrapper;
    constructor(error: QuerySubErrorWrapper);
    toJSON(): unknown;
}
export declare class QuerySubErrorWrapper {
    readonly message: string;
    constructor(message: string);
    toJSON(): unknown;
}
declare class QuerySubErrorCodec extends TypeCheckingCodec<QuerySubError> {
    readonly encoder: Converter<QuerySubError, unknown>;
    readonly decoder: Converter<unknown, QuerySubError>;
}
export declare const querySubErrorCodec: QuerySubErrorCodec;
export {};
