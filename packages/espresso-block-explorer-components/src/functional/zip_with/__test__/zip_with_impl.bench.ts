import { vitestBenchExecutor } from '@/functional/__shared__/vitest_bench_executor';
import { zipWithBenchSuites } from '../__shared__/bench_suites';

vitestBenchExecutor.runBenchmarkSuites(zipWithBenchSuites);
