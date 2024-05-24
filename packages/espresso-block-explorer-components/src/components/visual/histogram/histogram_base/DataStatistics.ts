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
  readonly length: number;

  constructor(
    min: number,
    max: number,
    total: number,
    count: number,
    length: number,
  ) {
    this.min = min;
    this.max = max;
    this.total = total;
    this.count = count;
    this.length = length;
    this.mean = total / count;
  }

  static compute(data: number[]): DataStatistics {
    return computeDataStatistics(data);
  }

  static empty = new DataStatistics(0, 0, 0, 0, 0);
}

/**
 * computeDataStatistics takes the given `data` and returns `DataStatistics`
 * for the given data set.  It iterates over the entire range once, and will
 * collect and maintain running min, max, total, and count values.  Further
 * statistical information can be derived from these values.
 */
export function computeDataStatistics(data: (null | number)[]): DataStatistics {
  const l = data.length;
  if (l === 0) {
    return new DataStatistics(0, 0, 0, 0, 0);
  }

  let min = null;
  let max = null;
  let sum = 0;
  let count = 0;

  for (let i = 0; i < l; i++) {
    const point = data[i];
    if (point === null) {
      continue;
    }

    count++;
    sum += point;
    if (min === null || point < min) {
      min = point;
    }
    if (max === null || point > max) {
      max = point;
    }
  }

  const sameMinAndMax = min === max;
  if (sameMinAndMax && min !== 0) {
    min = 0;
  }

  if (sameMinAndMax && max === 0) {
    max = 1;
  }

  return new DataStatistics(min ?? 0, max ?? 0, sum ?? 0, count, l);
}
