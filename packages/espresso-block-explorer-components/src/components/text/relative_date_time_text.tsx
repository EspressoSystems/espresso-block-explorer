import { CurrentDateTimeFormatters } from '@/contexts/date_time_formatters_provider';
import { default as React, useContext } from 'react';
import { default as RelativeTimeSinceDateText } from './relative_time_since_date_text';

export interface RelativeDateTimeTextProps {
  date: Date;
}

/**
 * RelativeDateTimeText renders the given date as an elapsed duration ("12m
 * ago"), while keeping the same time element, absolute title, and machine
 * readable dateTime that DateTimeText provides.
 */
const RelativeDateTimeText: React.FC<RelativeDateTimeTextProps> = (props) => {
  const formatters = useContext(CurrentDateTimeFormatters);
  return (
    <time
      title={formatters.utcFullDateTime.format(props.date)}
      dateTime={props.date.toISOString()}
    >
      <RelativeTimeSinceDateText date={props.date} />
    </time>
  );
};

export default RelativeDateTimeText;
