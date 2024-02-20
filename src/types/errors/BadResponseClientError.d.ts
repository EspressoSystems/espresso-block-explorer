import BadResponseError from './BadResponseError';
/**
 * BadResponseClientError is a more specific BadResponse error that indicates
 * the nature of the failure was due to a client submission error.
 */
export default class BadResponseClientError extends BadResponseError {
    constructor(response: Response, message?: string);
    toJSON(): {
        name: string;
        status: number;
        message: string;
    };
}
