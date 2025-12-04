import { CurrentDateTimeFormatters } from '@/contexts/DateTimeFormattersProvider';
import React, { useContext } from 'react';

export interface FriendlyDateTimeTextProps {
  date: Date;
}

/**
 * FriendlyDateTimeText is a Text component that renders the given Date using
 * the friendly date time format.
 */
const FriendlyDateTimeText: React.FC<FriendlyDateTimeTextProps> = (props) => {
  const formatters = useContext(CurrentDateTimeFormatters);
  return (
    <time
      title={formatters.utcFullDateTime.format(props.date)}
      dateTime={props.date.toISOString()}
    >
      {formatters.friendly.format(props.date)}
    </time>
  );
};

export default FriendlyDateTimeText;
