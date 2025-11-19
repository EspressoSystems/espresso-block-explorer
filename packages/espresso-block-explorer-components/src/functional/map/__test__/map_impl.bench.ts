import { vitestBenchExecutor } from '@/functional/__shared__/vitest_bench_executor';
import { mapBenchSuites } from '../__shared__/bench_suites';

vitestBenchExecutor.runBenchmarkSuites(mapBenchSuites);
