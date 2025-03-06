const path = require('path');

module.exports = {
  entry: './src/index.ts', // Explicitly point to src/index.ts
  output: {
    filename: 'bundle.js', // Matches what index.html expects
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js'], // Tell Webpack to resolve .ts and .js files
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // Process .ts files
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, './'), // Serve index.html from the root
    },
    compress: true,
    port: 8080, // Match the port Webpack is using
  },
};