import React from 'react';
export interface SVGIconBaseProps extends React.SVGProps<SVGElement> {
}
/**
 * SVGIconBase is a base component for SVG Icons of the standard 24x24 size.
 * This allows the Icons defined utilizing SVGIconBase so we won't have to
 * keep re-defining the SVG attributes, as well as ensuring that they are
 * a consistent size.
 *
 * Please note that these properties can be overwritten via passed in props,
 * so as a result they serve the purpose of defining defaults when they are
 * not supplied. Though it will work and respect any passed in prop values,
 * it is recommended not to change `xmlns` or `viewBox`.
 *
 * @param props standard SVGElement props.
 */
declare const SVGIconBase: React.FC<SVGIconBaseProps>;
export default SVGIconBase;
