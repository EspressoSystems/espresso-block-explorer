import { Now } from '@/contexts/NowProvider';
import React, { useContext } from 'react';
import RelativeTimeText from './RelativeTimeText';

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

  const durationInMilliseconds = now.getTime() - date.getTime();

  return <RelativeTimeText durationInMilliseconds={durationInMilliseconds} />;
};

export default RelativeTimeSinceDateText;
