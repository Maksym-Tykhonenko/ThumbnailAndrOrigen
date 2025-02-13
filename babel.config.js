module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '~': './src',
        },
      },
    ],
    'react-native-worklets-core/plugin',
    'react-native-reanimated/plugin',
  ],
};
