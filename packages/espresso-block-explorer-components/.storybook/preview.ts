import type { Preview } from '@storybook/react-vite';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'light',
      values: [{ name: 'light', value: '#f8fafcff' }],
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
