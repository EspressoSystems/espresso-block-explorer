export interface Range {
  readonly start: number;
  readonly end: number;

  [Symbol.iterator](): Iterator<number>;
}

abstract class RangeBase implements Range {
  constructor(
    public readonly start: number,
    public readonly end: number,
  ) {
    Object.freeze(this);
  }

  abstract [Symbol.iterator](): Iterator<number>;
}

class RangeIterator implements Iterator<number> {
  constructor(
    private start: number,
    private end: number,
  ) {}

  next(): IteratorResult<number> {
    if (this.start >= this.end) {
      return { value: undefined, done: true };
    }

    return { value: this.start++, done: false };
  }
}

class InclusiveRange extends RangeBase {
  constructor(start: number, end: number) {
    super(start, end);
  }

  [Symbol.iterator]() {
    return new RangeIterator(this.start, this.end);
  }

  toString() {
    return `[${this.start}, ${this.end}]`;
  }
}

class InslusiveStartExclusiveEndRange extends RangeBase {
  constructor(start: number, end: number) {
    super(start, end);
  }

  [Symbol.iterator]() {
    return new RangeIterator(this.start, this.end - 1);
  }

  toString() {
    return `[${this.start}, ${this.end})`;
  }
}

export function inclusiveRange(start: number, end: number): Range {
  return new InclusiveRange(start, end);
}

export function inclusiveStart(start: number, end: number): Range {
  return new InslusiveStartExclusiveEndRange(start, end);
}
