import NumberText from '@/components/text/NumberText';
import {
  PieChart,
  PieChartEntry,
  PieChartLabelContext,
  PieChartLabelProps,
} from '@/components/visual/pie_chart/PieChart';
import { PieChartSectionTitle } from '@/components/visual/pie_chart/pie_chart_section_title/PieChartSectionTitle';
import { DataContext } from '@/contexts/DataProvider';
import { LoadingContext } from '@/contexts/LoadingProvider';
import Text from '@/text/Text';
import React from 'react';

const LabelValue: React.FC<PieChartLabelProps> = (props) => {
  return (
    <>
      <Text text={props.label} />
      <NumberText number={props.value} />
    </>
  );
};

export const NetworkTypesPieChart: React.FC = () => {
  const loading = React.useContext(LoadingContext);
  const histogramData = React.useContext(DataContext) as PieChartEntry[];

  if (loading) {
    return <></>;
  }

  return (
    <PieChartLabelContext.Provider value={LabelValue}>
      <PieChartSectionTitle>
        <Text text="Network Types" />
      </PieChartSectionTitle>

      <PieChart values={histogramData} />
    </PieChartLabelContext.Provider>
  );
};
