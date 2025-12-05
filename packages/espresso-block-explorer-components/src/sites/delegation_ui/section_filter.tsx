import Text from '@/components/text/text';
import React from 'react';
import {
  CurrentSectionContext,
  Sections,
  SetCurrentSectionContext,
} from './contexts/current_section_context';
import { SegmentedButton } from './elements/buttons/segmented_button';

/**
 * SearchFilter is a React context provider for the search filter input.
 */
export const SectionFilter: React.FC = () => {
  const section = React.useContext(CurrentSectionContext);
  const setSection = React.useContext(SetCurrentSectionContext);

  return (
    <SegmentedButton
      selected={section}
      onSelectionChange={(section) => {
        setSection(section);
      }}
      segments={[
        { value: Sections.all, label: <Text text="All" /> },
        { value: Sections.myStakes, label: <Text text="My Stakes" /> },
      ]}
    />
  );
};
