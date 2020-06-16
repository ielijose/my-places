const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest');

const env = dotenv.config().parsed;

// reduce it to a nice object, the same as before
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports = {
  output: {
    filename: 'app.bundle.js',
    publicPath: '/',
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: './public/favicon.ico', to: './' }],
      options: {
        concurrency: 100,
      },
    }),

    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: './public/favicon.ico',
    }),
    new webpack.DefinePlugin(envKeys),
    new WebpackPwaManifestPlugin({
      name: 'MyPlaces - Save your favorite places.',
      shortname: 'MyPlaces 🌎',
      description: 'With MyPlaces you can save your favorite places around the world.',
      background_color: '#fff',
      theme_color: '#DD4B3E',
      icons: [
        {
          src: path.resolve('src/assets/MyPlaces.png'),
          sizes: [96, 128, 192, 256, 384, 512],
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              '@babel/plugin-transform-runtime',
              'babel-plugin-styled-components',
              '@babel/plugin-syntax-dynamic-import',
            ],
          },
        },
      },
    ],
  },
};
