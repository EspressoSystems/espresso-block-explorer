import { ErrorContext } from '@/components/contexts';
import NumberText from '@/components/text/NumberText';
import Text from '@/components/text/Text';
import { DataContext } from '@/contexts/DataProvider';
import { LoadingContext } from '@/contexts/LoadingProvider';
import { InscriptionStats } from '@/service/inscription/cappuccino/inscription_stats';
import React from 'react';
import './inscription_stats.css';
import { InscriptionStatsProvider } from './InscriptionsStatsLoader';

interface InscriptionStatsSummaryPlaceholderProps {
  className?: string;
}

/**
 * InscriptionStatsSummaryPlaceholder is a placeholder component that is used
 * to display a loading state for the InscriptionStatsSummary component.
 *
 * At the moment this displays nothing.
 */
export const InscriptionStatsSummaryPlaceholder: React.FC<
  InscriptionStatsSummaryPlaceholderProps
> = () => {
  return <></>;
};

interface InscriptionStatsSummaryContentProps {}

/**
 */
export const InscriptionStatsSummaryContent: React.FC<
  InscriptionStatsSummaryContentProps
> = () => {
  const stats = React.useContext(InscriptionStatsProvider);

  return (
    <section className="inscription-stats">
      <span>
        <Text text="Espresso Mainnet status" />
      </span>
      <div className="chip">
        <NumberText number={stats.numBlocks} />
        <Text text=" " />
        <Text text="Blocks" />
      </div>
      <div className="chip">
        <NumberText number={stats.numTransactions} />
        <Text text=" " />
        <Text text="transactions" />
      </div>
      <div className="chip">
        <NumberText number={stats.numInscriptions} />
        <Text text=" " />
        <Text text="inscriptions" />
      </div>
    </section>
  );
};

interface InscriptionStatsSummaryProps {
  className?: string;
}
export const InscriptionStatsSummaryAsyncHandler: React.FC<
  InscriptionStatsSummaryProps
> = (props) => {
  const error = React.useContext(ErrorContext);
  const loading = React.useContext(LoadingContext);
  const data = React.useContext(DataContext);

  if (error) {
    return <></>;
  }

  if (loading) {
    return <InscriptionStatsSummaryPlaceholder {...props} />;
  }

  return (
    <InscriptionStatsProvider.Provider value={data as InscriptionStats}>
      <InscriptionStatsSummaryContent {...props} />
    </InscriptionStatsProvider.Provider>
  );
};
