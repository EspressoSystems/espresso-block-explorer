/**
 * BadResponseError is a custom error that indicates that the result of a fetch
 * request was a Response that indicates a non-success.
 */
export default class BadResponseError extends Error {
    readonly response: Response;
    constructor(response: Response, message?: string);
    toJSON(): {
        name: string;
        status: number;
        message: string;
    };
}
