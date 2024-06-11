import GeoJSONFeatureCollection from '@/models/geo/geo_json/feature_collection';
import GeoJSONMultiPolygon from '@/models/geo/geo_json/multi_polygon';
import ChainProjection from '@/models/geo/projection/ChainProjection';
import CoordinateSpaceProjection from '@/models/geo/projection/CoordinateSpaceProjection';
import { degreesRadiansProjection } from '@/models/geo/projection/DegreesRadiansProjection';
import MercatorProjection, {
  mercatorProjection,
} from '@/models/geo/projection/MercatorProjection';
import DensityIndependentPoint from '@/models/geo/units/DensityIndependentPoint';
import LatLng from '@/models/geo/units/LatLng';
import Latitude from '@/models/geo/units/Latitude';
import Longitude from '@/models/geo/units/Longitude';
import { mapHeight, mapWidth } from '@/models/geo/world_map_grid/constants';
import SVGPathBuilder from '../histogram/histogram_base/SVGPathBuilder';

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
const GeoJSONView: React.FC<GeoJSONViewProps> = (props) => {
  // eslint-disable-next-line react/prop-types
  const { features } = props.geoJson as GeoJSONFeatureCollection;
  const {
    // eslint-disable-next-line react/prop-types
    offsetX = 0,
    // eslint-disable-next-line react/prop-types
    offsetY = 0,
    // eslint-disable-next-line react/prop-types
    width = Number(mapWidth),
    // eslint-disable-next-line react/prop-types
    height = Number(mapHeight),
  } = props;

  return (
    <svg viewBox={`${offsetX} ${offsetY} ${width} ${height}`}>
      {features.map((feature, index) => {
        const { geometry } = feature;

        if (!(geometry instanceof GeoJSONMultiPolygon)) {
          // We don't want to draw these at the moment.
          return <></>;
        }

        const projection = new ChainProjection(
          degreesRadiansProjection,
          new ChainProjection(
            mercatorProjection,
            new CoordinateSpaceProjection(
              MercatorProjection.minProjection,
              MercatorProjection.maxProjection,
              new LatLng(
                new Latitude(new DensityIndependentPoint(offsetY + height)),
                new Longitude(new DensityIndependentPoint(offsetX)),
              ),
              new LatLng(
                new Latitude(new DensityIndependentPoint(offsetY)),
                new Longitude(new DensityIndependentPoint(offsetX + width)),
              ),
            ),
          ),
        );

        const degreesToCoordinateSpaceProjection = projection;

        return (
          <g key={index} data-index={index}>
            {(geometry as GeoJSONMultiPolygon).coordinates.map(
              (multiPolygon, index) => {
                const pathBuilder = new SVGPathBuilder();
                const polygonLength = multiPolygon.coordinates.length;

                for (let j = 0; j < polygonLength; j++) {
                  const polygon = multiPolygon.coordinates[j];
                  const polygonLength = polygon.coordinates.length;
                  const firstPoint = polygon.coordinates[0];
                  const firstPointProjected =
                    degreesToCoordinateSpaceProjection.project(
                      firstPoint.coordinates,
                    );

                  pathBuilder.moveTo(
                    Number(firstPointProjected.lng),
                    Number(firstPointProjected.lat),
                  );
                  for (let i = 1; i < polygonLength; i++) {
                    const point = polygon.coordinates[i];
                    const pointProjected =
                      degreesToCoordinateSpaceProjection.project(
                        point.coordinates,
                      );
                    pathBuilder.lineTo(
                      Number(pointProjected.lng),
                      Number(pointProjected.lat),
                    );
                  }
                  pathBuilder.close();
                }

                return (
                  <g key={index} data-index={index}>
                    <path d={pathBuilder.instructionToString()} />
                  </g>
                );
              },
            )}
          </g>
        );
      })}
    </svg>
  );
};

export default GeoJSONView;
