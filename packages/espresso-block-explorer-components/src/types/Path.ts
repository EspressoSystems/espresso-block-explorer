export default abstract class Path {
  abstract readonly path: string;

  toString(): string {
    return this.path;
  }

  valueOf(): string {
    return this.path;
  }

  toJSON(): string {
    return this.path;
  }
}
