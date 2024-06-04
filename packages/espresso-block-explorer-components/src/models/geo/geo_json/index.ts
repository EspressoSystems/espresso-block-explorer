/**
 * GeoJSON is a format for encoding a variety of geographic data structures.
 * It is a JSON based encoding with specific semantics for representing
 * geographic information.
 *
 * The RFC for this specification is defined here:
 * https://datatracker.ietf.org/doc/html/rfc7946
 *
 * This implementation of the specification makes some adjustments to the
 * data stored within, by using classes to represent it, and supporting
 * a different representation of data in different scenarios.  We do this
 * to make it more type safe in general, and as we can add helpful methods
 * / types to the data for analysis.
 */

export { default as GeoJSONBoundingBox } from './bounding_box';
export { default as GeoJSONGeometry } from './geometry';
export { default as GeoJSONGeometryCollection } from './geometry_collection';
export { default as GeoJSONLineString } from './line_string';
export { default as GeoJSONMultiLineString } from './multi_line_string';
export { default as GeoJSONMultiPoint } from './multi_point';
export { default as GeoJSONMultiPolygon } from './multi_polygon';
export { default as GeoJSONPoint } from './point';
export { default as GeoJSONPolygon } from './polygon';
