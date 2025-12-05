export default class NoCodecFoundError extends Error {
    readonly codec: string;
    constructor(codec: string, message?: string);
    toJSON(): {
        code: string;
        message: string;
        codec: string;
    };
    get code(): string;
}
