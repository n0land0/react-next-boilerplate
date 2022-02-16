const path = require('path');
const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  webpackFinal: (config) => {
    config.resolve.modules.push(path.resolve(__dirname, '../src'));
    config.resolve.modules.push(path.resolve(__dirname, '../__generated__'));

    // current workaround for Emotion 11 and storybook
    // https://github.com/chakra-ui/chakra-ui/issues/2527#issuecomment-728134371
    config.resolve.alias['@emotion/core'] = toPath(
      'node_modules/@emotion/react'
    );
    config.resolve.alias['emotion-theming'] = toPath(
      'node_modules/@emotion/react'
    );
    return config;
  },
};
