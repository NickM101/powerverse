module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module:react-native-dotenv'],
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        alias: {
          images: ['./assets/images'],
          components: ['./src/components'],
          features: ['./src/features'],
          hooks: ['./src/hooks'],
          lib: ['./src/lib'],
          navigation: ['./src/navigation'],
          redux: ['./src/redux'],
          screens: ['./src/screens'],
          services: ['./src/services'],
          theme: ['./src/theme'],
          types: ['./src/types'],
          utils: ['./src/utils'],
        },
      },
    ],
  ],
};
