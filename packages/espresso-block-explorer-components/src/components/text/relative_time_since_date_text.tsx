import { Now } from '@/contexts/now_provider';
import { default as React, useContext } from 'react';
import { default as RelativeTimeText } from './relative_time_text';

export interface RelativeTimeSinceDateTextProps {
  date: Date;
}

/**
 * RelativeTimeSinceDateText attempts to render the given date into the
 * disparate components for localization.
 */
const RelativeTimeSinceDateText: React.FC<RelativeTimeSinceDateTextProps> = (
  props,
) => {
  const now = useContext(Now);
  const date = props.date;

  // A date slightly ahead of the viewer's clock is still one that has just
  // happened -- with blocks arriving every second or so, a little clock skew
  // is enough to put one there -- so it is not allowed to read as the future.
  const durationInMilliseconds = Math.max(0, now.getTime() - date.getTime());

  return <RelativeTimeText durationInMilliseconds={durationInMilliseconds} />;
};

export default RelativeTimeSinceDateText;
