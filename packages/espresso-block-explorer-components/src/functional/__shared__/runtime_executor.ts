import { BenchmarkCase, BenchmarkEvaluator, BenchmarkSuite } from './bench';

export interface BenchmarkSuiteResult {
  name: string;
  caseResults: BenchmarkCaseResult[];
  suiteResults: BenchmarkSuiteResult[];
}

export interface BenchmarkCaseResult {
  name: string;
  n: number;
  startMark: PerformanceMark;
  endMark: PerformanceMark;
  measure: PerformanceMeasure;
}

class RuntimeBenchmarkEvaluator extends BenchmarkEvaluator<
  BenchmarkSuiteResult[],
  BenchmarkSuiteResult,
  BenchmarkCaseResult[],
  BenchmarkCaseResult
> {
  readonly targetDurationMs = 1000;
  readonly epsilon = 20;

  async runBenchmarkSuites(suites: readonly BenchmarkSuite[]) {
    return Promise.all(suites.map((suite) => this.runBenchmarkSuite(suite)));
  }

  async runBenchmarkSuite(
    suite: BenchmarkSuite,
  ): Promise<BenchmarkSuiteResult> {
    return {
      name: suite.name,
      caseResults: await this.runBenchmarkCases(suite.cases),
      suiteResults: await this.runBenchmarkSuites(suite.suites),
    };
  }

  async runBenchmarkCases(
    cases: readonly BenchmarkCase[],
  ): Promise<BenchmarkCaseResult[]> {
    return Promise.all(cases.map((c) => this.runBenchmarkCase(c)));
  }

  async runBenchmarkCase(
    benchCase: BenchmarkCase,
  ): Promise<BenchmarkCaseResult> {
    // We want to see how many operations we can do given a fixed time budget.
    // In this case, we'll target 1 second, and start with a pessimistic
    // number of iterations, then slowly ramp up the iterations until we hit
    // the time budget.

    const maxAttempts = 5;

    let samples = 100;
    let i = 0;
    while (true) {
      const result = await this.evaluateBenchmarkCaseWithIterations(
        benchCase,
        samples,
      );

      i++;

      const factor =
        this.targetDurationMs /
        (result.endMark.startTime - result.startMark.startTime);

      if (
        result.measure.duration >= this.targetDurationMs - this.epsilon ||
        i >= maxAttempts ||
        factor < 1
      ) {
        return {
          name: benchCase.name,
          n: result.n,
          startMark: result.startMark,
          endMark: result.endMark,
          measure: result.measure,
        };
      }

      // Ramp up the number of attempts.
      if (factor > 10) {
        samples = samples * 10;
      } else {
        samples = Math.floor(samples * factor);
      }
    }
  }

  async evaluateBenchmarkCaseWithIterations(
    benchCase: BenchmarkCase,
    iterations: number,
  ): Promise<Omit<BenchmarkCaseResult, 'name'>> {
    const startMark = `${benchCase.name}-start`;
    const endMark = `${benchCase.name}-end`;
    performance.clearMarks();
    performance.clearMeasures();
    // performance.clearResourceTimings();
    const startMarkPerformance = performance.mark(startMark);
    await benchCase.execute(iterations);
    const endMarkPerformance = performance.mark(endMark);

    const measure = performance.measure(startMark, endMark);
    return {
      n: iterations,
      startMark: startMarkPerformance,
      endMark: endMarkPerformance,
      measure,
    };
  }
}

export const runtimeBenchExecutor = new RuntimeBenchmarkEvaluator();

function printSuiteResult(
  suiteResult: BenchmarkSuiteResult,
  indent: number,
): void {
  const indentStr = ' '.repeat(indent * 2);
  console.log(indentStr, '===', suiteResult.name);
  printCaseResults(suiteResult.caseResults, indent + 1);

  for (const childSuiteResult of suiteResult.suiteResults) {
    printSuiteResult(childSuiteResult, indent + 1);
  }
}

export function formatCaseOpsDuration(caseResult: BenchmarkCaseResult): string {
  const durationNS =
    ((caseResult.endMark.startTime - caseResult.startMark.startTime) * 1e6) /
    caseResult.n;

  if (durationNS <= 1e3) {
    return `${durationNS.toFixed(4)} ns/op`;
  }

  const durationMicroS = durationNS / 1e3;
  if (durationMicroS <= 1e3) {
    return `${durationMicroS.toFixed(4)} µs/op`;
  }

  const durationMS = durationMicroS / 1e3;
  if (durationMS <= 1e3) {
    return `${durationMS.toFixed(4)} ms/op`;
  }

  const durationS = durationMS / 1e3;
  return `${durationS.toFixed(4)} s/op`;
}

function printCaseResults(caseResults: BenchmarkCaseResult[], indent: number) {
  // We want to measure all of the strings to make sure they line up nicely.
  const indentStr = ' '.repeat(indent * 2);
  const formats = caseResults.map((caseResult) => [
    caseResult.name,
    Number(caseResult.n).toString(),
    formatCaseOpsDuration(caseResult),
  ]);

  const [l1, l2, l3] = formats.reduce(
    ([a1, a2, a3], [s1, s2, s3]) => [
      Math.max(a1, s1.length),
      Math.max(a2, s2.length),
      Math.max(a3, s3.length),
    ],
    [0, 0, 0],
  );

  for (const [name, nStr, durationStr] of formats) {
    console.log(
      [
        indentStr,
        name,
        '\t'.repeat(Math.floor((l1 - name.length) / 8) + 1),
        nStr,
        '\t'.repeat(Math.floor((l2 - nStr.length) / 8) + 1),
        durationStr,
        '\t'.repeat(Math.floor((l3 - durationStr.length) / 8) + 1),
      ].join(''),
    );
  }
}

export async function runBenchmarksRuntime(
  suites: readonly BenchmarkSuite[],
): Promise<BenchmarkSuiteResult[]> {
  const results = await runtimeBenchExecutor.runBenchmarkSuites(suites);

  for (const suiteResult of results) {
    printSuiteResult(suiteResult, 0);
  }

  return results;
}
