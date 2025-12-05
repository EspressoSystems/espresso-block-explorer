import { default as React } from 'react';
export interface WorldMapAutoSizerProps {
    children: React.ReactNode | React.ReactNode[];
}
/**
 * WorldMapAutoSizer is a component that automatically sizes the world map
 * based on the size of the SVG element that it is rendered in.  It is a
 * provider for the MapCoordinateSpaceRectContext.
 */
declare const WorldMapAutoSizer: React.FC<WorldMapAutoSizerProps>;
export default WorldMapAutoSizer;
