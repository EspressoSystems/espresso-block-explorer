import React from 'react';

/**
 * Sections enum defines the different sections available in the Delegation UI.
 */
export enum Sections {
  all,
  myStakes,
}

/**
 * CurrentSectionContext is a React context that holds the current section
 * being viewed in the Delegation UI.
 */
export const CurrentSectionContext = React.createContext<Sections>(
  Sections.all,
);

/**
 * SetCurrentSectionContext is a React context that holds a setter function
 * to update the current section being viewed in the Delegation UI.
 */
export const SetCurrentSectionContext = React.createContext<
  React.Dispatch<React.SetStateAction<Sections>>
>(() => {
  /* no-op */
});

/**
 * ProvideSectionSelection is a React component that provides the current
 * section selection context to its children.
 */
export const ProvideSectionSelection: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [section, setSection] = React.useState<Sections>(Sections.all);

  return (
    <CurrentSectionContext.Provider value={section}>
      <SetCurrentSectionContext.Provider value={setSection}>
        {children}
      </SetCurrentSectionContext.Provider>
    </CurrentSectionContext.Provider>
  );
};
