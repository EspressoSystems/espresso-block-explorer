export default abstract class Path {
    abstract readonly path: string;
    toString(): string;
    valueOf(): string;
    toJSON(): string;
}
