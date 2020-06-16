const CompressionPlugin = require('compression-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest');

const env = dotenv.config().parsed;

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
      patterns: [{ from: './public/favicon.ico', to: './dist' }],
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: './dist/favicon.ico',
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
    new CompressionPlugin({
      test: /\.js$|\.css$/,
      filename: '[path].gz',
    }),
  ],
  optimization: {
    minimizer: [new TerserPlugin()],
    splitChunks: {
      chunks: 'async',
      name: true,
      cacheGroups: {
        vendors: {
          name: 'vendors',
          chunks: 'all',
          reuseExistingChunk: true,
          priority: 1,
          enforce: true,
          test(module, chunks) {
            const name = module.nameForCondition && module.nameForCondition();
            return chunks.some((chunk) => chunk.name !== 'vendor' && /[\\/]node_modules[\\/]/.test(name));
          },
        },
      },
    },
  },
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
