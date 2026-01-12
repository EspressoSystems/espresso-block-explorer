import React from 'react';

/**
 * Now is a context that is meant to provide the current Date, or some
 * reference for whatever 'now' is considered to be.
 */
export const Now = React.createContext(new Date());

export interface ProvideTickEverySecondProps {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * ProvideTickEverySecond is a component that will update the Now context
 * every second.
 *
 * @todo this setInterval **might** be called at most once before being
 *       cleared.  Perhaps a setTimeout could be more appropriate in such
 *       cases.  It would also allow us to attempt to provide the next second
 *       at the top of the second instead of just every second.
 */
export const ProvideTickEverySecond: React.FC<ProvideTickEverySecondProps> = (
  props,
) => {
  const [state, setState] = React.useState(new Date());

  React.useEffect(() => {
    let setTheDate = () => {
      setState(new Date());
    };

    // mounted,
    const int = setInterval(setTheDate, 1000);

    return () => {
      // Unmounted
      clearInterval(int);
      setTheDate = () => {};
    };
  });

  return <Now.Provider {...props} value={state} />;
};
