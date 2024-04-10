/**
 * DataStatistics is a class that holds some basic statistics that can be
 * derived from a collection of numbers.
 *
 * It provides various statistical data for consumption without the need to
 * recompute.
 */
export class DataStatistics {
  readonly min: number;
  readonly max: number;
  readonly mean: number;
  readonly total: number;
  readonly count: number;

  constructor(min: number, max: number, total: number, count: number) {
    this.min = min;
    this.max = max;
    this.total = total;
    this.count = count;
    this.mean = total / count;
  }

  static compute(data: number[]): DataStatistics {
    return computeDataStatistics(data);
  }

  static empty = new DataStatistics(0, 0, 0, 0);
}

/**
 * computeDataStatistics takes the given `data` and returns `DataStatistics`
 * for the given data set.  It iterates over the entire range once, and will
 * collect and maintain running min, max, total, and count values.  Further
 * statistical information can be derived from these values.
 */
export function computeDataStatistics(data: number[]): DataStatistics {
  const l = data.length;
  if (l === 0) {
    return new DataStatistics(0, 0, 0, 0);
  }

  let min = data[0];
  let max = data[0];
  let sum = 0;

  for (let i = 0; i < l; i++) {
    const point = data[i];
    sum += point;
    if (point < min) {
      min = point;
    }
    if (point > max) {
      max = point;
    }
  }

  return new DataStatistics(min, max, sum, l);
}
