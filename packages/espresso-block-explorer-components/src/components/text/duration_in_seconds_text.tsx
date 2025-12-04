import { CurrentDateTimeFormatters } from '@/contexts/date_time_formatters_provider';
import React, { useContext } from 'react';

export interface DurationInSecondsTextProps {
  durationInMilliseconds: number;
}

/**
 * DurationInSecondsText renders the given duration in milliseconds as seconds.
 */
const DurationInSecondsText: React.FC<DurationInSecondsTextProps> = (props) => {
  const formatters = useContext(CurrentDateTimeFormatters);

  const seconds = props.durationInMilliseconds / 1000;

  return formatters.seconds.format(seconds);
};

export default DurationInSecondsText;
