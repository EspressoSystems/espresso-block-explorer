import { CurrentDateTimeFormatters } from '@/contexts/date_time_formatters_provider';
import React, { useContext } from 'react';

export interface TimeTextProps {
  date: Date;
}

/**
 * TimeText renders the given date as only the time portion of a timestamp. It
 * also is sure to wrap the text in a time element for accessibility.
 *
 * It achieves this by using the `time` formatter from the
 * `CurrentDateTimeFormatters` context.
 */
const TimeText: React.FC<TimeTextProps> = (props) => {
  const formatters = useContext(CurrentDateTimeFormatters);

  return (
    <time dateTime={props.date.toISOString()}>
      {formatters.time.format(props.date)}
    </time>
  );
};

export default TimeText;
