import { type Meta } from '@storybook/react-vite';

export const parameters: Meta['parameters'] = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'light',
    options: {
      light: {
        name: 'Light',
        value: 'linear-gradient(180deg, #fff 0%, #fcebde 100%)',
      },
      dark: { name: 'Dark', value: '#000' },
    },
  },
};
