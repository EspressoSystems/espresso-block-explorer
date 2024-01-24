export enum SortDirection {
  asc,
  desc,
}

export function reverseSortDir<T>(
  sort: (a: T, b: T) => number,
): (a: T, b: T) => number {
  return (a: T, b: T) => -sort(a, b);
}
