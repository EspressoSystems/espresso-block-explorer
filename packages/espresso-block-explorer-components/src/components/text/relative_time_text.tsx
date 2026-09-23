import { CurrentDateTimeFormatters } from '@/contexts/date_time_formatters_provider';
import { default as React, useContext } from 'react';

export interface RelativeTimeTextProps {
  durationInMilliseconds: number;
}

function determineParts(totalMilliseconds: number) {
  const negate = totalMilliseconds < 0 ? 1 : -1;
  const totalSeconds = Math.floor(totalMilliseconds / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const totalDays = Math.floor(totalHours / 24);

  return [totalDays, totalHours % 24, totalMinutes % 60, totalSeconds % 60].map(
    (v) => v * negate,
  );
}

type RelativeTimeUnit = 'days' | 'hours' | 'minutes' | 'seconds';

const englishUnitNames: Record<RelativeTimeUnit, string> = {
  days: 'day',
  hours: 'hr',
  minutes: 'min',
  seconds: 'sec',
};

/**
 * formatEnglishRelativeTime spells out a duration the way block explorers
 * conventionally do -- "3 mins ago", "1 hr ago" -- which reads more naturally
 * than Intl's narrow "3m ago" or short "3 min. ago". Intl has no style that
 * produces this wording, so it is written out by hand, which means it can
 * only be done for English.
 */
function formatEnglishRelativeTime(
  locale: string,
  value: number,
  unit: RelativeTimeUnit,
): string {
  const magnitude = Math.abs(value);
  const count = magnitude.toLocaleString(locale);
  const name = englishUnitNames[unit] + (magnitude === 1 ? '' : 's');
  return value < 0 ? `${count} ${name} ago` : `in ${count} ${name}`;
}

/**
 * RelativeTimeText attempts to render the given duration into the
 * disparate components for localization.
 *
 * @todo
 * However, it combines them using traditional English Combining rules that
 * may not be guaranteed to localize into other languages well.
 */
const RelativeTimeText: React.FC<RelativeTimeTextProps> = (props) => {
  const formatters = useContext(CurrentDateTimeFormatters);
  const locale = formatters.relative.resolvedOptions().locale;
  const format = (value: number, unit: RelativeTimeUnit) =>
    locale.startsWith('en')
      ? formatEnglishRelativeTime(locale, value, unit)
      : formatters.relative.format(value, unit);

  const [days, hours, minutes, seconds] = determineParts(
    props.durationInMilliseconds,
  );

  if (days !== 0) {
    return format(days, 'days');
  }

  if (hours !== 0) {
    return format(hours, 'hours');
  }

  if (minutes !== 0) {
    return format(minutes, 'minutes');
  }

  // Anything under a second would read "0 secs ago", which looks like a glitch
  // on a chain that produces a block every second or so.
  return format(seconds === 0 ? -1 : seconds, 'seconds');
};

export default RelativeTimeText;
