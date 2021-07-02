module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        'root': ['./src'],
        'extensions': [
          ".ios.ts",
          ".android.ts",
          ".ts",
          ".ios.tsx",
          ".android.tsx",
          ".tsx",
          ".jsx",
          ".js",
          ".json",
        ],
        'alias': {
          '@assets': './src/assets',
          '@components': './src/components',
          '@navigation': './src/navigation',
          '@styles': './src/styles',
          '@utils': './src/utils',
          '@redux': './src/redux',
       },
      },
    ],
  ],
};
