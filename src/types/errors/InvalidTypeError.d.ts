export default class InvalidTypeError extends Error {
    readonly have: string;
    readonly want: string;
    constructor(haveType: string, wantType: string, message?: string);
    toJSON(): {
        name: string;
        have: string;
        want: string;
        message: string;
    };
}
