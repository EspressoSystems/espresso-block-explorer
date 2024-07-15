/**
 * This CityTuple is a City Name, Latitude, Longitude, and then ISO3166 Alpha-2
 * Country Code.
 */
type CityTuple = [string, number, number, string];
export declare const regions: CityTuple[][];
export declare const regionRatios: number[];
export declare const totalRegionRatiosSum: number;
export declare const ratiosAndRegions: (readonly [number, CityTuple[]])[];
export {};
