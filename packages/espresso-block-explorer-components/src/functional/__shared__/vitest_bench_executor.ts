import { bench, describe } from 'vitest';
import { BenchmarkCase, BenchmarkEvaluator, BenchmarkSuite } from './bench';

class VitestBenchmarkEvaluator extends BenchmarkEvaluator {
  async runBenchmarkSuites(suites: readonly BenchmarkSuite[]) {
    const l = suites.length;
    for (let i = 0; i < l; i++) {
      const suite = suites[i];
      await this.runBenchmarkSuite(suite);
    }
  }

  public async runBenchmarkCases(cases: readonly BenchmarkCase[]) {
    await Promise.all(cases.map((c) => this.runBenchmarkCase(c)));
  }

  async runBenchmarkSuite(suite: BenchmarkSuite) {
    await describe(suite.name, async () => {
      await this.runBenchmarkCases(suite.cases);
      await this.runBenchmarkSuites(suite.suites);
    });
  }

  async runBenchmarkCase(benchCase: BenchmarkCase) {
    await bench(benchCase.name, async () => {
      // We choose 1000 iterations as a default for vitest benchmarks
      await benchCase.execute(1000);
    });
  }
}

export const vitestBenchExecutor = new VitestBenchmarkEvaluator();
