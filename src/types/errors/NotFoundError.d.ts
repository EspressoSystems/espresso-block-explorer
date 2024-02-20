/**
 * NotFoundError is an error that indicates that the resource for the specified
 * key was unable to be found.
 */
export default class NotFoundError<Key> extends Error {
    readonly key: Key;
    constructor(key: Key, message?: string);
    toJSON(): {
        name: string;
        key: Key;
        message: string;
    };
}
