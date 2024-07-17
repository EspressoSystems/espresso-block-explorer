import { runBenchmarksRuntime } from '../../__shared__/runtime_executor';
import { mapBenchSuites } from './bench_suites';

async function main() {
  await runBenchmarksRuntime(mapBenchSuites);
}

main();
