import { default as GeoJSONFeatureCollection } from '../../../../../../../../../../../src/models/geo/geo_json/feature_collection';
interface GeoJSONViewProps {
    offsetX?: number;
    offsetY?: number;
    width?: number;
    height?: number;
    geoJson: GeoJSONFeatureCollection;
}
/**
 * GeoJSONView is a component that renders a GeoJSON object as an
 * SVG.  Ths currently only supports FeatureCollections whose
 * underlying geometry is a MultiPolygon.
 */
declare const GeoJSONView: React.FC<GeoJSONViewProps>;
export default GeoJSONView;
