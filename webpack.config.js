const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const path = require('path');
const extractPlugin = new ExtractTextPlugin({
  filename: 'main.css'
});

module.exports = {
  entry: './src/js/index.js',
  // entry: './src/js/index2.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015']
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: extractPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      }
      // ,
      // {
      //     test: /\.(jpg|png)$/,
      //     use: [{
      //         loader: 'file-loader',
      //         options: {
      //             name: '[name].[ext]',
      //             outputPath: 'img/',
      //             publicPath: 'img/'
      //         }
      //     }]
      // }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    extractPlugin,
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './src/views/index.html'
      // template: './src/views/indexTemp.html'
    }),
    new ManifestPlugin({
      writeToFileEmit: true
    }),
    new SWPrecacheWebpackPlugin({
      cacheId: 'sinergiaPlus-cache-v1',
      dontCacheBustUrlsMatching: /\.\w{8}\./,
      filename: 'sw.js',
      minify: true,
      navigateFallback: `${path.resolve(__dirname, 'dist/index.html')}`,
      staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/]
    })
  ]
};
