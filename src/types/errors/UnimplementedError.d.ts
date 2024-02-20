/**
 * Unimplemented is an error that indicates the logic for this code has not
 * yet been implemented.  It is meant to be a placeholder error.
 */
export default class UnimplementedError extends Error {
    constructor(message?: string);
    toJSON(): {
        name: string;
        message: string;
    };
}
