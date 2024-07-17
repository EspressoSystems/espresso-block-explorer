import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { RunBenchmark } from '../../__shared__/benchmark_display';
import { mapBenchSuites } from '../__shared__/bench_suites';

interface ExampleProps {}

const Example: React.FC<ExampleProps> = () => {
  return <RunBenchmark suites={mapBenchSuites} />;
};

const meta: Meta<typeof Example> = {
  title: 'Benchmarks/Functional/Map',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Map: Story = {
  args: {},
};
