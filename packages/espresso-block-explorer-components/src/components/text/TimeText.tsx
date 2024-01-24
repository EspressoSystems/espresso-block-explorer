import React, { useContext } from 'react';
import { CurrentDateTimeFormatters } from '../contexts/DateTimeFormattersProvider';

export interface TimeTextProps {
  date: Date;
}

/**
 * TimeText renders the given date as only the time portion of a timestamp. It
 * also is sure to wrap the text in a time element for accessibility.
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
