import Text from '@/components/text/Text';
import React from 'react';
import {
  OnlyShowTop100Context,
  SetOnlyShowTop100Context,
} from './contexts/only_shot_top_100_context';
import { BaseSwitch } from './elements/switch/switch';

/**
 * OnlyTop100Filter is a React context provider for the "only show top 100"
 * filter.
 */
export const OnlyTop100Filter: React.FC = () => {
  const showTop100 = React.useContext(OnlyShowTop100Context);
  const setShowTop100 = React.useContext(SetOnlyShowTop100Context);

  return (
    <span className="only-top-100-filter">
      <label htmlFor="show-top-100">
        <Text text="Only show top 100" />
      </label>

      <BaseSwitch
        id="show-top-100"
        value={showTop100}
        onChange={setShowTop100}
      />
    </span>
  );
};
