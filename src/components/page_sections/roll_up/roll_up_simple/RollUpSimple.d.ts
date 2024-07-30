import { default as React } from '../../../../../../../node_modules/react';

export interface RollUpSimpleProps {
    className?: string;
    namespace: number;
}
/**
 * RollUpSimple is a simple element for displaying an inline representation of
 * a Registered Rollup's logo, and name.
 *
 * If the namespace given does not correspond to any known rollup, then this
 * will display the Unregistered Rollup text with the namespace for reference.
 * @param props
 * @returns
 */
declare const RollUpSimple: React.FC<RollUpSimpleProps>;
export default RollUpSimple;
