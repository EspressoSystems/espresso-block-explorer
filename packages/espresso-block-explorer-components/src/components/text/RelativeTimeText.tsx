import React, { useContext } from 'react';
import { CurrentDateTimeFormatters } from '../contexts/DateTimeFormattersProvider';
import { Now } from '../contexts/NowProvider';

export interface RelativeTimeTextProps {
  date: Date;
}

function determineParts(now: Date, target: Date) {
  const totalMilliseconds = Math.abs(now.valueOf() - target.valueOf());
  const negate = now.valueOf() < target.valueOf() ? 1 : -1;
  const totalSeconds = Math.floor(totalMilliseconds / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const totalDays = Math.floor(totalHours / 24);

  return [totalDays, totalHours % 24, totalMinutes % 60, totalSeconds % 60].map(
    (v) => v * negate,
  );
}

/**
 * RelativeTimeText attempts to render the given date into the disparate
 * components for localization.
 *
 * @todo
 * However, it combines them using traditional English Combining rules that
 * may not be guaranteed to localize into other languages well.
 */
const RelativeTimeText: React.FC<RelativeTimeTextProps> = (props) => {
  const formatters = useContext(CurrentDateTimeFormatters);
  const now = useContext(Now);
  const date = props.date;

  const [days, hours, minutes, seconds] = determineParts(now, date);

  if (days !== 0) {
    return formatters.relative.format(days, 'days');
  }

  if (hours !== 0) {
    return formatters.relative.format(hours, 'hours');
  }

  if (minutes !== 0) {
    return formatters.relative.format(minutes, 'minutes');
  }

  return formatters.relative.format(seconds, 'seconds');
};

export default RelativeTimeText;
