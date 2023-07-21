module.exports = {
  presets: ['module:metro-react-native-babel-preset',
],
  plugins: [
    'react-native-reanimated/plugin',
]
};

// module.exports = {
//   presets: ['@babel/preset-env', '@babel/preset-react'],
//   env: {
//     test: {
//       plugins: ["@babel/plugin-transform-runtime"]
//     }
//   }
// };