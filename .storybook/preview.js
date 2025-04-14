/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: { 
    actions: { argsTypesRegex: "^on[A-Z].*"},
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/,
      },
    },
  },
};

export default preview;