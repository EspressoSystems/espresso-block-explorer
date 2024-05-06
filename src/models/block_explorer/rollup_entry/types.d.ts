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
    constructor(namespace: number, name: string, site: URL, blockExplorer: URL);
}
