import NumberText from '@/text/NumberText';
import PropTypes from 'prop-types';

export interface HistogramLabelProps {
  value: number;
}

/**
 * HistogramDefaultLabel is a simple label for displaying a numeric value for
 * the histogram.  It is the default, which means it just renders the number
 * using the `NumberText` component.  If the axis needs to be labeled, then
 * the element should be specified.
 */
export const HistogramDefaultLabel: React.FC<HistogramLabelProps> = (props) => {
  return <NumberText number={props.value} />;
};

HistogramDefaultLabel.propTypes = {
  value: PropTypes.number.isRequired,
};
