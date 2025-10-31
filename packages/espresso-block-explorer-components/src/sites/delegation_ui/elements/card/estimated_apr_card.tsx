import PercentageText from '@/components/text/PercentageText';
import Text from '@/components/text/Text';
import { CardContentValue } from './card_content_value';
import { CardValue } from './card_value';

/**
 * EstimatedAPRCard displays the estimated annual percentage rate (APR).
 * The APR is currently hardcoded to 3.5%.
 */
export const EstimatedAPRCard: React.FC = () => {
  return (
    <CardValue className="estimated-apr-card">
      <h2>
        <Text text="Estimated APR" />
      </h2>
      <CardContentValue>
        <PercentageText percentage={0.035} />
      </CardContentValue>
    </CardValue>
  );
};
