import path from 'path';

// import extractTextWebpackPlugin from 'extract-text-webpack-plugin';

export default {
  entry: path.resolve(__dirname, '../src/client/main.js'),
  output: {
    path: path.resolve(__dirname, '../bundles'),
    filename: "client.js"
  },
  resolve: {
    alias: {
      img: path.resolve(__dirname, '../src/clients/img/'),
    },
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
      {
        test: /\.(scss)$/,
        exclude: /node_modules/,
        use:['isomorphic-style-loader','css-loader', 'sass-loader']

      },
      {
        test: /\.css$/,
        use: [
          'isomorphic-style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
    ]
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
};

