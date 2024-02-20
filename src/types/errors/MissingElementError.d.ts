/**
 * MissingElementError is an error that indicates that a member of a collection
 * was not present.  This generally occurs when the collection lacks the
 * necessary number of elements.
 */
export default class MissingElementError extends Error {
    constructor(message?: string);
    toJSON(): {
        name: string;
        message: string;
    };
}
