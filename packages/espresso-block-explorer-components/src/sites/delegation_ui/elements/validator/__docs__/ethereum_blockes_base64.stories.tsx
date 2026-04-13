import { type Meta, type StoryObj } from '@storybook/react-vite';
import { default as ethereumBlockiesBase64 } from 'ethereum-blockies-base64';

interface ExampleProps {
  address: string;
}
const Example: React.FC<ExampleProps> = (props) => {
  const dataURL = ethereumBlockiesBase64(props.address.toLowerCase());

  return <img src={dataURL} loading="lazy" />;
};

const meta: Meta<typeof Example> = {
  title: 'Delegation UI/Blockies',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const EthereumBlockiesBase64: Story = {
  args: {
    address: '0x704EB06Fb1e39fffD8ab7FFf8205DfFf66Faf54a',
  },
};
