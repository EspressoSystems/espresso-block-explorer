import React, { useContext } from 'react';
import { CurrentDateTimeFormatters } from '../contexts/DateTimeFormattersProvider';

export interface DateTimeTextProps {
  date: Date;
}

/**
 * DateTimeText is a simple Element used to render the given date with
 * the default DateTimeFormatters.  It also ensures that the timestamp
 * is wrapped in a time element for accessibility reference.
 */
const DateTimeText: React.FC<DateTimeTextProps> = (props) => {
  const formatters = useContext(CurrentDateTimeFormatters);
  return (
    <time
      title={formatters.utcFullDateTime.format(props.date)}
      dateTime={props.date.toISOString()}
    >
      {formatters.default.format(props.date)}
    </time>
  );
};

export default DateTimeText;
