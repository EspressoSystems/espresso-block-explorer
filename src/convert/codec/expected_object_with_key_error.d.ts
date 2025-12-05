/**
 * ExpectedObjectWithKeyError is thrown when the inspection of an object fails
 * to make the expected shape.  This is usually encountered when attempting to
 * deserialize and inflate an object from a serialized, or primitive form.
 */
export default class ExpectedObjectWithKeyError extends Error {
    readonly key: string;
    readonly haveType: string;
    constructor(haveType: string, key: string, message?: string);
    toJSON(): {
        readonly code: string;
        readonly message: string;
        readonly have: string;
        readonly key: string;
    };
}
