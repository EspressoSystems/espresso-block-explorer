import { geoJSONFeatureCollectionCodec } from '@/models/geo/geo_json/feature_collection';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import GeoJSONViewComp from '../GeoJSONView';

interface ExampleProps {
  offsetX?: number;
  offsetY?: number;
  width?: number;
  height?: number;
  geoJson: unknown;
}

const Example: React.FC<ExampleProps> = (props) => {
  return (
    <GeoJSONViewComp
      offsetX={props.offsetX}
      offsetY={props.offsetY}
      width={props.width}
      height={props.height}
      geoJson={geoJSONFeatureCollectionCodec.decode(props.geoJson)}
    />
  );
};

const meta: Meta<typeof Example> = {
  title: 'Components/visual/GeoJSONView',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const GeoJSONView: Story = {
  args: {
    offsetX: 90,
    offsetY: -10,
    height: 20,
    width: 20,
    geoJson: {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'MultiPolygon',
            coordinates: [
              [
                [
                  [102.0, 2.0],
                  [103.0, 2.0],
                  [103.0, 3.0],
                  [102.0, 3.0],
                  [102.0, 2.0],
                ],
              ],
              [
                [
                  [100.0, 0.0],
                  [101.0, 0.0],
                  [101.0, 1.0],
                  [100.0, 1.0],
                  [100.0, 0.0],
                ],
                [
                  [100.2, 0.2],
                  [100.2, 0.8],
                  [100.8, 0.8],
                  [100.8, 0.2],
                  [100.2, 0.2],
                ],
              ],
            ],
          },
        },
      ],
    },
  },
};
