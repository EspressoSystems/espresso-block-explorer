export declare enum SortDirection {
    asc = 0,
    desc = 1
}
export declare function reverseSortDir<T>(sort: (a: T, b: T) => number): (a: T, b: T) => number;
