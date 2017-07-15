var CleanWebpackPlugin = require('clean-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')

var extractPlugin = new ExtractTextPlugin({
  filename: 'main.css'
})

module.exports = {
  entry: './src/js/index.js',
  // entry: './src/js/index2.js',
  module: {
    rules: [{
      test: /\.js$/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['es2015']
        }
      }
        // ,
        // {
        //     loader: "eslint-loader"
        // }
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
    new HtmlWebpackPlugin({
      template: './src/index.html'
      // template: './src/indexTemp.html'
    }),
    new CleanWebpackPlugin(['dist'])
  ]
}
