import GeoJSONFeatureCollection from '@/models/geo/geo_json/feature_collection';
import GeoJSONMultiPolygon from '@/models/geo/geo_json/multi_polygon';
import {
  degreesToCoordinateSpaceProjection,
  mapHeight,
  mapWidth,
} from '@/models/geo/world_map_grid/constants';
import SVGPathBuilder from '../histogram/histogram_base/SVGPathBuilder';

interface GeoJSONViewProps {
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

  return (
    <svg viewBox={`0 0 ${Number(mapWidth)} ${Number(mapHeight)}`}>
      {features.map((feature, index) => {
        const { geometry } = feature;

        if (!(geometry instanceof GeoJSONMultiPolygon)) {
          // We don't want to draw these at the moment.
          return <></>;
        }

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
                    Number(firstPointProjected.lat),
                    Number(firstPointProjected.lng),
                  );
                  for (let i = 1; i < polygonLength; i++) {
                    const point = polygon.coordinates[i];
                    const pointProjected =
                      degreesToCoordinateSpaceProjection.project(
                        point.coordinates,
                      );
                    pathBuilder.lineTo(
                      Number(pointProjected.lat),
                      Number(pointProjected.lng),
                    );
                  }
                  pathBuilder.close();
                }

                return (
                  <g key={index} data-index={index}>
                    <path
                      d={pathBuilder.instructionToString()}
                      fill="transparent"
                      stroke="black"
                    />
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
