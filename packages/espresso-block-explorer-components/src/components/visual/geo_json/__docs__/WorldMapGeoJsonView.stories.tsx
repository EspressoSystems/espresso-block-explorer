import { DataContext } from '@/components/contexts/DataProvider';
import { LoadingContext } from '@/components/contexts/LoadingProvider';
import PromiseResolver from '@/components/data/async_data/PromiseResolver';
import CircularProgressIndicator from '@/components/loading/CircularProgressIndicator';
import GeoJSONFeatureCollection, {
  geoJSONFeatureCollectionCodec,
} from '@/models/geo/geo_json/feature_collection';
import { mapHeight, mapWidth } from '@/models/geo/world_map_grid/constants';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import GeoJSONView from '../GeoJSONView';

async function decodeWorldMapData() {
  const url =
    'https://gist.githubusercontent.com/cmunns/76fb72646a68202e6bde/raw/8f954b3ca01835bee4af9ae50dfe73eb6ab88fca/continents.json';
  const response = await fetch(url);
  const json = await response.json();

  return geoJSONFeatureCollectionCodec.decode(json);
}

interface ConsumeGeoJSONDataProps {
  children: React.ReactNode | React.ReactNode[];
}

const ProvideGeoJSONData: React.FC<ConsumeGeoJSONDataProps> = (props) => {
  return (
    <PromiseResolver promise={decodeWorldMapData()}>
      {props.children}
    </PromiseResolver>
  );
};

const RenderWorldMap: React.FC = () => {
  const data = React.useContext(DataContext) as GeoJSONFeatureCollection;
  const loading = React.useContext(LoadingContext);

  if (loading) {
    return <CircularProgressIndicator />;
  }

  return (
    <GeoJSONView
      offsetX={0}
      offsetY={0}
      width={Number(mapWidth)}
      height={Number(mapHeight)}
      geoJson={data}
    />
  );
};

const Example: React.FC = () => {
  return (
    <ProvideGeoJSONData>
      <RenderWorldMap />
    </ProvideGeoJSONData>
  );
};

const meta: Meta<typeof Example> = {
  title: 'Components/visual/WorldMapGeoJSONView',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const WorldMapGeoJSONView: Story = {
  args: {},
};
