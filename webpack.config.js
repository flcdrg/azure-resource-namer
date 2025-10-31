const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// config helpers:
const ensureArray = (config) => config && (Array.isArray(config) ? config : [config]) || [];
const when = (condition, config, negativeConfig) =>
  condition ? ensureArray(config) : ensureArray(negativeConfig);

// primary config:
const outDir = path.resolve(__dirname, 'dist');
const srcDir = path.resolve(__dirname, 'src');
const baseUrl = '';

const cssRules = [
  {
    loader: 'css-loader',
    options: {
      esModule: false
    }
  }
];

module.exports = (env, { mode }) => {
  const production = mode === 'production';
  const analyze = env && env.analyze;
  
  return {
    target: 'web',
    resolve: {
      extensions: ['.ts', '.js'],
      modules: [srcDir, 'node_modules'],
      alias: {}
    },
    entry: {
      app: ['./src/main.ts']
    },
    mode: production ? 'production' : 'development',
    output: {
      path: outDir,
      publicPath: baseUrl,
      filename: production ? '[name].[contenthash].bundle.js' : '[name].[fullhash].bundle.js',
      sourceMapFilename: production ? '[name].[contenthash].bundle.map' : '[name].[fullhash].bundle.map',
      chunkFilename: production ? '[name].[contenthash].chunk.js' : '[name].[fullhash].chunk.js',
      clean: true
    },
    optimization: {
      runtimeChunk: true,
      moduleIds: 'deterministic',
      splitChunks: {
        hidePathInfo: true,
        chunks: "initial",
        maxSize: 200000,
        cacheGroups: {
          default: false,
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: 19,
            enforce: true,
            minSize: 30000
          },
          vendorsAsync: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors.async',
            chunks: 'async',
            priority: 9,
            reuseExistingChunk: true,
            minSize: 10000
          },
          commonsAsync: {
            name: 'commons.async',
            minChunks: 2,
            chunks: 'async',
            priority: 0,
            reuseExistingChunk: true,
            minSize: 10000
          }
        }
      }
    },
    performance: { hints: false },
    devServer: {
      static: {
        directory: outDir,
      },
      historyApiFallback: true,
      open: true,
      hot: true,
      port: 8080
    },
    devtool: production ? 'nosources-source-map' : 'eval-cheap-module-source-map',
    module: {
      rules: [
        {
          test: /\.css$/i,
          issuer: /\.[jt]s$/i,
          use: [
            production ? MiniCssExtractPlugin.loader : 'style-loader',
            ...cssRules
          ]
        },
        {
          test: /\.css$/i,
          issuer: /\.html$/i,
          use: cssRules
        },
        { 
          test: /\.html$/i, 
          use: [
            {
              loader: '@aurelia/webpack-loader'
            },
            {
              loader: 'html-loader',
              options: {
                esModule: false
              }
            }
          ]
        },
        { 
          test: /\.ts$/,
          use: [
            {
              loader: 'ts-loader'
            }
          ],
          exclude: /node_modules/
        },
        { test: /\.(png|gif|jpg|cur)$/i, type: 'asset' },
        { test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/i, type: 'asset' },
        { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/i, type: 'asset' },
        { test: /\.(ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/i, type: 'asset/resource' },
        { 
          test: /environment\.json$/i, 
          use: [
            {
              loader: "app-settings-loader", 
              options: {env: production ? 'production' : 'development' }
            },
          ]
        }
      ]
    },
    plugins: [
      new DuplicatePackageCheckerPlugin(),
      new HtmlWebpackPlugin({
        template: 'index.ejs',
        metadata: {
          baseUrl
        }
      }),
      new MiniCssExtractPlugin({
        filename: production ? '[name].[contenthash].bundle.css' : '[name].[fullhash].bundle.css',
        chunkFilename: production ? '[name].[contenthash].chunk.css' : '[name].[fullhash].chunk.css'
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: 'static', to: outDir, noErrorOnMissing: true }
        ]
      }),
      ...when(analyze, new BundleAnalyzerPlugin()),
      new CleanWebpackPlugin()
    ]
  };
};
