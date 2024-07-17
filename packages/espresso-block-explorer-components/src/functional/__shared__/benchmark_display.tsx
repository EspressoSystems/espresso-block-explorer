import { sleep } from '@/async/sleep';
import { DataContext } from '@/components/contexts/DataProvider';
import { PromiseResolver } from '@/components/data';
import { CircularProgressIndicator } from '@/components/loading';
import NumberText from '@/components/text/NumberText';
import Text from '@/components/text/Text';
import React from 'react';
import { BenchmarkSuite } from './bench';
import {
  BenchmarkSuiteResult,
  formatCaseOpsDuration,
  runtimeBenchExecutor,
} from './runtime_executor';

/**
 * BenchmarkSuiteContext provides the current benchmark suite result to its
 * children.
 */
const BenchmarkSuiteContext = React.createContext<BenchmarkSuiteResult | null>(
  null,
);

/**
 * DisplayBenchMarkResults displays the benchmark results from the DataContext.
 */
const DisplayBenchMarkResults: React.FC = () => {
  const data = React.useContext(DataContext) as
    | null
    | undefined
    | BenchmarkSuiteResult[];
  if (!data) {
    return (
      <div>
        <CircularProgressIndicator />
      </div>
    );
  }

  return (
    <>
      <h1>
        <Text text="Benchmark Results" />
      </h1>
      {data.map((result, index) => (
        <BenchmarkSuiteContext.Provider value={result} key={index}>
          <BenchmarkSuiteResultComp />
        </BenchmarkSuiteContext.Provider>
      ))}
    </>
  );
};

/**
 * BenchmarkSuiteResultComp displays the results of a single benchmark suite.
 * It recursively displays any nested suites.
 */
const BenchmarkSuiteResultComp: React.FC = () => {
  const suiteResult = React.useContext(BenchmarkSuiteContext)!;

  return (
    <>
      <h2>
        <Text text={suiteResult.name} />
      </h2>
      {suiteResult.suiteResults.map((result, index) => (
        <BenchmarkSuiteContext.Provider value={result} key={index}>
          <BenchmarkSuiteResultComp />
        </BenchmarkSuiteContext.Provider>
      ))}
      <br />

      <table>
        <tbody>
          {suiteResult.caseResults.map((result, index) => (
            <tr key={index}>
              <td>
                <Text text={result.name} />
              </td>
              <td>
                <NumberText number={result.n} />
              </td>
              <td>
                <Text text={formatCaseOpsDuration(result)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

/**
 * RunBenchmarkProps are the props for the RunBenchmark component.
 */
export interface RunBenchmarkProps {
  suites: BenchmarkSuite[];
}

/**
 * RunBenchmark runs the provided benchmark suites and displays the results.
 */
export const RunBenchmark: React.FC<RunBenchmarkProps> = ({ suites }) => {
  return (
    <PromiseResolver
      promise={sleep(100).then(() =>
        runtimeBenchExecutor.runBenchmarkSuites(suites),
      )}
    >
      <DisplayBenchMarkResults />
    </PromiseResolver>
  );
};
