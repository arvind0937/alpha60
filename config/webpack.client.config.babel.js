import path from 'path';

export default {
  entry: path.resolve(__dirname, '../src/client/main.js'),
  output: {
    path: path.resolve(__dirname, '../bundles'),
    filename: "client.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
    ]
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
};

