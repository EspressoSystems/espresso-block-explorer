import Text from '@/components/text/Text';
import { CurrentDateTimeFormatters } from '@/contexts/DateTimeFormattersProvider';
import React, { useContext } from 'react';

export interface RelativeTimeTextProps {
  durationInMilliseconds: number;
}

/**
 * isNullOrUndefined is a type guard that checks if a value is neither null
 * nor undefined.
 */
function isNotNullOrUndefined<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}

/**
 * determineParts breaks down the total milliseconds into hours, minutes,
 * and seconds components. The seconds, and minutes are capped at 60, while
 * hours can be any value.
 */
function determineParts(totalMilliseconds: number) {
  const negate = totalMilliseconds < 0 ? -1 : 1;
  const totalSeconds = Math.floor(totalMilliseconds / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);

  return [totalHours, totalMinutes % 60, totalSeconds % 60].map(
    (v) => v * negate,
  );
}

/**
 * TimeLeftText displays the duration specified in terms of the total number
 * of hours, minutes, and seconds that comprise the total milliseconds provided.
 */
const TimeLeftText: React.FC<RelativeTimeTextProps> = (props) => {
  const formatters = useContext(CurrentDateTimeFormatters);

  const [hours, minutes, seconds] = determineParts(
    props.durationInMilliseconds,
  );

  const parts = [
    formatters.hours.format(hours),
    formatters.minutes.format(minutes),
    formatters.seconds.format(seconds),
  ].filter(isNotNullOrUndefined);

  return <Text text={parts.join(' ')} />;
};

export default TimeLeftText;
