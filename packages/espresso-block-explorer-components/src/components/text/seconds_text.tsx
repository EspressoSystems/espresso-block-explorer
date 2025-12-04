import { CurrentDateTimeFormatters } from '@/contexts/DateTimeFormattersProvider';
import React, { useContext } from 'react';

export interface SecondsTextProps {
  seconds: number;
}

/**
 * SecondsText attempts to render the given seconds into a single display that
 * indicates how many seconds it is representing.
 */
const SecondsText: React.FC<SecondsTextProps> = (props) => {
  const formatters = useContext(CurrentDateTimeFormatters);
  return formatters.seconds.format(props.seconds);
};

export default SecondsText;
