/**
 * NumberLike is an interface that represents a type that is ultimately backed
 * by, or whose value is represented by a Number.  In Javascript, any value
 * that is attempted to be treated like a number will ultimately result in
 * a call to `valueOf` on that object.  This interface is used to represent
 * that concept.
 */
export interface NumberLike {
  valueOf(): number;
}

/**
 * BaseNumeric is a base class that handles simple patterns of NumberLike
 * implementations.  These are cases where the value stored is ultimately
 * a scalar number, but which should be treated differently.  This is useful
 * for creating distinct types for a number that should be treated differently
 * in different contexts. This is useful for creating units, or other types
 * of specific number backed representations.
 */
export abstract class BaseNumeric<N extends NumberLike> implements NumberLike {
  constructor(readonly value: N) {
    this.value = value;
  }

  valueOf(): number {
    return Number(this.value);
  }

  toString(): string {
    return Number(this.value).toString();
  }
}

/**
 * lessThan is a function that compares two NumberLike objects and returns
 * true if the left hand side is less than the right hand side.
 */
export function lessThan<N extends NumberLike>(lhs: N, rhs: N): boolean {
  return lhs.valueOf() < rhs.valueOf();
}

/**
 * lessThanOrEqualTo is a function that compares two NumberLike objects and
 * returns true if the left hand side is less than or equal to the right hand
 * side.
 */
export function lessThanOrEqualTo<N extends NumberLike>(
  lhs: N,
  rhs: N,
): boolean {
  return lhs.valueOf() <= rhs.valueOf();
}

/**
 * greaterThan is a function that compares two NumberLike objects and returns
 * true if the left hand side is greater than the right hand side.
 */
export function greaterThan<N extends NumberLike>(lhs: N, rhs: N): boolean {
  return lhs.valueOf() > rhs.valueOf();
}

/**
 * greaterThanOrEqualTo is a function that compares two NumberLike objects and
 * returns true if the left hand side is greater than or equal to the right
 * hand side.
 */
export function greaterThanOrEqualTo<N extends NumberLike>(
  lhs: N,
  rhs: N,
): boolean {
  return lhs.valueOf() >= rhs.valueOf();
}

/**
 * equalTo is a function that compares two NumberLike objects and returns true
 * if the underlying number of the left hand side is equal to the underlying
 * number of the right hand side.
 */
export function equalTo<N extends NumberLike>(lhs: N, rhs: N): boolean {
  return lhs.valueOf() === rhs.valueOf();
}

/**
 * min is a function that returns the minimum of two NumberLike objects. The
 * actual object is returned instead of the number, so that the type of the
 * NumberLike values given are preserved.
 *
 * The specific value of the lhs or rhs that will be returned should they
 * be equal will not be documented, as it is not guaranteed to be consistent.
 *
 */
export function min<N extends NumberLike>(lhs: N, rhs: N): N {
  if (lessThanOrEqualTo(lhs, rhs)) {
    return lhs;
  }

  return rhs;
}

/**
 * max is a function that returns the maximum of two NumberLike objects. The
 * actual object is returned instead of the number, so that the type of the
 * NumberLike values given are preserved.
 *
 * The specific value of the lhs or rhs that will be returned should they
 * be equal will not be documented, as it is not guaranteed to be consistent.
 *
 */
export function max<N extends NumberLike>(lhs: N, rhs: N): N {
  if (greaterThan(lhs, rhs)) {
    return lhs;
  }

  return rhs;
}
