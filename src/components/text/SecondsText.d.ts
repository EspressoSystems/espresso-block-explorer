import { default as React } from 'react';

export interface SecondsTextProps {
    seconds: number;
}
/**
 * SecondsText attempts to render the given seconds into a single display that
 * indicates how many seconds it is representing.
 */
declare const SecondsText: React.FC<SecondsTextProps>;
export default SecondsText;
