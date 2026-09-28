import { default as React } from 'react';
export interface RollUpSimpleProps {
    className?: string;
    namespace: number;
}
/**
 * RollUpSimple is a simple element for displaying an inline representation of
 * a Registered Rollup's logo, and name.
 *
 * If the namespace given does not correspond to any known rollup, then this
 * will display the namespace on its own, since there is no name to show. In
 * both cases the title spells out what the element is referring to, as
 * neither a logo nor a bare number says so by itself.
 *
 * The namespace is rendered without group separators: it identifies a rollup
 * rather than counting anything, so it reads as an identifier, not a quantity.
 * @param props
 * @returns
 */
declare const RollUpSimple: React.FC<RollUpSimpleProps>;
export default RollUpSimple;
