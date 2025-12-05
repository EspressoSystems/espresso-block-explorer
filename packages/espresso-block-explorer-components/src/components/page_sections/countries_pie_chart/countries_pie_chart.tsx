import {
  PieChart,
  PieChartEntry,
} from '@/components/visual/pie_chart/pie_chart';
import { PieChartSectionTitle } from '@/components/visual/pie_chart/pie_chart_section_title/pie_chart_section_title';
import { DataContext } from '@/contexts/data_provider';
import { LoadingContext } from '@/contexts/loading_provider';
import Text from '@/text/text';
import React from 'react';
import { alpha2CountryMap } from './alpha2_country_map';

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

      <div className="card--padding">
        <PieChart values={histogramData.map(expandPieChartEntry)} />
      </div>
    </>
  );
};
