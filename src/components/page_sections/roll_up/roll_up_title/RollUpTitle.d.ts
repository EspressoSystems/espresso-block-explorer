import React from 'react';
export interface RollUpTitleProps {
    className?: string;
    namespace: number;
}
/**
 * RollUpTitle is a simple element for displaying an inline representation of
 * a Registered Rollup's logo, and name.
 *
 * If the namespace given does not correspond to any known rollup, then this
 * will display the Unregistered Rollup text with the namespace for reference.
 */
declare const RollUpTitle: React.FC<RollUpTitleProps>;
export default RollUpTitle;
