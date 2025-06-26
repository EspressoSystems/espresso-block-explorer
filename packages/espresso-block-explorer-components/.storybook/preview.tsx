import type { Preview } from '@storybook/react-vite';
import './preview.css';

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const theme = context?.globals?.backgrounds?.value;

      if (theme === 'dark') {
        return (
          <div data-theme="dark">
            <Story />
          </div>
        );
      }

      return (
        <div data-theme="light">
          <Story />
        </div>
      );
    },
  ],
  parameters: {
    backgrounds: {
      default: 'light',
      options: {
        light: { name: 'Light', value: '#f8fafcff' },
        dark: { name: 'Dark', value: '#000' },
      },
    },
    viewport: {
      // defaultViewport: 'responsive',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
