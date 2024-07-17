/**
 * BenchmarkEvaluator is an abstract class that defines the interface for
 * evaluating benchmark suites and cases.
 */
export abstract class BenchmarkEvaluator<
  BenchMarkSuitesResult = void,
  BenchMarkSuiteResult = void,
  BenchMarkCasesResult = void,
  BenchMarkCaseResult = void,
> {
  public abstract runBenchmarkSuites(
    suites: readonly BenchmarkSuite[],
  ): Promise<BenchMarkSuitesResult>;

  public abstract runBenchmarkSuite(
    suite: BenchmarkSuite,
  ): Promise<BenchMarkSuiteResult>;

  public abstract runBenchmarkCases(
    cases: readonly BenchmarkCase[],
  ): Promise<BenchMarkCasesResult>;

  public abstract runBenchmarkCase(
    benchCase: BenchmarkCase,
  ): Promise<BenchMarkCaseResult>;
}

/**
 * BenchmarkSuite represents a suite of benchmark cases and nested suites.
 */
export abstract class BenchmarkSuite {
  abstract readonly name: string;
  abstract readonly cases: readonly BenchmarkCase[];
  abstract readonly suites: readonly BenchmarkSuite[];
}

/**
 * BenchmarkCase represents a single benchmark case.
 */
export abstract class BenchmarkCase {
  abstract readonly name: string;
  abstract readonly execute: (n: number) => Promise<void>;
}

/**
 * BenchMarkSuiteImpl is a basic implementation of the BenchmarkSuite class.
 */
class BenchMarkSuiteImpl extends BenchmarkSuite {
  constructor(
    public readonly name: string,
    public readonly cases: readonly BenchmarkCase[],
    public readonly suites: readonly BenchmarkSuite[] = [],
  ) {
    super();
  }
}

/**
 * createBenchmarkSuite creates a new BenchmarkSuite with the given name,
 * cases, and nested suites.
 */
export function createBenchmarkSuite(
  name: string,
  cases: readonly BenchmarkCase[],
  suites: readonly BenchmarkSuite[] = [],
): BenchmarkSuite {
  return new BenchMarkSuiteImpl(name, cases, suites);
}

/**
 * BenchmarkCaseImpl is a basic implementation of the BenchmarkCase class.
 */
class BenchmarkCaseImpl extends BenchmarkCase {
  constructor(
    public readonly name: string,
    public readonly execute: (n: number) => Promise<void>,
  ) {
    super();
  }
}

/**
 * createBenchmarkCase creates a new BenchmarkCase with the given name and
 * execute function.
 */
export function createBenchmarkCase(
  name: string,
  execute: (n: number) => Promise<void>,
): BenchmarkCase {
  return new BenchmarkCaseImpl(name, execute);
}
