import { ErrorContext } from '@/components/contexts/error_provider';
import { CardNoPadding } from '@/components/layout/card/card';
import { DataContext } from '@/contexts/data_provider';
import { LoadingContext } from '@/contexts/loading_provider';
import SummaryTableLabeledValue from '@/layout/summary_table_labeled_value/summary_table_labeled_value';
import SummaryValueLabeled from '@/layout/summary_value_labeled/summary_value_labeled';
import { WithLoadingShimmer } from '@/loading/loading_shimmer';
import SkeletonContent from '@/loading/skeleton_content';
import { curatedMainnetList } from '@/models/block_explorer/rollup_entry/data';
import NumberText from '@/text/number_text';
import Text from '@/text/text';
import React from 'react';
import './explorer_overview.css';
import {
  ExplorerOverview,
  ExplorerOverviewProvider,
} from './explorer_overview_loader';

export const ExplorerOverviewHeading: React.FC = () => {
  return (
    <SummaryValueLabeled className="card--padding">
      <Text text="Overview" />
      <Text text="Since Genesis" />
    </SummaryValueLabeled>
  );
};

export const ExplorerOverviewDetails: React.FC = () => {
  const overview = React.useContext(ExplorerOverviewProvider);

  return (
    <div className="card--padding">
      <SummaryTableLabeledValue>
        <Text text="Rollups" />
        {/*
        TODO: revert this back to `overview.rollups` when the server is able to
        return the correct number of rollups.
         */}
        <NumberText number={curatedMainnetList.length} />
      </SummaryTableLabeledValue>
      <SummaryTableLabeledValue>
        <Text text="Transactions" />
        <NumberText number={overview.transactions} />
      </SummaryTableLabeledValue>
      <SummaryTableLabeledValue>
        <Text text="Blocks" />
        <NumberText number={overview.blocks} />
      </SummaryTableLabeledValue>
      <SummaryTableLabeledValue>
        <Text text="Validator nodes" />
        <NumberText number={overview.sequencerNodes} />
      </SummaryTableLabeledValue>
    </div>
  );
};

export const ExplorerOverviewDetailsPlaceholder: React.FC = () => {
  return (
    <div className="card--padding">
      <SummaryTableLabeledValue>
        <Text text="Rollups" />
        <SkeletonContent />
      </SummaryTableLabeledValue>
      <SummaryTableLabeledValue>
        <Text text="Transactions" />
        <SkeletonContent />
      </SummaryTableLabeledValue>
      <SummaryTableLabeledValue>
        <Text text="Blocks" />
        <SkeletonContent />
      </SummaryTableLabeledValue>
      <SummaryTableLabeledValue>
        <Text text="Validator nodes" />
        <SkeletonContent />
      </SummaryTableLabeledValue>
    </div>
  );
};

const CardNoPaddingWithShimmer = WithLoadingShimmer(CardNoPadding);
interface ExplorerOverviewPlaceholderProps {
  className?: string;
}
export const ExplorerOverviewPlaceholder: React.FC<
  ExplorerOverviewPlaceholderProps
> = (props) => {
  return (
    <CardNoPaddingWithShimmer {...props}>
      <ExplorerOverviewHeading />
      <hr />
      <ExplorerOverviewDetailsPlaceholder />
    </CardNoPaddingWithShimmer>
  );
};

interface ExplorerOverviewContentProps {}
export const ExplorerOverviewContent: React.FC<ExplorerOverviewContentProps> = (
  props,
) => {
  return (
    <CardNoPadding {...props}>
      <ExplorerOverviewHeading />
      <hr />
      <ExplorerOverviewDetails />
    </CardNoPadding>
  );
};

interface ExplorerOverviewProps {
  className?: string;
}
export const ExplorerOverviewAsyncHandler: React.FC<ExplorerOverviewProps> = (
  props,
) => {
  const error = React.useContext(ErrorContext);
  const loading = React.useContext(LoadingContext);
  const data = React.useContext(DataContext);

  if (error) {
    return <></>;
  }

  if (loading) {
    return <ExplorerOverviewPlaceholder {...props} />;
  }

  return (
    <ExplorerOverviewProvider.Provider value={data as ExplorerOverview}>
      <ExplorerOverviewContent {...props} />
    </ExplorerOverviewProvider.Provider>
  );
};
