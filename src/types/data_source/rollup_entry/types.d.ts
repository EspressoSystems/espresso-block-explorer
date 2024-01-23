import React from 'react';
/**
 * RollUpEntry represents data for a RollUp that we will need in order
 * associate basic roll up identifying information (such as a namespace)
 * with the visual elements of the Roll up, such as their name, webiste URLs,
 * and logo.
 */
export declare class RollUpEntry {
    readonly namespace: number;
    readonly name: string;
    readonly site: URL;
    readonly blockExplorer: URL;
    readonly logo24: React.FC;
    readonly logo32: React.FC;
    readonly logo40: React.FC;
    constructor(namespace: number, name: string, site: URL, blockExplorer: URL, logo24: React.FC, logo32: React.FC, logo40: React.FC);
}
