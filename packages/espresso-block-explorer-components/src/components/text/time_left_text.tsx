import Text from '@/components/text/text';
import { CurrentDateTimeFormatters } from '@/contexts/date_time_formatters_provider';
import React, { useContext } from 'react';

export interface RelativeTimeTextProps {
  durationInMilliseconds: number;
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
  const totalDays = Math.floor(totalHours / 24);

  return [totalDays, totalHours % 24, totalMinutes % 60, totalSeconds % 60].map(
    (v) => v * negate,
  );
}

/**
 * TimeLeftText displays the duration specified in terms of the total number
 * of hours, minutes, and seconds that comprise the total milliseconds provided.
 */
const TimeLeftText: React.FC<RelativeTimeTextProps> = (props) => {
  const formatters = useContext(CurrentDateTimeFormatters);

  const [days, hours, minutes] = determineParts(props.durationInMilliseconds);

  const parts: string[] = [];

  let numComponents = 0;
  if (days > 0) {
    numComponents = 3;
  } else if (hours > 0) {
    numComponents = 2;
  } else if (minutes > 0) {
    numComponents = 1;
  }

  switch (numComponents) {
    case 3:
      parts.push(formatters.days.format(days));
    /* fallthrough */
    case 2:
      parts.push(formatters.minutes.format(minutes));
    /* fallthrough */
    case 1:
      parts.push(formatters.minutes.format(minutes));
      break;

    default:
      parts.push('<', formatters.minutes.format(1));
  }

  return <Text text={parts.join(' ')} />;
};

export default TimeLeftText;
