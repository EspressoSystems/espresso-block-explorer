import {
  PieChart,
  PieChartEntry,
} from '@/components/visual/pie_chart/PieChart';
import { PieChartSectionTitle } from '@/components/visual/pie_chart/pie_chart_section_title/PieChartSectionTitle';
import { DataContext } from '@/contexts/DataProvider';
import { LoadingContext } from '@/contexts/LoadingProvider';
import Text from '@/text/Text';
import React from 'react';
import { alpha2CountryMap } from './alpha2CountryMap';

function expandAbbreviatedCountryName(abbreviatedCountryName: string): string {
  const value = alpha2CountryMap[abbreviatedCountryName];
  return value ?? abbreviatedCountryName;
}

function expandPieChartEntry(entry: PieChartEntry): PieChartEntry {
  return {
    label: expandAbbreviatedCountryName(entry.label),
    value: entry.value,
  };
}

export const CountriesPieChart: React.FC = () => {
  const loading = React.useContext(LoadingContext);
  const histogramData = React.useContext(DataContext) as PieChartEntry[];

  if (loading) {
    return <></>;
  }

  return (
    <>
      <PieChartSectionTitle>
        <Text text="Countries" />
      </PieChartSectionTitle>

      <PieChart values={histogramData.map(expandPieChartEntry)} />
    </>
  );
};
