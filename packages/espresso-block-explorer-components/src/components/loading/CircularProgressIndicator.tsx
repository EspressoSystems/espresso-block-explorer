import React from 'react';
import { addClassToClassName } from '../higher_order';
import './circular_progress_indicator.css';

export interface CircularProgressIndicatorProps {
  className?: string;
}

/**
 * Circular Progress Indicator is a progress indicator that is used to
 * represent the idea that progress is being made, but we are uncertain about
 * how much progress has been made, or remains.
 */
const CircularProgressIndicator: React.FC<CircularProgressIndicatorProps> = (
  props,
) => {
  // eslint-disable-next-line react/prop-types
  const { className, ...rest } = props;
  return (
    <svg
      className={addClassToClassName(className, 'circular-progress-indicator')}
      viewBox="0 0 48 48"
      {...rest}
    >
      {/* <path d="A 24 0 0 0 0 24 24" /> */}
      <circle
        className="static"
        cx="24"
        cy="24"
        r="20"
        fill="transparent"
        stroke="black"
        strokeWidth="4"
      />
      <circle
        className="animated"
        cx="24"
        cy="24"
        r="20"
        fill="transparent"
        stroke="black"
        strokeWidth="4"
      />
    </svg>
  );
};

export default CircularProgressIndicator;
