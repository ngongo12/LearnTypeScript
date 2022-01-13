module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.js', '.json'],
        alias: {
          '@screens': './src/screens',
          '@res': './src/res',
          '@images': './src/res/images',
          '@redux': './src/redux',
          '@library': './src/library',
          '@api': './src/library/api',
          '@components': './src/library/components',
          '@utils': './src/library/utils',
        },
      },
    ],
  ]
};
