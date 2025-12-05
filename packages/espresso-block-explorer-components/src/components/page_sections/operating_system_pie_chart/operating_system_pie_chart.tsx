import NumberText from '@/components/text/number_text';
import {
  PieChart,
  PieChartEntry,
  PieChartLabelContext,
  PieChartLabelProps,
} from '@/components/visual/pie_chart/pie_chart';
import { PieChartSectionTitle } from '@/components/visual/pie_chart/pie_chart_section_title/pie_chart_section_title';
import { DataContext } from '@/contexts/data_provider';
import { LoadingContext } from '@/contexts/loading_provider';
import Text from '@/text/text';
import React from 'react';

const LabelValue: React.FC<PieChartLabelProps> = (props) => {
  return (
    <>
      <Text text={props.label} />
      <NumberText number={props.value} />
    </>
  );
};

export const OperatingSystemPieChart: React.FC = () => {
  const loading = React.useContext(LoadingContext);
  const histogramData = React.useContext(DataContext) as PieChartEntry[];

  if (loading) {
    return <></>;
  }

  return (
    <PieChartLabelContext.Provider value={LabelValue}>
      <PieChartSectionTitle>
        <Text text="Operating System" />
      </PieChartSectionTitle>

      <div className="card--padding">
        <PieChart values={histogramData} />
      </div>
    </PieChartLabelContext.Provider>
  );
};
