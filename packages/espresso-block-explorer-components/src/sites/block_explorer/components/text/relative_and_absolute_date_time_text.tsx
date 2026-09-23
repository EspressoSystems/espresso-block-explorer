import { RelativeTimeSinceDateText } from '@/components/text';
import { CurrentDateTimeFormatters } from '@/contexts/date_time_formatters_provider';
import { default as React } from 'react';
import './relative_and_absolute_date_time_text.css';

export interface RelativeAndAbsoluteDateTimeTextProps {
  date: Date;
}

/**
 * RelativeAndAbsoluteDateTimeText renders the given date both as how long ago
 * it was and as the moment it happened -- "3 mins ago (9/23/2026, 10:20:49 AM
 * EDT)" -- so the reader gets the at-a-glance age and the exact timestamp
 * together.
 *
 * Both halves sit inside a single time element carrying the machine readable
 * dateTime and the UTC title that DateTimeText provides.
 */
const RelativeAndAbsoluteDateTimeText: React.FC<
  RelativeAndAbsoluteDateTimeTextProps
> = (props) => {
  const formatters = React.useContext(CurrentDateTimeFormatters);
  return (
    <time
      className="relative-and-absolute-date-time"
      title={formatters.utcFullDateTime.format(props.date)}
      dateTime={props.date.toISOString()}
    >
      <RelativeTimeSinceDateText date={props.date} />
      <span className="relative-and-absolute-date-time--absolute">
        {' ('}
        {formatters.default.format(props.date)})
      </span>
    </time>
  );
};

export default RelativeAndAbsoluteDateTimeText;
