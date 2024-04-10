import React from 'react';
import { DataContext } from '../../contexts/DataProvider';
import { LoadingContext } from '../../contexts/LoadingProvider';
import { CardNoPadding } from '../../layout/card/Card';
import SummaryTabledLabeledValue from '../../layout/summary_table_labeled_value/SummaryTabledLabeledValue';
import SummaryValueLabeled from '../../layout/summary_value_labeled/SummaryValueLabeled';
import { WithLoadingShimmer } from '../../loading/LoadingShimmer';
import SkeletonContent from '../../loading/SkeletonContent';
import NumberText from '../../text/NumberText';
import Text from '../../text/Text';
import {
  ExplorerOverview,
  ExplorerOverviewProvider,
} from './ExplorerOverviewLoader';
import './explorer_overview.css';

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
      <SummaryTabledLabeledValue>
        <Text text="Rollups" />
        <NumberText number={overview.rollups} />
      </SummaryTabledLabeledValue>
      <SummaryTabledLabeledValue>
        <Text text="Transactions" />
        <NumberText number={overview.transactions} />
      </SummaryTabledLabeledValue>
      <SummaryTabledLabeledValue>
        <Text text="Blocks" />
        <NumberText number={overview.blocks} />
      </SummaryTabledLabeledValue>
      <SummaryTabledLabeledValue>
        <Text text="Sequencer nodes" />
        <NumberText number={overview.sequencerNodes} />
      </SummaryTabledLabeledValue>
    </div>
  );
};

export const ExplorerOverviewDetailsPlaceholder: React.FC = () => {
  return (
    <div className="card--padding">
      <SummaryTabledLabeledValue>
        <Text text="Rollups" />
        <SkeletonContent />
      </SummaryTabledLabeledValue>
      <SummaryTabledLabeledValue>
        <Text text="Transactions" />
        <SkeletonContent />
      </SummaryTabledLabeledValue>
      <SummaryTabledLabeledValue>
        <Text text="Blocks" />
        <SkeletonContent />
      </SummaryTabledLabeledValue>
      <SummaryTabledLabeledValue>
        <Text text="Sequencer nodes" />
        <SkeletonContent />
      </SummaryTabledLabeledValue>
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
  const loading = React.useContext(LoadingContext);
  const data = React.useContext(DataContext);

  if (loading) {
    return <ExplorerOverviewPlaceholder {...props} />;
  }

  return (
    <ExplorerOverviewProvider.Provider value={data as ExplorerOverview}>
      <ExplorerOverviewContent {...props} />
    </ExplorerOverviewProvider.Provider>
  );
};
