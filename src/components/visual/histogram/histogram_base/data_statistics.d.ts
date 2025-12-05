/**
 * DataStatistics is a class that holds some basic statistics that can be
 * derived from a collection of numbers.
 *
 * It provides various statistical data for consumption without the need to
 * recompute.
 */
export declare class DataStatistics {
    readonly min: number;
    readonly max: number;
    readonly mean: number;
    readonly total: number;
    readonly count: number;
    readonly length: number;
    /**
     * nullableMean will return `null` if the `count` is 0, otherwise it will
     * return what value is currently stored in `mean`.
     */
    get nullableMean(): null | number;
    constructor(min: number, max: number, total: number, count: number, length: number);
    static compute(data: (null | number)[]): DataStatistics;
    static empty: DataStatistics;
}
/**
 * computeDataStatistics takes the given `data` and returns `DataStatistics`
 * for the given data set.  It iterates over the entire range once, and will
 * collect and maintain running min, max, total, and count values.  Further
 * statistical information can be derived from these values.
 */
export declare function computeDataStatistics(data: (null | number)[]): DataStatistics;
