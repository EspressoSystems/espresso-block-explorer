import PercentageText from '@/components/text/percentage_text';
import { default as Text } from '@/text/text';
import { type Meta, type StoryObj } from '@storybook/react-vite';
import { default as React } from 'react';

const HEIGHT = 1080;
const WIDTH = 1920;

const HeightContext = React.createContext(HEIGHT);
const WidthContext = React.createContext(WIDTH);
const AreaPercentageContext = React.createContext(1.0);

const hexTestRegex = /#(?:[\da-fA-F]{3, 4}|[\da-fA-F]{6}|[\da-fA-F]{8})/;

interface DisplayHexProps {
  potentialHex?: string | null;
}

const DisplayHex: React.FC<DisplayHexProps> = ({ potentialHex }) => {
  if (!potentialHex || !hexTestRegex.test(potentialHex)) {
    return null;
  }

  return (
    <div>
      <Text text={potentialHex.substring(0, 7)} />
    </div>
  );
};

interface ColumnProps extends React.PropsWithChildren {
  width: number;
  gridRowStart?: number;
  gridRowEnd?: number;
}

const Column: React.FC<ColumnProps> = ({
  width,
  children,
  gridRowStart,
  gridRowEnd,
}) => {
  const totalWidth = React.useContext(WidthContext);
  return (
    <WidthContext.Provider value={width}>
      <AreaPercentageContext.Provider value={width / totalWidth}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gridRowStart: gridRowStart ?? '1',
            gridRowEnd: gridRowEnd ?? '3',
          }}
        >
          {children}
        </div>
      </AreaPercentageContext.Provider>
    </WidthContext.Provider>
  );
};

interface EspressoSwatchProps {
  height: number;
  swatchName: string;
  gridColumnStart?: number;
  gridColumnEnd?: number;
  gridRowStart?: number;
  gridRowEnd?: number;
}

const EspressoSwatch: React.FC<EspressoSwatchProps> = ({
  height,
  swatchName,
  gridColumnStart,
  gridColumnEnd,
  gridRowStart,
  gridRowEnd,
}) => {
  const columnHeight = React.useContext(HeightContext);
  const heightPercentage = height / columnHeight;
  const area = React.useContext(AreaPercentageContext) * heightPercentage;
  const colorHex = getComputedStyle(document.documentElement).getPropertyValue(
    `--color--${swatchName}`,
  );

  console.info('colorHex:', colorHex);

  return (
    <div
      className="type--ui--base"
      style={{
        background: `var(--color--${swatchName})`,
        backgroundPositionX: 'center',
        backgroundSize: 'cover',
        color: `var(--on-color--${swatchName})`,
        padding: '16px',
        boxSizing: 'border-box',
        textAlign: 'start',
        height: `${Number(100 * (height / columnHeight))}%`,
        gridColumnStart,
        gridColumnEnd,
        gridRowStart,
        gridRowEnd,
      }}
    >
      <div style={{ textTransform: 'capitalize' }}>
        <Text text={swatchName} />
      </div>
      <div>
        <PercentageText percentage={area} />
      </div>
      <DisplayHex potentialHex={colorHex} />
    </div>
  );
};

const Example: React.FC = () => {
  return (
    <div
      style={{
        display: 'grid',
        height: '56.25vw',
        width: '100%',
        gridTemplateColumns: '301fr 449fr 450fr 362fr 360fr',
        gridTemplateRows: '613fr 467fr',
      }}
    >
      <AreaPercentageContext.Provider value={301 / WIDTH}>
        <HeightContext.Provider value={1080}>
          <EspressoSwatch
            height={1080}
            swatchName="bronze"
            gridRowStart={1}
            gridRowEnd={3}
            gridColumnStart={1}
            gridColumnEnd={2}
          />
        </HeightContext.Provider>
      </AreaPercentageContext.Provider>

      <Column width={449}>
        <EspressoSwatch height={756} swatchName="caramel" />
        <EspressoSwatch height={157} swatchName="cookie" />
        <EspressoSwatch height={167} swatchName="vanilla" />
      </Column>

      <Column width={450}>
        <EspressoSwatch height={756} swatchName="azure" />
        <EspressoSwatch height={157} swatchName="blueberry" />
        <EspressoSwatch height={167} swatchName="sky" />
      </Column>

      <HeightContext.Provider value={305 + 140 + 168}>
        <Column width={362} gridRowEnd={2}>
          <EspressoSwatch height={305} swatchName="pistachio" />
          <EspressoSwatch height={140} swatchName="herb" />
          <EspressoSwatch height={168} swatchName="citrus" />
        </Column>
        <Column width={360} gridRowEnd={2}>
          <EspressoSwatch height={305} swatchName="coffee" />
          <EspressoSwatch height={140} swatchName="chocolate" />
          <EspressoSwatch height={168} swatchName="chilli" />
        </Column>
      </HeightContext.Provider>

      <AreaPercentageContext.Provider value={(362 + 360) / WIDTH}>
        <HeightContext.Provider value={467}>
          <EspressoSwatch
            height={467}
            swatchName="white"
            gridRowStart={2}
            gridRowEnd={3}
            gridColumnStart={4}
            gridColumnEnd={6}
          />
        </HeightContext.Provider>
      </AreaPercentageContext.Provider>
    </div>
  );
};

const meta: Meta<typeof Example> = {
  title: 'Block Explorer/Style Guide/Espresso Colors',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const EspressoColors: Story = {
  args: {},
};
